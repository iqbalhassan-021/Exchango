// components/NewsHolder.jsx
import React from 'react';

function NewsHolder() {
  const newsItems = Array(3).fill({
    title: 'Latest News',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
  });

  return (
    <div className="news-holder">
      <div className="page-cover center">
        <h1 className="news-header">Latest News & Currency Insights</h1>
        <div className="news-grid grid-3x">
          {newsItems.map((item, index) => (
            <a href="#" className="no-decoration" key={index}>
              <div className="news-item">
                <img src="/Assets/Images/map.png" alt={`news${index + 1}`} />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsHolder;