import React from 'react';
import '../../css/app.css';
import Features from '../../composants/Features';
import Header from '../../composants/Header';

const featuresData = [
  {
    iconSrc: './img/icon-chat.png',
    title: 'You are our #1 priority',
    description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
  },
  {
    iconSrc: './img/icon-money.png',
    title: 'More savings means higher rates',
    description: 'The more you save with us, the higher your interest rate will be!'
  },
  {
    iconSrc: './img/icon-security.png',
    title: 'Security you can trust',
    description: 'We use top of the line encryption to make sure your data and money is always safe.'
  }
];

function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <Features features={featuresData} />
      </main>
    </div>
  );
}

export default Home;