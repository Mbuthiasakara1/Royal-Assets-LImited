
import './Footer.css'
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <svg
        className="footer-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#212121"
          fillOpacity="1"
          d="M987.028 1.58019C1165.08 8.08011 1440 38.2764 1440 38.2764V295.776H0V1.58019C0 1.58019 257.97 41.7305 378 38.2764C656 30.2764 719.184 -8.1977 987.028 1.58019Z"
        ></path>
      </svg>
      <img src="/images/no-background.png" alt="Logo" className="footer-logo" />
      <div className="footer-info">
        <h3>Malazi Kenya</h3>
        <p>Have an idea? Reach out to us and {"let's"} talk about it.</p>
      </div>
      <div className="quick-links">
        <h3>Quick Links:</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Contact us:</h3>
        <p>
          <MdOutlineEmail />
          <Link to="mailto:info@malazikenyaltd.com">
            info@malazikenyaltd.com
          </Link>
        </p>
        <p>
          <FiPhone />
          <Link to="tel:+254 705 26872">+254 705 26872</Link>
        </p>
        <p>
          <IoLocationOutline />
          Westlands,Nairobi,Kenya
          <br style={{ marginBottom: "5px" }} />
          Wichita ,Kansas,USA
        </p>
        <div className="socials">
          <FaXTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}

export default Footer