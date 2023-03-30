import { useWeatherContext } from "../WeatherContext";

const StatsCard = () => {
  const { data } = useWeatherContext();

  return (
    <div className="stats">
      <div className="stats__feels">
        <p>Feels like</p>
        <p>{data.main.feels_like.toFixed()}°</p>
      </div>
      <div className="stats__humidity">
        <p>Humidity</p>
        <p>{data.main.humidity}%</p>
      </div>
      <div className="stats__clouds">
        <p>Cloudiness</p>
        <p>{data.clouds.all}%</p>
      </div>
      <div className="stats__wind">
        <p>Wind speed</p>
        <p>{data.wind.speed.toFixed()} m/s</p>
      </div>
    </div>
  );
};

export default StatsCard;
