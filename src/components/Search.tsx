import { useWeatherContext } from "../WeatherContext";

type SearchProps = {
  className?: string;
  onSearch: any;
};

const Search = ({ className, onSearch }: SearchProps) => {
  const { location, setLocation, searchLocation } = useWeatherContext();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchLocation();
      onSearch();
    }
  };

  return (
    <>
      <input
        type="text"
        className={className}
        placeholder="Enter location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default Search;
