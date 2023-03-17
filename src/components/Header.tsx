import Search from "./Search";

const Header = () => {
  return (
    <section className="header">
      <div className="header__container">
      <Search />
      <h1 className="header__location">London, UK</h1>
      <p className="header__date">Monday 15 March</p>
      </div>
    </section>
  );
};

export default Header;
