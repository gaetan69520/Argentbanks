import React from 'react';
import "../../css/app.css";

const Features = ({ features }) => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <img src={feature.iconSrc} alt={feature.title} className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;