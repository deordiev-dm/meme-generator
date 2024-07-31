import trollFace from "../assets/troll-face.svg";
import "../css/components/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo logo">
          <img src={trollFace} alt="trollface" className="logo__img" />
          <h1 className="logo__title">meme generator</h1>
        </div>
        <p className="header__project-info">React Course - Project 3</p>
      </div>
    </header>
  );
}

export default Header;
