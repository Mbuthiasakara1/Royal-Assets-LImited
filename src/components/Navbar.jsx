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

   const handleDownload = async () => {
     const filePath = "downloads/Malazi_Kenya_Profile.pdf";
     const fileName = "Malazi Kenya Profile.pdf";

     // detect IOs
     const isIOS =
       /iPad|iPhone|iPOd/.test(navigator.userAgent) && !window.MSStream;

     try {
      const response =await fetch(filePath);
      if (!response.ok){
        throw new Error("Failed to fetch file")
      }
      

      const blob =await response.blob();
      const url =window.URL.createObjectURL(blob)

       if (isIOS) {
         window.open(url, "_blank");
       } else {
         const link = document.createElement("a");
         link.href = url;
         link.download = fileName;

         document.body.appendChild(link);
         link.click();

         //cleanup
         setTimeout(() => {
           document.body.removeChild(link);
           window.URL.revokeObjectURL(link.href);
         }, 100);
       }
     } catch (error) {
       console.error("Download failed:", error);
       window.open(filePath, "_blank");
     }
   };
  return (
    <>
      <div className="nav-container">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img
            src="/images/royalnobg 1.png"
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
