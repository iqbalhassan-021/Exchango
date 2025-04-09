// components/BlogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get the blog ID from the URL
import { db } from '../firebase'; // Adjust the path to your Firebase config file
import { doc, getDoc } from 'firebase/firestore';
import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';
import Notifications from '../Components/Notifications';

function BlogPost() {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch single blog from Firestore based on ID
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogRef = doc(db, 'Blogs', id); // Reference to the specific blog document
        const blogSnap = await getDoc(blogRef);

        if (blogSnap.exists()) {
          setBlog({ id: blogSnap.id, ...blogSnap.data() });
        } else {
          console.log('No such blog found!');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <>
    <div className="page-wrapper">
        <Notifications /> {/* Include notifications for consistency */}
    <NavigationBar /> {/* Include navigation bar for consistency */}
    <div className="news-holder"> {/* Reuse same parent class for styling */}
      <div className="page-cover center">
        {loading ? (
          <p>Loading blog...</p>
        ) : !blog ? (
          <p>Blog not found.</p>
        ) : (
          <div className="news-item" style={{maxWidth:'780px'}}> {/* Reuse news-item class for consistency */}
            <h1 className="news-header" style={{ textAlign: 'left', fontSize:'28px' }}>{blog.BlogTitle || 'Untitled Blog'}</h1>
            <img
              src={blog.BlogImage || '/Assets/Images/map.png'}
              alt={blog.BlogTitle || 'Blog Image'}
              onError={(e) => (e.target.src = '/Assets/Images/map.png')}
              style={{ maxWidth: '100%', height: 'auto' }} // Ensure image fits
            />
            <p>{blog.BlogDesc || 'No description available'}</p> {/* Full description */}
          </div>
        )}
      </div>
    </div>
    <Footer /> {/* Include footer for consistency */}
    </div>
    </>
  );
}

export default BlogPost;