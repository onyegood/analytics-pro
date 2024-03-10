import React from 'react';
import ListPill from '../ListPill';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <>
      <section className="dashboard">
        <div className="relative">
          <p className="text-4xl mb-36">
            Turning data into real <br /> action and ideas.
          </p>
          <ListPill text="Instant Insight" />
          <ListPill text="AI Technology" />
          <ListPill text="Easy integration" />
          <img
            src="/assets/img/dashboard.png"
            className="absolute right-0 top-0 h-146 z-10 wow fadeInUp duration-1000 delay-700"
            alt="Analytics Dashboard"
          />
        </div>
      </section>
      <div
        className="ramos-bg wow fadeIn duration-1000 delay-700"
        style={{ backgroundImage: 'url(/assets/img/bg.png)' }}
      >
        <p className="ramos wow fadeInLeft duration-1000 delay-700">Ramos</p>
      </div>
    </>
  );
};

export default Dashboard;
