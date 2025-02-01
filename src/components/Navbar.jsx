import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleDownload = () => {
    const filePath = '/downloads/Malazi_Kenya_Profile.pdf'; // Path to the file in the public folder
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'Malazi Kenya Profile.pdf'; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img
            src="/images/logo2.jpg"
            alt="royal-logo"
            className="logo"
          />
          <h2>Royal Assets Limited</h2>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className={`menu-container ${isMenuOpen ? "active" : ""}`}>
          <nav className="navbar">
            <ul onClick={toggleMenu}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/services">Our Services</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </nav>

          <button className="nav-btn" onClick={handleDownload}>
            Company Profile <MdOutlineFileDownload />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
