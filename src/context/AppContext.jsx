import React, { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState([]);

  // Fetch Friends Data with Loading Animation (Requirement 10.2)
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch('/friends.json');
        const data = await response.json();
        // Fake delay to show loading animation properly
        setTimeout(() => {
          setFriends(data);
          setLoading(false);
        }, 1000); 
      } catch (error) {
        console.error("Failed to fetch friends", error);
        setLoading(false);
      }
    };
    fetchFriends();
  }, []);

  // Function to add timeline entry (Requirement 6)
  const addTimelineEntry = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type, // 'Call', 'Text', or 'Video'
      friendName,
      title: `${type} with ${friendName}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };
    
    setTimeline([newEntry, ...timeline]);
    toast.success(`Logged: ${newEntry.title}`, {
      icon: '✅',
      style: { borderRadius: '10px', background: '#333', color: '#fff' },
    });
  };

  return (
    <AppContext.Provider value={{ friends, loading, timeline, addTimelineEntry }}>
      {children}
    </AppContext.Provider>
  );
};