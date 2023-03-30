import WeatherForecastCard from "./WeatherForecastCard";
import { useWeatherContext } from "../WeatherContext";
import { useState, useEffect } from "react";
import axios from "axios";

type WeatherForecastData = {
  list: Array<{
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
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  }>;
};

const defaultWeatherForecastData: WeatherForecastData = {
  list: [
    {
      dt: 0,
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        sea_level: 0,
        grnd_level: 0,
        humidity: 0,
        temp_kf: 0,
      },
      weather: [
        {
          id: 0,
          main: "",
          description: "",
          icon: "",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0,
        deg: 0,
        gust: 0,
      },
      visibility: 0,
      pop: 0,
      sys: {
        pod: "",
      },
      dt_txt: "",
    },
  ],
};

const WeatherForecast = () => {
  const { location } = useWeatherContext();
  const [forecastData, setForecastData] = useState<WeatherForecastData>(
    defaultWeatherForecastData
  );

  useEffect(() => {
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=5&appid=c9460a1dad58496d6599ed81f97e4637&units=metric`;
    axios
      .get(urlForecast)
      .then((res) => {
        setForecastData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, [location]);

  return (
    <section className="future-weather-container">
      <div className="future-weather-container__title">Next 15 hours</div>
      <div className="future-weather-container__cards">
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
