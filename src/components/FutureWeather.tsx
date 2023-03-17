import FutureWeatherCard from "./FutureWeatherCard";

const FutureWeather = () => {
  return (
    <section className="future-weather-container">
      <div className="future-weather-container__title">Next 5 days</div>
      <div className="future-weather-container__cards">
      <FutureWeatherCard/>
      <FutureWeatherCard/>
      <FutureWeatherCard/>
      <FutureWeatherCard/>
      <FutureWeatherCard/>
      </div>
    </section>
  );
};

export default FutureWeather;
