import React, { useEffect, useState } from "react";
import useInView from "../../../hooks/useInView";
import useCountUp from "../../../hooks/countNum";
import parseValue from "../../../utils/parseValue";

function StatBadge({ statNumber, statLabel }) {
  const [ref, isVisible] = useInView();
  const { num, suffix } = parseValue(statNumber);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setStart(true);
    }
  }, [isVisible]);

  const count = useCountUp(start ? num : 0, 1200);

  return (
    <div ref={ref} className="hero-stat-item">
      <div className="hero-stat-number">
        {count}
        {suffix}
      </div>
      <div className="hero-stat-label">{statLabel}</div>
    </div>
  );
}

export default StatBadge;
