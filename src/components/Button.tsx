import React from 'react';

interface Props {
  text: string;
  className?: string;
}

const Button: React.FC<Props> = ({
  text,
  className = 'p-3 w-32 rounded-2xl bg-white text-black wow fadeInUp duration-1000 delay-300',
}) => {
  return (
    <button className={`${className} wow fadeInUp duration-1000 delay-300`}>
      {text}
    </button>
  );
};

export default Button;
