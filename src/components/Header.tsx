import Search from "./Search";
import { useWeatherContext } from "../WeatherContext";

const Header = () => {
  const { data } = useWeatherContext();
  return (
    <section className="header">
      <div className="header__container">
      <Search/>
      <h1 className="header__location">{data.name}, {data.sys.country}</h1>
      <p className="header__date">Monday 15 March</p>
      </div>
    </section>
  );
};

export default Header;
