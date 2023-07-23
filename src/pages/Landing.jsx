import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/index";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking </span>app
          </h1>
          <p>
            PBR&B blog meh wolf, before they sold out whatever hashtag +1. Air
            plant meh vibecession mustache jianbing cornhole biodiesel bodega
            boys blue bottle williamsburg VHS tofu distillery fashion axe. +1
            aesthetic flexitarian, shoreditch JOMO lomo taiyaki cornhole same.
          </p>
          <Link type="button" className="btn btn-hero" to="/register">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="jobster main" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
