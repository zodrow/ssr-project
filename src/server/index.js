import express from "express";
import React from "react";
import cors from "cors"
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import routes from '../shared/routes';
import App from "../shared/App";
import articles from "../shared/news/articles";
import dribbleAnimations from "../shared/animations/dribbleAnimations";
import "isomorphic-fetch";

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/api/news", (req, res) => {
  res.json(articles);
});

app.get("/api/animations", (req, res) => {
  res.json(dribbleAnimations);
});

app.get("*", (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route));
  const requestInitialData = activeRoute.component.requestInitialData && activeRoute.component.requestInitialData();

  // Promise back from requestInitialData or component does not have a requestInitialData so wrap it in a promise.resolve so convert any return values into something I can call .then on
  Promise.resolve(requestInitialData)
    .then(initialData => {
      // <StaticRouter/> Doesnt try to get the url automatically as browswer router does, 
      // you have to provide it with which route it should render 
      // (in this case whatever route the user requested )
      const context = { initialData }
      const markup = renderToString(
        <StaticRouter location={req.url} context={context} >
          <App />
        </StaticRouter>
      );

      res.send(`
        <!DOCTYPE html>
        <head>
          <title>SSR Project</title>
          <link rel="stylesheet" href="/css/main.css">
        </head>
        <body>
          <div id="root">${markup}</div>
          <script src="/bundle.js" defer></script>
          <script>window.__initialData__ = ${JSON.stringify(initialData)}</script>
        </body>
        </html>
      `)
    })
    .catch(err => {
      console.log('err', err)
      next();
    })
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening');
})