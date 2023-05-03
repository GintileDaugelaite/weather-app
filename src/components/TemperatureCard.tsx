import Thunder from "./../assets/animated-icons/thunderstorms.svg";
import Rainy from "./../assets/animated-icons/rain.svg";
import Cloudy from "./../assets/animated-icons/cloudy.svg";
import Snowy from "./../assets/animated-icons/snow.svg";
import Drizzle from "./../assets/animated-icons/drizzle.svg";
import Mist from "./../assets/animated-icons/mist.svg";
import ClearDay from "./../assets/animated-icons/clear-day.svg";
import ClearNight from "./../assets/animated-icons/clear-night.svg";
import FewCloudsD from "./../assets/animated-icons/partly-cloudy-day.svg";
import FewCloudsN from "./../assets/animated-icons/partly-cloudy-night.svg";

import { useWeatherContext } from "../WeatherContext";

const TemperatureCard = () => {
  const { data } = useWeatherContext();

  const currentTime = new Date().getHours();

  let weatherIconSrc = Cloudy;

  switch (data?.weather[0]?.main) {
    case "Thunderstorm":
      weatherIconSrc = Thunder;
      break;
    case "Rain":
      weatherIconSrc = Rainy;
      break;
    case "Drizzle":
      weatherIconSrc = Drizzle;
      break;
    case "Snow":
      weatherIconSrc = Snowy;
      break;
    case "Clear":
      weatherIconSrc = currentTime >= 19 ? ClearNight : ClearDay;
      break;
    case "Clouds":
      weatherIconSrc = Cloudy;

      if (data.weather[0].description === "few clouds") {
        weatherIconSrc = currentTime >= 19 ? FewCloudsN : FewCloudsD;
      }
      break;
    default:
      weatherIconSrc = Mist;
      break;
  }

  return (
    <div className="current-temperature">
      <div className="current-temperature__img">
        <img
          src={weatherIconSrc}
          alt="weather-icon"
          className="current-temperature__weather-img"
        />
      </div>
      <div className="current-temperature__container">
        <div className="current-temperature__degrees">
          {data && data.main ? data.main.temp.toFixed() : null}°
        </div>
        {data && data.weather[0] ? (
          <div className="current-temperature__description">
            {data.weather[0].main}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TemperatureCard;
