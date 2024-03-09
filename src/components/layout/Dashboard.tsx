import React from 'react';
import ListPill from '../ListPill';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <section className="bg-gray-lighter pt-20 rounded-[60px] mb-10 pr-0 pb-0 relative animate-in slide-in-from-bottom">
      <div className="relative pl-20">
        <p className="text-4xl mb-36">
          Turning data into real <br /> action and ideas.
        </p>
        <ListPill text="Instant Insight" />
        <ListPill text="AI Technology" />
        <ListPill text="Easy integration" />
        <img
          src="/assets/img/dashboard.png"
          className="absolute right-0 top-0 h-[53rem] z-10 wow fadeInUp duration-1000 delay-700"
          alt="Analytics Dashboard"
        />
      </div>
      <div className="bg-gray-lighter pl-16 mt-24">
        <p className="font-[500] text-[27rem] text-orange wow fadeInLeft duration-1000 delay-700">
          Ramos
        </p>
      </div>
    </section>
  );
};

export default Dashboard;
