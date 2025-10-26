import React from "react";

const Stars: React.FC = () => {
  // static star positions/sizes with varied classes for staggered twinkle
  return (
    <div className="stars-layer pointer-events-none" aria-hidden="true">
      <svg className="stars-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {/* A handful of stars across the viewport. Add or adjust more cx/cy/r for variety */}
        <circle className="star s1" cx="80"  cy="60"  r="1.4" />
        <circle className="star s2" cx="140" cy="120" r="1.1" />
        <circle className="star s3" cx="220" cy="40"  r="1.8" />
        <circle className="star s4" cx="300" cy="200" r="2.4" />
        <circle className="star s5" cx="360" cy="90"  r="1.0" />
        <circle className="star s6" cx="420" cy="160" r="1.6" />
        <circle className="star s7" cx="540" cy="40"  r="1.2" />
        <circle className="star s8" cx="620" cy="110" r="2.0" />
        <circle className="star s9" cx="700" cy="70"  r="1.0" />
        <circle className="star s10" cx="780" cy="180" r="1.9" />

        <circle className="star s11" cx="880" cy="40" r="1.3" />
        <circle className="star s12" cx="940" cy="120" r="1.0" />
        <circle className="star s13" cx="1020" cy="60" r="1.6" />
        <circle className="star s14" cx="1120" cy="200" r="2.3" />
        <circle className="star s15" cx="180" cy="300" r="1.2" />
        <circle className="star s16" cx="260" cy="360" r="1.8" />
        <circle className="star s17" cx="380" cy="300" r="1.0" />
        <circle className="star s18" cx="460" cy="420" r="2.1" />
        <circle className="star s19" cx="540" cy="320" r="1.3" />
        <circle className="star s20" cx="640" cy="360" r="1.6" />

        <circle className="star s21" cx="720" cy="300" r="1.1" />
        <circle className="star s22" cx="820" cy="420" r="1.9" />
        <circle className="star s23" cx="900" cy="320" r="1.0" />
        <circle className="star s24" cx="980" cy="380" r="1.6" />
        <circle className="star s25" cx="1080" cy="340" r="1.2" />
        {/* micro dust */}
        <g className="dust">
          <circle className="star s26" cx="60"  cy="520" r="0.6" />
          <circle className="star s27" cx="140" cy="460" r="0.7" />
          <circle className="star s28" cx="260" cy="520" r="0.5" />
          <circle className="star s29" cx="420" cy="480" r="0.6" />
          <circle className="star s30" cx="960" cy="520" r="0.7" />
        </g>
      </svg>
    </div>
  );
};

export default Stars;