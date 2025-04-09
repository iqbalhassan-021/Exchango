import React, { useState } from 'react';
import { db } from '../firebase'; // Adjust path based on your structure
import { collection, addDoc } from 'firebase/firestore';

function SupportForm() {
  const [nickname, setNickname] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Prepare the data with only comment and nickname
      const formData = {
        comment: comment,
        nickname: nickname
      };

      // Save to Firestore
      await addDoc(collection(db, 'HappyClients'), formData);

      // Reset form and show success
      setNickname('');
      setComment('');
      setSuccess(true);
      setLoading(false);

      // Show thank you alert
      //window.alert('Thank you for your feedback! We appreciate your support.');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="support-container">
      <div className="page-cover">
        <div className="support">
          <form className="support-form" onSubmit={handleSubmit}>
            <div className="form-tab">
              <label htmlFor="nickname">Nickname</label>
              <input 
                type="text" 
                id="nickname" 
                name="nickname" 
                required 
                className="form-input" 
                placeholder="Enter your nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
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
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="form-tab">
              <button 
                type="submit" 
                className="primary-button" 
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
            {error && (
              <div className="form-tab" style={{ color: 'red', textAlign: 'center' }}>
                <p>Error: {error}</p>
              </div>
            )}
            {success && (
              <div className="form-tab" style={{ color: 'green', textAlign: 'center' }}>
                <p>Thank you for your feedback! We appreciate your support.</p>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
}

export default SupportForm;