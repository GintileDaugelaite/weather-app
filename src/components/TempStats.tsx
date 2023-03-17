import StatsCard from "./StatsCard";
import TemperatureCard from "./TemperatureCard";

const TempStats = () => {
  return (
    <section className="temp-stats">
      <TemperatureCard />
      <StatsCard />
    </section>
  );
};

export default TempStats;
