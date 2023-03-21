import Sun from "./../assets/static-icons/sun.png"

const FutureWeatherCard = () => {
  return (
    <div className="future-weather-card">
      <p className="future-weather-card__day">MON</p>
      <img className="future-weather-card__img" alt="sun" src={Sun} width="50px"/>
      <p className="future-weather-card__degrees">10</p>
    </div>
  );
};

export default FutureWeatherCard;
