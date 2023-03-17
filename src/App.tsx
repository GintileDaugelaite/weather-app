import "./App.scss";
import FutureWeather from "./components/FutureWeather";
import Header from "./components/Header";
import TempStats from "./components/TempStats";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <TempStats />
      <FutureWeather />
    </div>
  );
};

export default App;
