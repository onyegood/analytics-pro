import React from 'react';
import './ScrollingText.css';

interface Props {
  text: string;
}

const ScrollingText: React.FC<Props> = ({ text }) => {
  return (
    <div className="scroll bg-yellow rounded-full p-3 text-center wow fadeInUp duration-1000 delay-300 overflow-hidden">
      <p className="text-right text-7xl">{text}</p>
    </div>
  );
};

export default ScrollingText;
