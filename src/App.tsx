import "./App.scss";
import FutureWeather from "./components/FutureWeather";
import Header from "./components/Header";
import TempStats from "./components/TempStats";
import axios from "axios";
import { useState } from "react";

const App: React.FC = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState<string>("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c9460a1dad58496d6599ed81f97e4637`;

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
    <div className="wrapper">
      <Header
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />
      <TempStats />
      <FutureWeather />
    </div>
  );
};

export default App;
