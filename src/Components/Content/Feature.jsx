import React from "react";
import brand from "../../Assets/images/icon-brand-recognition.svg";
import detailed from "../../Assets/images/icon-detailed-records.svg";
import customize from "../../Assets/images/icon-fully-customizable.svg";

function Feature() {
  return (
    <div>
      <div className="feature-section">
        <div className="feature-wrapper mag-top3">
          <div className="image-icon">
            <img src={brand} alt="brand" />
          </div>
          <div className="features">
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="feature-wrapper mag-top">
          <div className="image-icon">
            <img src={detailed} alt="brand" />
          </div>
          <div className="features">
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="feature-wrapper mag-top2">
          <div className="image-icon">
            <img src={customize} alt="brand" />
          </div>
          <div className="features">
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
