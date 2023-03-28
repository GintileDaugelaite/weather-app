import "./App.scss";
import FutureWeather from "./components/FutureWeather";
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
      <FutureWeather />
      </WeatherContextProvider>
    </div>
  );
};

export default App;
