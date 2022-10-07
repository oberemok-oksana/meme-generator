const Header = () => {
  return (
    <header className="header">
      <div className="container flex">
        <div className="logo">
          <img
            className="logo-img"
            src="/images/trollFace.png"
            alt="troll face"
          />

          <a className="main-title" href="#">
            Meme Generator
          </a>
        </div>
        <h3 className="header-title">React Course - Project 3</h3>
      </div>
    </header>
  );
};

export default Header;
