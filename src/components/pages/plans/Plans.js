import React from "react";
import "./Plans.css";

function Plans() {
  const pricingData = [
    {
      title: "Regular member",
      price: "$0",
      duration: " 1month",
      color: "#fff",
      features: [
        "unlimited access to all cource",
        "cutomer support",
        "personal menter",
        "Standerd options",
        "5 classes per week",
      ],
    },
    {
      title: "Premium member",
      price: "$100",
      duration: " 1month",
      color: "#6f55f2",
      features: [
        "unlimited access to all cource",
        "cutomer support",
        "personal menter",
        "Standerd options",
        "5 classes per week",
      ],
    },
    {
      title: "standerd member",
      price: "$10",
      duration: " 1month",
      color: "#fff",
      features: [
        "unlimited access to all cource",
        "cutomer support",
        "personal menter",
        "Standerd options",
        "5 classes per week",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="pricing-top">
        <h2 className="section-title">Premium pricing plan</h2>
        <p>
          Unlock elite tech service with out premium pricing plan and soar ahead
          of the competition
        </p>
      </div>

      <div className="pricing-wrapper">
        {pricingData.map((pricingItem, index) => (
          <div className="pricing-item" key={index}>
            <div className="pricing-card-top"
               style={{ background: pricingItem.color }}>

              <h2 className="section-title">{pricingItem.title}</h2>
              <h2 className="pricing-second-title">
                {pricingItem.price} <span>{pricingItem.duration}</span>
              </h2>
              <div className="services">
                <ul>
                  {pricingItem.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="register-btn">Join</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
