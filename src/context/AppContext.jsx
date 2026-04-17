import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timeline, setTimeline] = useState([]);

  const addTimelineEntry = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type,
      friendName,
      title: `${type} with ${friendName}`,
      date: new Date().toLocaleDateString()
    };
    setTimeline([newEntry, ...timeline]);
  };

  return (
    <AppContext.Provider value={{ friends, loading, timeline, addTimelineEntry }}>
      {children}
    </AppContext.Provider>
  );
};