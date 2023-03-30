import ClearD from "./../assets/static-icons/sun.png";
import Cloudy from "./../assets/static-icons/clouds.png";
import Rainy from "./../assets/static-icons/rain.png";
import Snowy from "./../assets/static-icons/snow.png";
import Stormy from "./../assets/static-icons/storm.png";
import Drizzle from "./../assets/static-icons/drizzle.png";
import ClearN from "./../assets/static-icons/moon.png";
import Mist from "./../assets/static-icons/fog.png";

type WeatherForecastCardProps = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
};

const WeatherForecastCard = ({
  dt,
  main,
  weather,
}: WeatherForecastCardProps) => {
  const date = new Date(dt * 1000);
  const time = date.getHours();
  const ampm = time >= 12 ? "PM" : "AM";
  const formattedHours = time % 12 || 12;

  let weatherIconSrc = Cloudy;

  switch (weather[0]?.main) {
    case "Thunderstorm":
      weatherIconSrc = Stormy;
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
      weatherIconSrc = time >= 6 && time <= 18 ? ClearD : ClearN;
      break;
    case "Clouds":
      weatherIconSrc = Cloudy;
      break;
    default:
      weatherIconSrc = Mist;
      break;
  }

  return (
    <div className="future-weather-card">
      <p className="future-weather-card__day">
        {formattedHours} {ampm}
      </p>
      <img
        className="future-weather-card__img"
        alt="sun"
        src={weatherIconSrc}
        width="50px"
      /> 
      <p className="future-weather-card__degrees">{main.temp.toFixed()}°</p>
    </div>
  );
};

export default WeatherForecastCard;
