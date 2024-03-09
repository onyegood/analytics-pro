import React from 'react';
import Button from '../Button';
import Circle from '../Circle';
import ListItem from '../ListItem';
import ProgressBarMultiple from '../ProgressBarMultiple';
import StatCard from '../StatCard';
import { ravenu } from '../../data';
import CountUp from 'react-countup';

interface Props {}

const Insight: React.FC<Props> = () => {
  return (
    <section className="p-20">
      <p className="text-left text-8xl wow fadeInUp duration-1000 delay-700">
        We give you full <br /> <span className="text-gray-light">control</span>{' '}
        over your data.
      </p>

      <div className="flex row justify-between mt-20">
        <div
          className="rounded-4xl bg-repeat w-full mr-2 border-[0.5px] border-gray-light"
          style={{ backgroundImage: 'url(/assets/img/bg.png)' }}
        >
          <div className="grid my-4 place-content-center">
            <div className="h-64 w-56 bg-white m-10 rounded-4xl shadow-2xl p-10 flex flex-col items-center justify-between col-start-1 row-start-1 wow fadeIn duration-1000 delay-700">
              <p className="mb-4 text-sm">Conversion rate</p>
              <div className="bg-yellow rounded-2xl w-full p-3 text-center relative">
                <Circle
                  className="rounded-full bg-gray-light2 h-8 w-8 flex items-center justify-center m-1 absolute bottom-14 right-[7.5rem]"
                  src="/assets/icons/pulse-outline.svg"
                  imageStyle="h-4"
                />
                <p className="text-6xl">
                  2,3<span className="text-4xl">%</span>
                </p>
              </div>
              <p className="text-sm text-gray-light mt-4">
                Percentage of <br /> website visitors
              </p>
            </div>

            <div className="w-56 bg-white m-1 rounded-3xl shadow-2xl p-3 col-start-1 row-start-1 ml-60 mt-20 wow fadeIn duration-1000 delay-700">
              <p className="mb-2 text-gray-light text-sm">Sales revenue</p>
              <p className="mb-5 text-3xl">
                <span className="text-lg">$ </span>
                <CountUp
                  start={0}
                  end={1312}
                  duration={2.75}
                  separator=","
                  decimals={0}
                  decimal=","
                  prefix=""
                  suffix="K"
                  enableScrollSpy
                />
              </p>
              <ProgressBarMultiple
                height="h-1"
                count1={35}
                count2={35}
                count3={30}
              />
              {ravenu.map((item) => (
                <ListItem
                  key={item.id}
                  url={item.image}
                  title={item.title}
                  amount={item.price}
                />
              ))}
              <hr className="mt-7 mb-3 border-[0.5px] border-gray-light" />
              <ListItem title="Engagement rate" amount="47.84%" />
            </div>
          </div>
          <div className="text-center bg-gray-lighter p-10 rounded-bl-4xl rounded-br-4xl">
            <p className="text-2xl mb-5 wow fadeIn">
              Improved customer service
            </p>
            <p className="wow fadeIn">
              Analytics helps optimize service processes by
              <br /> providing information on how to improve interactions
              <br /> with customers and increase their satisfaction.
            </p>
          </div>
        </div>

        <div
          className="rounded-4xl bg-repeat w-full mr-2 border-[0.5px] border-gray-light flex flex-col justify-between"
          style={{ backgroundImage: 'url(/assets/img/bg.png)' }}
        >
          <div className="relative p-40 ">
            <StatCard className="inset-y-0 w-2/5 h-4/5 absolute m-auto left-0 right-0" />
            <StatCard
              title="Finance reports"
              icon="network.png"
              className="absolute inset-y-0 w-2/4 h-4/5 m-auto left-0 right-0 -mb-2"
            />
            <StatCard
              title="Insights"
              icon="image-outline.svg"
              amount={2642}
              graph
              className="absolute inset-y-0 w-2/3 h-4/5 m-auto left-0 right-0 rounded-3xl -mb-14"
            />
          </div>
          <div className="w-full text-center bg-gray-lighter p-10 rounded-bl-4xl rounded-br-4xl">
            <p className="text-2xl mb-5 wow fadeIn">
              Monitoring key indicators
            </p>
            <p className="wow fadeIn">
              Analytics platforms allow businesses to track
              <br /> KPIs, an important tool for measuring success
              <br /> and achieving goals.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center flex flex-col justify-center items-center">
        <div className=" mt-32 mb-10 bg-orange shadow-2xl shadow-orange/60 h-28 w-28 rounded-3xl flex items-center justify-center wow fadeInUp duration-1000 delay-700">
          <img src="/assets/img/s.png" alt="Ramos Logo" />
        </div>

        <div>
          <p className="text-8xl wow fadeInUp duration-1000 delay-700">
            Get Started
          </p>
          <p className="mt-8 mb-10 text-gray wow fadeInUp duration-1000 delay-700">
            Turn information into advantage! Start using <br /> Ramos today.
            Sign up for a free trial.
          </p>
          <div>
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
      </div>
    </section>
  );
};

export default Insight;
