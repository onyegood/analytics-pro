import React from 'react';

interface Props {
  text: string;
}

const ListPill: React.FC<Props> = ({ text }) => {
  return (
    <div className="bg-white rounded-4xl w-60 p-3 flex row justify-between items-center mb-5 wow fadeInUp duration-1000 delay-300">
      <p className="text-sm">{text}</p>
      <div className="rounded-full bg-gray-light h-7 w-7 flex items-center justify-center">
        <img src="/assets/icons/add-outline.svg" className="h-3" alt={text} />
      </div>
    </div>
  );
};

export default ListPill;
