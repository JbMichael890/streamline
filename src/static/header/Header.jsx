import "./Header.css";
import myLogo from "../../assets/logo.svg";
const Header = () => {
  return (
    <div className="headContainer">
      <div className="headerWrapper">
        <main className="logoNav">
          <div className="logo">
            <img src={myLogo} alt="" />
          </div>
          <div className="navigation">
            <nav className="navs">Feauters</nav>
            <nav className="navs">Company</nav>
            <nav className="navs">Career</nav>
            <nav className="navs">About</nav>
          </div>
        </main>
        <main className="loginRegister">
          <span className="login">Login</span>
          <button className="Register">Register</button>
        </main>
      </div>
    </div>
  );
};
export default Header;
