import React, { ReactNode } from 'react';

interface Props {
  title?: string;
  text?: ReactNode;
  src?: string;
  className?: string;
  alt?: string;
  imageStyle?: string;
}

const Circle: React.FC<Props> = ({
  title,
  text,
  src,
  className = 'rounded-full bg-gray-light h-24 w-24',
  imageStyle = 'h-8',
  alt,
}) => {
  return (
    <div
      className={`${className} flex items-center justify-center wow zoomIn duration-1000 delay-300`}
    >
      {title && <p>{title}</p>}
      {text}
      {src && <img src={src} className={imageStyle} alt={alt} />}
    </div>
  );
};

export default Circle;
