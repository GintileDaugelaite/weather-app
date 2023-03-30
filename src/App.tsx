import "./App.scss";
import WeatherForecast from "./components/WeatherForecast";
import Header from "./components/Header";
import TempStats from "./components/TempStats";
import { WeatherContextProvider } from "./WeatherContext";


const App: React.FC = () => {

  return (
    <div className="wrapper">
      <WeatherContextProvider>
      <Header
      />
      <TempStats/>
      <WeatherForecast />
      </WeatherContextProvider>
    </div>
  );
};

export default App;
