import React from 'react';

const NewsList = ({ news }) => (
  <div>
    <h1>NPR News</h1>
    <div>
      {news && news.map(article => (
        <div className="article-container" key={article.id}>
          <img src={article.image} />
          <h3 className="title">{article.title}</h3>
          <p className="date">{article.date}</p>
          <p className="text">{article.text}</p>
        </div>
      ))}
    </div>
  </div>
)

export default NewsList;