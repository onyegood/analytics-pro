import React, { useRef } from 'react';

import Circle from '../Circle';
import Button from '../Button';
import ProgressBar from '../ProgressBar';
import LineChart from '../charts/LineChart';
import { labels, values1 } from '../../data';
import useScrollTriggeredCountUp from '../../hooks/useScrollTriggeredCountUp';

interface Props {}

const Analytics: React.FC<Props> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visitors = useScrollTriggeredCountUp(ref, 56);
  const rate = useScrollTriggeredCountUp(ref, 58);
  const transaction = useScrollTriggeredCountUp(ref, 43);

  return (
    <div className="bg-gray-lighter p-10 rounded-[60px] mb-10 mt-20">
      <div className="flex row justify-between items-center mb-10">
        <p
          className="text-4xl wow fadeInUp"
          data-wow-duration="1000"
          data-wow-delay="300"
        >
          Your key to strategic <br /> success through analytics
        </p>
        <p
          className="wow fadeInUp"
          data-wow-duration="1000"
          data-wow-delay="300"
        >
          Ready for exciting instantaneous
          <br /> all-accessible insight in real time?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white p-5 pr-0 pb-0 rounded-3xl border-gray-light">
          <div className="grid gap-4 grid-cols-2">
            <div className="">
              <Button
                className="bg-yellow text-xs p-1 rounded-lg"
                text="Setting up exports"
              />
              <p
                className="mt-16 mb-4 text-lg wow fadeIn"
                data-wow-duration="1000"
                data-wow-delay="300"
              >
                Fast and easy access <br />
                to analytics
              </p>
              <p
                className="text-sm text-gray mb-4 wow fadeIn"
                data-wow-duration="1000"
                data-wow-delay="300"
              >
                One platform is a comprehensive <br /> system of solutions that
                will be the <br /> first step towards digitalization
                <br /> of your business.
              </p>
            </div>
            <div className="p-3 border-[0.5px] rounded-xl border-gray-light rounded-bl-none">
              <p className="text-sm wow fadeIn">Sales Statistic</p>

              <div className="flex row justify-between">
                <div className="flex row justify-between items-center">
                  <Circle
                    className="rounded-full bg-orange h-10 w-10 flex items-center justify-center m-1"
                    src="/assets/icons/stack.png"
                    imageStyle="h-5"
                  />
                  <div>
                    <p className=" text-xs text-gray wow fadeIn">
                      Total profit
                    </p>
                    <p className="text-2xl wow fadeIn">
                      <span className="text-gray text-sm wow fadeIn">$</span>{' '}
                      264.2K
                    </p>
                  </div>
                </div>
                <div className="bg-gray-lighter p-3 rounded-xl w-24">
                  <p className="text-xs mb-1 wow fadeIn">visitors</p>
                  <ProgressBar count={45} />
                  <div className="flex items-start justify-start">
                    {visitors}K
                    <div className="flex items-center justify-center">
                      <Circle
                        className="rounded-full bg-green h-2 w-2 flex items-center justify-center m-1"
                        src="/assets/icons/arrow-up-outline.svg"
                        imageStyle="h-2"
                        alt="Analytics icon"
                      />

                      <p className="text-green text-[9px] wow fadeIn">+14%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full border-[0.5px] rounded-2xl h-auto mt-4 border-gray-light p-3 relative">
                <p className="text-gray text-xs wow fadeIn">Visit Statistics</p>

                <LineChart
                  labels={labels}
                  data={values1}
                  height={70}
                  width={200}
                />

                <div className=" w-20 bg-orange rounded-lg p-1 right-2 absolute bottom-2">
                  <div className="flex row justify-between items-center">
                    <p className=" text-[8px] text-white mb-1 wow fadeIn">
                      Rate
                    </p>
                    <img src="/assets/icons/rate.png" alt="" className="h-3" />
                  </div>

                  <p className="text-sm text-white wow fadeIn" ref={ref}>
                    {rate}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black rounded-3xl p-3">
          <div className="flex row justify-evenly items-center mt-3 mb-10 wow zoomIn">
            <div className="bg-black-light w-28 h-28 border-[0.5px] border-gray rounded-2xl p-2 flex flex-col justify-evenly items-center">
              <img src="/assets/icons/stack2.png" className="h-7" alt="" />
              <div className="grid">
                <img
                  src="/assets/img/passport1.jpeg"
                  className="h-8 col-start-1 row-start-1 rounded-full wow zoomIn"
                  alt="Flash icon"
                />
                <img
                  src="/assets/img/avatar.png"
                  className="h-8 col-start-1 row-start-1 ml-7 rounded-full wow zoomIn"
                  alt="Analytics icon"
                />
              </div>
            </div>
            <div className="bg-black-light w-28 h-28 border-[0.5px] border-gray rounded-2xl p-3 wow zoomIn">
              <p className="text-white wow fadeIn text-xs">Transaction</p>
              <div className="flex items-center justify-center ml-10">
                <Circle
                  className="rounded-full bg-green h-4 w-4 flex items-center justify-center col-start-1 row-start-1 m-3 mr-1 ml-0"
                  src="/assets/icons/arrow-up-outline.svg"
                  imageStyle="h-2"
                  alt="Analytics icon"
                />

                <p className="text-green text-[9px] wow fadeIn">+14%</p>
              </div>
              <p className="text-white text-center text-3xl wow fadeIn">
                {transaction}k
              </p>
            </div>
          </div>

          <p className="text-white text-center wow fadeIn">Widget control</p>
          <p className="text-gray text-xs text-center mt-3 wow fadeIn">
            Reports provide a comprehensive overview <br /> of the important
            aspect of the web analytics.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <p className="text-sm wow fadeIn">
          Up to <span className="text-7xl">45%</span>
        </p>{' '}
        <p className="text-left text-sm ml-6 wow fadeIn">
          Increase you analytics efficiency by up to 45% Unique
          <br /> algorithms provide insights from data, reduce time for analysis
          <br /> and save time for making important, informed decisions.
        </p>
      </div>
    </div>
  );
};

export default Analytics;
