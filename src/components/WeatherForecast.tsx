import WeatherForecastCard from "./WeatherForecastCard";
import { useWeatherContext } from "../WeatherContext";

const WeatherForecast = () => {
  const { forecastData } = useWeatherContext();

  return (
    <section className="weather-forecast-container">
      <div className="weather-forecast-container__title">
        Weather for the near future
      </div>
      <div className="weather-forecast-container__cards">
        {forecastData &&
          forecastData.list &&
          forecastData.list.map((data) => (
            <WeatherForecastCard key={data.dt} {...data} />
          ))}
      </div>
    </section>
  );
};

export default WeatherForecast;
