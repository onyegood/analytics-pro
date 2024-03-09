import React from 'react';

interface Props {
  count?: number;
  height?: string;
}

const ProgressBar: React.FC<Props> = ({ count = 80, height = 'h-0.5' }) => {
  return (
    <div
      className={`w-full bg-gray rounded-full ${height} mb-1 mt-2 dark:bg-gray-light wow fadeIn`}
    >
      <div
        className={`bg-green ${height} rounded-full dark:bg-green`}
        style={{ width: `${count}%` }}
      />
    </div>
  );
};

export default ProgressBar;
