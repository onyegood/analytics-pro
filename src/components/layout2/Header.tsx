import React from 'react';
import Button from '../Button';

interface Props {
  className?: string;
}

const links: String[] = [
  'Download',
  'Reports',
  'Documents',
  'History',
  'Settings',
];

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={`flex row justify-between bg-black rounded-2xl text-white items-center m-3 wow fadeIn ${className}`}
    >
      <img src="/assets/img/logo-small.png" alt="Ramos Logo" className="ml-5" />
      <div className="bg-gray-dark p-4 m-2 rounded-2xl">
        <ul className="flex space-x-8">
          {links.map((item, index) => (
            <li key={index + 1} className="cursor-pointer ">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Button
        text="Sign up"
        className="mr-3 p-3 w-32 rounded-2xl bg-white text-black"
      />
    </header>
  );
};

export default Header;
