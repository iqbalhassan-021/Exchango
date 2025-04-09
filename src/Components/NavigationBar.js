// components/NavigationBar.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Correct import statement

function NavigationBar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const logo = document.getElementById('logo');
      const bars = document.getElementById('abars');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        logo.src = "/Assets/Images/footer_logo.png";
        bars.style.color = "white";
      } else {
        navbar.classList.remove('scrolled');
        logo.src = "/Assets/Images/site_logo.png";
        bars.style.color = "black";
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleToggle() {
    const navbar = document.getElementById('navtab');
    if (navbar.style.display === 'none' || navbar.style.display === '') {
      navbar.style.display = 'block';
    } else {
      navbar.style.display = 'none';
    }
  }

  // Define routes for each navigation item
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Convert', path: '/convert' },
    { name: 'Blogs', path: '/news' },
    { name: 'Git', path: 'https://github.com/iqbalhassan-021/Exchango' },
    { name: 'API', path: '/api' },
    { name: 'Support', path: '/support' }
  ];

  return (
    <div className="navigation-bar" id="navbar">
      <div className="page-cover">
        <div className="nav-bar">
          <div className="logo-holder">
            <Link to="/" className="no-decoration">
              <img src="/Assets/Images/site_logo.png" alt="Logo" className="logo" id="logo" />
            </Link>
            <a className="no-decoration" id="abars" onClick={handleToggle}>
              <i className="fa-solid fas fa-bars" id="bars"></i>
            </a>
          </div>
          <div className="nav-tab" id="navtab">
            {navItems.map((item) => (
              <Link to={item.path} className="no-decoration" key={item.name}>
                <div className="nav-button navbutton">
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;