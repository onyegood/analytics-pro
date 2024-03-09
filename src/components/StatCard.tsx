import React from 'react';
import Circle from './Circle';
import Button from './Button';
import CountUp from 'react-countup';
import MixedChart from './MixedChart';

interface Props {
  title?: string;
  icon?: string;
  graph?: boolean;
  className?: string;
  amount?: number;
}

const StatCard: React.FC<Props> = ({
  title,
  icon,
  graph,
  className,
  amount = 0,
}) => {
  return (
    <div
      className={`w-full bg-white m-1 rounded-3xl shadow-2xl p-3 col-start-1 row-start-1 ${className} wow fadeIn duration-1000 delay-700`}
    >
      <div className="flex row justify-between items-center ">
        <div className="flex flex-col justify-between h-52">
          <div className="justify-start flex items-center">
            {icon && (
              <Circle
                className="rounded-lg bg-gray-light2 h-6 w-6 flex items-center justify-center m-1"
                src={`/assets/icons/${icon}`}
                imageStyle="h-3"
              />
            )}

            {title && <p className="text-sm ml-1">{title}</p>}
          </div>

          {amount ? (
            <div>
              <p className="mb-2 text-gray-light text-sm">Total profit</p>
              <p className="mb-5 text-3xl">
                <span className="text-lg wow fadeIn">$</span>
                <CountUp
                  start={0}
                  end={amount}
                  duration={2.75}
                  separator=","
                  decimals={0}
                  decimal=","
                  prefix=""
                  suffix="K"
                  enableScrollSpy
                />
              </p>
              <Button
                text="Data visualization"
                className="bg-yellow rounded-lg mb-3 p-2 text-black text-xs"
              />
            </div>
          ) : null}
        </div>
        {graph ? (
          <MixedChart
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
            values1={[5, 20, 7, 10, 80]}
            values2={[5, 20, 7, 10, 80]}
          />
        ) : null}
      </div>
    </div>
  );
};

export default StatCard;
