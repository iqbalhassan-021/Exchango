import React from 'react';

function SupportForm() {
  return (
    <div className="support-container">
      <div className="page-cover">
        <div className="support">
          <form className="support-form">
            <div className="form-tab">
              <label htmlFor="nickname">Nickname</label>
              <input 
                type="text" 
                id="nickname" 
                name="nickname" 
                required 
                className="form-input" 
                placeholder="Enter your nickname"
              />
            </div>
            <div className="form-tab">
              <label htmlFor="comment">Your Comment</label>
              <textarea 
                id="comment" 
                name="comment" 
                required 
                className="form-textarea" 
                placeholder="Write your comment here..." 
                rows="6"
              />
            </div>

            <div className="form-tab">
              <button type="submit" className="primary-button">Submit</button>
            </div>
            <div 
              className="form-tab" 
              style={{ textAlign: 'center', marginTop: '20px' }}
            >
              <a 
                href="https://www.buymeacoffee.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="no-decoration primary-button"
                style={{ backgroundColor: '#FFDD00', color: '#000' }}
              >
                ☕ Buy Me a Coffee
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SupportForm;