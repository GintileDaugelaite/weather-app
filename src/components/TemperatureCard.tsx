import Thunder from "./../thunder.svg";
import Sunny from "./../clear-day.svg"

const TemperatureCard = () => {
  return (
    <div className="current-temperature">
      <div className="current-temperature__img">
        <img src={Sunny} alt="thunder" className="current-temperature__weather-img"/>
      </div>
      <div className="current-temperature__container">
        <div className="current-temperature__degrees">21°</div>
        <div className="current-temperature__weather">Mostly sunny</div>
      </div>
    </div>
  );
};

export default TemperatureCard;