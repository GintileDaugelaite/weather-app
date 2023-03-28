import { createContext, useContext, useState } from 'react';
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

  type WeatherContextType = {
    data: WeatherData;
    setData: React.Dispatch<React.SetStateAction<WeatherData>>;
    location: string;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
    searchLocation: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  };

  export const WeatherContext = createContext<WeatherContextType>({
    data: defaultWeatherData,
    setData: () => {},
    location: "",
    setLocation: () => {},
    searchLocation: () => {}
  });

  type WeatherContextProviderProps = {
    children: React.ReactNode;
  };

  export const WeatherContextProvider: React.FC<WeatherContextProviderProps> = ({
    children,
  }) => {
    const [data, setData] = useState<WeatherData>(defaultWeatherData);
    const [location, setLocation] = useState<string>("");

    
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c9460a1dad58496d6599ed81f97e4637&units=metric`;

  const searchLocation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };
    
    return (
      <WeatherContext.Provider value={{ data, setData, location, setLocation,searchLocation }}>
        {children}
      </WeatherContext.Provider>
    );
  };
  

  export const useWeatherContext = () => useContext(WeatherContext);