import React from 'react';
import Circle from '../Circle';
import Button from '../Button';
import ScrollingText from '../ScrollingText';

interface Props {}

const MiddleSection: React.FC<Props> = () => {
  return (
    <section className="p-10">
      <p className="text-left text-c8xl wow rotateInUpLeft">
        Maximize <span className="text-gray-light">efficiency</span>
      </p>
      <p className="text-left text-c8xl wow rotateInUpLeft">
        With our intuitive
      </p>

      <div className="flex row items-center justify-between mt-5">
        <div className="grid">
          <Circle
            className="rounded-full bg-gray-light2 h-22 w-22 col-start-1 row-start-1 z-10"
            src="/assets/icons/flash-outline.svg"
          />
          <Circle
            className="rounded-full bg-yellow h-22 w-22 flex flex-col items-center justify-center col-start-1 row-start-1 ml-17 text-center"
            title="45%"
            text={
              <p className="text-[8px]">
                System grow
                <br /> faster
              </p>
            }
          />
        </div>
        <ScrollingText text="analytics" />
      </div>
      <hr className="border-gray-light mt-10 mb-10" />
      <div className="flex row justify-between items-center">
        <p className="text-xs">
          Explore trafic sources, page behavior, conversions and more to gain
          deep insight
          <br /> into your audience. With us your business doesn't just adapt -
          it evolves.
        </p>
        <div className="">
          <Button
            text="Request a demo"
            className="bg-gray-light rounded-lg text-xs  p-3 px-6 mr-4"
          />
          <Button
            text="Start fo free"
            className="bg-orange rounded-lg p-3 px-6 text-white text-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
