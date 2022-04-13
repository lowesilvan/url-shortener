import React from "react";
import BoostSection from "./BoostSection";
import Feature from "./Feature";
import LinkResultSection from "./LinkResultSection";
import StatisticsSection from "./StatisticsSection";

function ShortenerSection({ isPending, error, shorten, alert }) {
  return (
    <div className="shorten">
      {error && (
        <div className="link-result">
          <div className="alert">
            <p>{error}</p>
          </div>
        </div>
      )}
      {alert && (
        <div className="link-result">
          <div className="alert">
            <p>Cannot Shorten an Empty Field. Please Enter a valid URL!</p>
          </div>
        </div>
      )}
      {shorten &&
        shorten.map((card, index) => (
          <LinkResultSection key={index} shorten={card} />
        ))}
      <StatisticsSection />
      <Feature />
      <BoostSection />
    </div>
  );
}

export default ShortenerSection;
