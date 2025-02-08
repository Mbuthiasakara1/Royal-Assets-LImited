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
     const filePath = "/downloads/Malazi_Kenya_Profile.pdf"; // Ensure this is accessible in the public folder
     const fileName = "Malazi_Kenya_Profile.pdf";

     // Detect iOS (iPad, iPhone, iPod)
     const isIOS =
       /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

     try {
       if (isIOS) {
         // Open the file in a new tab for iOS users
         window.open(filePath, "_blank");
       } else {
         // Create a temporary link element for download
         const link = document.createElement("a");
         link.href = filePath;
         link.download = fileName;

         // Required for Firefox compatibility
         link.target = "_blank";
         document.body.appendChild(link);
         link.click();

         // Cleanup the temporary link
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
