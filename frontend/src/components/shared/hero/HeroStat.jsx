import StatBadge from "../../about/cards/StatBadge";

function HeroStat({stats}) {
  return (
    <div className="hero-stats-row">
      {stats.map((stat) => {
        return <StatBadge statNumber={stat.value} statLabel={stat.label} />;
      })}
    </div>
  );
}

export default HeroStat;
