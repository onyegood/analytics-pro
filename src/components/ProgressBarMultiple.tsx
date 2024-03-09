import React from 'react';

interface Props {
  height?: string;
  count1?: number;
  count2?: number;
  count3?: number;
}

const ProgressBarMultiple: React.FC<Props> = ({
  height = 'h-0.5',
  count1,
  count2,
  count3,
}) => {
  return (
    <div
      className={`mb-4 flex ${height} overflow-hidden rounded bg-gray-100 text-xs wow fadeIn`}
    >
      <div
        style={{ width: `${count1}%` }}
        className="bg-green transition-all duration-500 ease-out"
      />
      <div
        style={{ width: `${count2}%` }}
        className="bg-yellow transition-all duration-500 ease-out"
      />
      <div
        style={{ width: `${count3}%` }}
        className="bg-orange transition-all duration-500 ease-out"
      />
    </div>
  );
};

export default ProgressBarMultiple;
