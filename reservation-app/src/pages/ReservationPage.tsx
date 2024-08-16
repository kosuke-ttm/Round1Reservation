import React from 'react';
import BsButton from '../components/BsButton';

const ReservationPage: React.FC = () => {
  return (
    <div>
      <h1>BS Reservation System</h1>
      <div>
        {[...Array(17)].map((_, index) => (
          <BsButton key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ReservationPage;
