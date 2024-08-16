import React, { useState } from 'react';

interface BsButtonProps {
  index: number;
}

const BsButton: React.FC<BsButtonProps> = ({ index }) => {
  const [status, setStatus] = useState<'稼働' | '停止'>('稼働');

  const toggleStatus = () => {
    setStatus(status === '稼働' ? '停止' : '稼働');
  };

  return (
    <button
      onClick={toggleStatus}
      style={{
        backgroundColor: status === '稼働' ? (index >= 9 ? 'white' : 'red') : 'gray',
        color: status === '稼働' ? 'black' : 'white',
      }}
    >
      BS {index + 1} - {status}
    </button>
  );
};

export default BsButton;
