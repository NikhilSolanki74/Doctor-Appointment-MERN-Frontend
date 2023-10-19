import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './../components/Layout';

const HomePage = () => {
  const [error, setError] = useState(null);

  const getUserData = async () => {
    try {
      const res = await axios.post('/api/v1/getUserData', {}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
        },
     });
      // Process response data if needed
    } catch (error) {
      // Display an error message to the user
      setError('An error occurred while fetching user data. Please try again later.');
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <h1>This is our HomePage</h1>
      {error && <div className="error-message">{error}</div>}
    </Layout>
  );
};

export default HomePage;
