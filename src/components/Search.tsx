import { useWeatherContext } from "../WeatherContext";


const Search = () => {
  const { location, setLocation, searchLocation } = useWeatherContext();


  
  return (
    <>
      <input
        type="text"
        className="header__search-input"
        placeholder="Enter location"
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyDown={searchLocation}
      />
    </>
  );
};

export default Search;
