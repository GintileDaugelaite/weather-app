import Search from "./Search";
import React, { useState, Dispatch, SetStateAction } from "react";

type HeaderProps = {
location: string;
setLocation: Dispatch<SetStateAction<string>>;
searchLocation: React.KeyboardEventHandler<HTMLInputElement>;
}

const Header = ({location, setLocation, searchLocation}: HeaderProps) => {
  return (
    <section className="header">
      <div className="header__container">
      <Search location={location} setLocation={setLocation} searchLocation={searchLocation}/>
      <h1 className="header__location">London, UK</h1>
      <p className="header__date">Monday 15 March</p>
      </div>
    </section>
  );
};

export default Header;
