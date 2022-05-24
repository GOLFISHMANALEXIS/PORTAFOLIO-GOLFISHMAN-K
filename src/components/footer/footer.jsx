import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
       Eso es todo!{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll Arriba -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/alexis._.vi/">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/alezis.munos">
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="https://github.com/GOLFISHMANALEXIS">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
