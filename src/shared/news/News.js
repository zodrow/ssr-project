import React, { Component } from 'react';
import NewsList from "./NewsList";
import "isomorphic-fetch";

class News extends Component {
  constructor(props) {
    super(props)
    let initialData;
    // props.staticContext -- Is the prop the <StaticRouter /> injects
    if (props.staticContext) {
      initialData = props.staticContext.initialData;
    } else {
      initialData = window.__initialData__;
      // Passage state should be garbage collected
      // also, avoids conflicts with other components with routing 
      delete window.__initialData__;
    }

    this.state = { news: initialData }
  }

  // This is not called on the server, so can safely use it to do data fetching on the browswer when it doesnt come pre poppulated
  // Fetch data only when needed.
  componentDidMount() {
    // Only fetch if no news in component's state
    if(!this.state.news) {
      News.requestInitialData().then(news => this.setState({ news }));
    }
  }

  // Static method are used for placing utilitaries function 
  // for a given class that doesn't belong to its instances
  static requestInitialData() {
    return fetch('http://localhost:3000/api/news')
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  render() {
    const { news } = this.state;
    return <NewsList news={news} />;
  }
}

export default News;