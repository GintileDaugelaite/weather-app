import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

type WeatherData = {
    coord: {
      lon: number;
      lat: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
    };
    rain?: {
      "1h": number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
  
  const defaultWeatherData: WeatherData = {
    coord: {
      lon: 0,
      lat: 0
    },
    weather: [],
    base: "",
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0
    },
    clouds: {
      all: 0
    },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      country: "LT",
      sunrise: 0,
      sunset: 0
    },
    timezone: 0,
    id: 0,
    name: "Vilnius",
    cod: 0
  };

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

  type WeatherContextType = {
    data: WeatherData;
    setData: React.Dispatch<React.SetStateAction<WeatherData>>;
    location: string;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
    searchLocation: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    forecastData: WeatherForecastData;
  };

  export const WeatherContext = createContext<WeatherContextType>({
    data: defaultWeatherData,
    setData: () => {},
    location: "",
    setLocation: () => {},
    searchLocation: () => {},
    forecastData: defaultWeatherForecastData
  });

  type WeatherContextProviderProps = {
    children: React.ReactNode;
  };

  export const WeatherContextProvider: React.FC<WeatherContextProviderProps> = ({
    children,
  }) => {
    const [data, setData] = useState<WeatherData>(defaultWeatherData);
    const [location, setLocation] = useState<string>("");
    const [forecastData, setForecastData] = useState<WeatherForecastData>(
      defaultWeatherForecastData
    );

    
  const urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c9460a1dad58496d6599ed81f97e4637&units=metric`;
  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=5&appid=c9460a1dad58496d6599ed81f97e4637&units=metric`;

  const searchLocation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      axios.all([
        axios.get(urlCurrentWeather),
        axios.get(urlForecast)

      ])
     .then(axios.spread((currentWeatherRes, forecastRes) => {
        setData(currentWeatherRes.data);
        setForecastData(forecastRes.data)
        console.log(currentWeatherRes.data);
        console.log(forecastRes.data);
      }));
      setLocation("");
    }
  };


// useEffect(() => {
//     if (location !== "") {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c9460a1dad58496d6599ed81f97e4637&units=metric`;
//       axios.get(url).then((res) => {
//         setData(res.data);
//         console.log(res.data)
//       })
//       .catch((error) => console.error(error));
//     }
//   }, [location]);

//   const searchLocation = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       setLocation(event.currentTarget.value);
//       event.currentTarget.value = "";
//     }
//   };


    return (
      <WeatherContext.Provider value={{ data, setData, location, setLocation, searchLocation, forecastData }}>
        {children}
      </WeatherContext.Provider>
    );
  };
  

  export const useWeatherContext = () => useContext(WeatherContext);