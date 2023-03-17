const StatsCard = () => {
  return (
    <div className="stats">
      <div className="stats__feels-like-temp">
        <p>Feels like</p>
        <p>10</p>
      </div>
      <div className="stats__humidity">
        <p>Humidity</p>
        <p>30 %</p>
      </div>
      <div className="stats__sunrise">
        <p>Sunrise</p>
        <p>6:45 AM</p>
      </div>
      <div className="stats__sunset">
        <p>Sunset</p>
        <p>7:14 PM</p>
      </div>
    </div>
  );
};

export default StatsCard;
