import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the BS Reservation System</h1>
      <Link to="/reservation">
        <button>Go to Reservation</button>
      </Link>
    </div>
  );
};

export default Home;
