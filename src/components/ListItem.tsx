import React from 'react';

interface Props {
  title: string;
  url?: string;
  amount: string;
}

const ListItem: React.FC<Props> = ({ title, url, amount }) => {
  return (
    <div className="flex row justify-between items-center mb-3 mt-3 wow fadeInUp duration-1000 delay-300">
      <div className="flex row justify-between items-center">
        {url && <img src={url} className="h-8 w-8 rounded-full" alt={title} />}
        <p className="text-gray-light text-xs ml-3">{title}</p>
      </div>
      <p className="text-sm">{amount}</p>
    </div>
  );
};

export default ListItem;
