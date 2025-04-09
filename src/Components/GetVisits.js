import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Adjust path based on your structure
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

function GetVisits() {
  const [visitCount, setVisitCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const updateVisitCount = async () => {
      try {
        // Reference to the Visits document
        const visitsRef = doc(db, 'Visits', 'counter');
        
        // Get current visit data
        const visitsSnap = await getDoc(visitsRef);
        
        if (visitsSnap.exists()) {
          const data = visitsSnap.data();
          const currentCount = data.count || 0;

          // Increment count
          const newCount = currentCount + 1;
          await updateDoc(visitsRef, {
            count: newCount
          });
          setVisitCount(newCount);
        } else {
          // Create document if it doesn't exist
          await setDoc(visitsRef, {
            count: 1
          });
          setVisitCount(1);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    updateVisitCount();
  }, []);

  return (
<>
</>
  );
}

export default GetVisits;