// components/NewsHolder.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { db } from '../firebase'; // Adjust the path to your Firebase config file
import { collection, getDocs } from 'firebase/firestore';

function NewsHolder({ isHome = false }) {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Blogs')); // Matches your collection name
        const blogsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log('Fetched Blogs:', blogsData);

        if (isHome) {
          setNewsItems(blogsData.slice(0, 3)); // Limit to 3 for Home
        } else {
          setNewsItems(blogsData); // Show all elsewhere
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs from Firestore:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [isHome]);

  return (
    <div className="news-holder">
      <div className="page-cover center">
        <h1 className="news-header">Latest News & Currency Insights</h1>
        <div className="news-grid grid-3x">
          {loading ? (
            <p>Loading blogs...</p>
          ) : newsItems.length === 0 ? (
            <p>No blogs found in Firestore.</p>
          ) : (
            newsItems.map((item) => (
              <Link to={`/blog/${item.id}`} className="no-decoration" key={item.id}>
                <div className="news-item">
                  <img
                    src={item.BlogImage || '/Assets/Images/map.png'}
                    alt={item.BlogTitle || `news-${item.id}`}
                    onError={(e) => (e.target.src = '/Assets/Images/map.png')}
                  />
                  <h2>{item.BlogTitle || 'Untitled Blog'}</h2>
                  <p>{item.BlogDesc ? item.BlogDesc.substring(0, 100) + '...' : 'No description available'}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsHolder;