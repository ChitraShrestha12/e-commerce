import React, { useEffect, useState } from "react";
import parseValue from "../../../utils/parseValue";
import useInView from "../../../hooks/useInView";
import useCountUp from "../../../hooks/countNum";

function StatItem({ statNumber, statLabel }) {
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
    <div ref={ref} className="stat-item">
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div>{statLabel}</div>
    </div>
  );
}

export default StatItem;
