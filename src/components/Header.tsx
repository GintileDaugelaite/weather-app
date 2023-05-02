import Search from "./Search";
import { useWeatherContext } from "../WeatherContext";
import { useEffect } from "react";


type HeaderSearchProps = {
  className?: string;
  onSearch: any;
}

const Header = ({onSearch}: HeaderSearchProps) => {
  const { data } = useWeatherContext();

  const date = new Date(data.dt * 1000);
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = date.toLocaleDateString('en-US', options);


  useEffect(() => {
    if (data && data.weather[0]) {
      let weather = data?.weather[0]?.main;
      console.log(data);
      console.log(weather);
      document.body.classList.add(weather === "Clear" ? "sunny" : "cloudy");
    }
    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove("sunny", "cloudy");
    };
  }, [data]);

  return (
    <section className="header">
      <div className="header__container">
      <Search className="header__search-input" onSearch={onSearch}/>
      <h1 className="header__location">{data.name}, {data.sys.country}</h1>
      <p className="header__date">{formattedDate}</p>
      </div>
    </section>
  );
};

export default Header;
