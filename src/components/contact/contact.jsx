import "./contact.css";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contáctame:</h1>
      <div className="contact-links">
        <a
          href="https://github.com/GOLFISHMANALEXIS"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineGithub className="icon" />
          <h2>
            Github<span>GOLFISHMANALEXIS</span>
          </h2>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=+522382487262&text=Hi"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+238 248 7262</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/alexis._.vi/" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>alexis._.vi</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
