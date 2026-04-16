import React, { useEffect, useState } from "react";
import useInView from "../../../hooks/useInView";
import parseValue from "../../../utils/parseValue";
import useCountUp from "../../../hooks/countNum";

function TestimonialStat({ value, label }) {
  const [ref, isVisible] = useInView();
  const { num, suffix } = parseValue(value);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setStart(true);
    }
  }, [isVisible]);

  const count = useCountUp(start ? num : 0, 1200);
  return (
    <div ref={ref} className="testimonial-stat">
      <div className="testimonial-stat-number">
        {count}
        {suffix}
      </div>
      <div className="testimonial-stat-label">{label}</div>
    </div>
  );
}

export default TestimonialStat;
