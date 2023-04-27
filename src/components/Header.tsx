import Search from "./Search";
import { useWeatherContext } from "../WeatherContext";


type SearchProps = {
  className?: string;
  onSearch: any;
}

const Header = ({onSearch}: SearchProps) => {
  const { data } = useWeatherContext();

  const date = new Date(data.dt * 1000);
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = date.toLocaleDateString('en-US', options);

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
