import HeroStat from "./HeroStat";

function HeroLeftContent({ title, description, stats=[] }) {
  return (
    <div className="hero-left">
      <h1>{title}</h1>
      <p>{description}</p>
      <HeroStat stats={stats} />
    </div>
  );
}

export default HeroLeftContent;
