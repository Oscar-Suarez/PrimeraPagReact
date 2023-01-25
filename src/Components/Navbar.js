
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/">
            <img
              alt="space-logo"
              className="nav-img"
              src="https://cdn.dribbble.com/users/1769954/screenshots/4216600/media/f1ed192ec1c5300d413fac7fb076f7d0.png"
            ></img>
          </a>
        </div>
        <div className="nav-links">
          <a href="/">TATTOOS</a>

          <a href="">PROMOS</a>

          <a href="/">SOBRE MÍ</a>

          <a href="/">CONTACTO/REDES SOCIALES</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;