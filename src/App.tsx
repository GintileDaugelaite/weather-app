import "./App.scss";
import WeatherForecast from "./components/WeatherForecast";
import Header from "./components/Header";
import TempStats from "./components/TempStats";
import { WeatherContextProvider } from "./WeatherContext";
import Search from "./components/Search";
import { useState} from "react";

const App: React.FC = () => {

  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setSearched(true);
  };

  return (
    <div className="wrapper">
      <WeatherContextProvider>
        {searched ? (
          <>
            <Header onSearch={handleSearch} />
            <TempStats />
            <WeatherForecast />
          </>
        ) : (
          <div className="wrapper__container">
          <h1 className="wrapper__header">Weather Forecast</h1>
          <Search className={`homepage_search-input`} onSearch={handleSearch} />
          </div>
        )}
      </WeatherContextProvider>
    </div>
  );
};

export default App;
