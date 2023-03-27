import React, { useState, Dispatch, SetStateAction } from "react";

type SearchProps = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  searchLocation: React.KeyboardEventHandler<HTMLInputElement>;
};

const Search = ({ location, setLocation, searchLocation }: SearchProps) => {
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
