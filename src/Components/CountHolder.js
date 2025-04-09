// components/CountHolder.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Adjust path based on your structure
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';

function CountHolder() {
  const [clicks, setClicks] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [visits, setVisits] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Fetch Clicks count
        const clicksRef = doc(db, 'Clicks', 'counter');
        const clicksSnap = await getDoc(clicksRef);
        const clicksCount = clicksSnap.exists() ? clicksSnap.data().count || 0 : 0;
        setClicks(clicksCount);

        // Fetch HappyClients count (number of documents)
        const happyClientsSnap = await getDocs(collection(db, 'HappyClients'));
        const happyClientsCount = happyClientsSnap.size; // .size gives the count of documents
        setHappyClients(happyClientsCount);

        // Fetch Visits count
        const visitsRef = doc(db, 'Visits', 'counter');
        const visitsSnap = await getDoc(visitsRef);
        const visitsCount = visitsSnap.exists() ? visitsSnap.data().count || 0 : 0;
        setVisits(visitsCount);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching counts:', err);
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  const counts = [
    { number: `${clicks}`, text: 'Clicks' },
    { number: `${happyClients}`, text: 'Happy Clients' },
    { number: `${visits}`, text: 'Visitors' },
    { number: `100+`, text: 'Curencies' },
  ];

  return (
    <div className="count-holder">
      <div className="page-cover">
        <div className="count grid-4x">
          {loading ? (
            <p>Loading counts...</p>
          ) : (
            counts.map((item, index) => (
              <div className="count-item" key={index}>
                <p className="count-number">{item.number}</p>
                <p className="count-text">{item.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CountHolder;