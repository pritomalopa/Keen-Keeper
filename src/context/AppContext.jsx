import React, { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data from public folder
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load friends", err);
        setLoading(false);
      });
  }, []);

  const addTimelineEntry = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-GB'),
      type: type, // 'call', 'text', 'video'
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friendName}`
    };
    setTimeline([newEntry, ...timeline]);
    toast.success(`${newEntry.title} logged!`);
  };

  return (
    <AppContext.Provider value={{ friends, loading, timeline, addTimelineEntry }}>
      {children}
    </AppContext.Provider>
  );
};