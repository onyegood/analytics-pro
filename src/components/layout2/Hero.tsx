import React from 'react';
import Circle from '../Circle';

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <section className="p-5">
      <div className="flex row justify-center mt-20">
        <div className="mt-10 ml-10">
          <div className="flex row items-center justify-end">
            <div className="grid mr-3">
              <Circle
                className="rounded-full bg-gray-light2 h-17 w-17 flex items-center justify-center col-start-1 row-start-1"
                src="/assets/icons/flash-outline.svg"
              />
              <Circle
                className="rounded-full bg-orange h-17 w-17 flex items-center justify-center col-start-1 row-start-1 ml-14"
                src="/assets/icons/analytics-outline.svg"
              />
            </div>
            <p className="text-right text-c8xl font-semi-bold wow fadeInUp duration-1000 delay-300 line-clamp-1">
              Analytics
            </p>
          </div>
          <p className="text-right text-c8xl mr-10 wow fadeInUp duration-1000 delay-500">
            that <span className="text-gray-light">helps</span> you
          </p>
        </div>
        <img
          src="/assets/img/laptop.png"
          alt="Analytics Pro Laptop"
          className="wow zoomInUp duration-1000 delay-300 h-56"
        />
      </div>
      <div className="flex row justify-end items-center mr-6 mt-0">
        <p className="text-c8xl text-center wow fadeInUp duration-1000 delay-700">
          shape{' '}
        </p>
        <Circle
          className="rounded-full bg-yellow h-17 w-17 flex items-center justify-center col-start-1 row-start-1 m-2"
          src="/assets/icons/pulse-outline.svg"
        />
        <p className="text-c8xl text-center wow fadeInUp duration-1000 delay-700">
          the future
        </p>
      </div>
    </section>
  );
};

export default Hero;
