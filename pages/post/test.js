// pages/hello.js

import React, { useEffect, useState } from 'react';

const Hello = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello'); // Calling the API route
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <p>Hello, {data.name}!</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Hello;
