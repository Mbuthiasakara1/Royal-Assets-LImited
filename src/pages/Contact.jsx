import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import "../components/ContactForm.css";
import "./Contact.css";
import Footer from "../components/Footer";
import { useEffect } from "react";


function Contact() {
   useEffect(() => {
     document.title = "Contact | Malazi Kenya";
   }, []);
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>

        <div className="contact-info">
          <div className="info-box">
            <img src="icons/phone.svg" alt="phone-icon" />

            <h3>Phone</h3>
            <p>(+254)705268720</p>
          </div>
          <div className="info-box">
            <img src="icons/mail.svg" alt="phone-icon" />

            <h3>Mail Box</h3>
            <p>info@malazikenyaltd.com</p>
          </div>
          <div className="info-box-location">
            <img src="icons/Group.svg" alt="mail-icon" />

            <h3>Location</h3>
            <h4>KENYA</h4>
            <p className="location-style">93 E Church Rd,Westlands,Nairobi</p>
            <h4>USA</h4>
            <p className="location-style">9607 E Harry,Wichita Kansas</p>
          </div>
        </div>

        <div className="contact-form-map">
          <div className="form-container">
            <ContactForm />
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.843984084938!2d36.78787497550461!3d-1.2662642356056777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f175d0f600003%3A0x9c3d814605afd56a!2s93%20E%20Church%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1737915596086!5m2!1sen!2ske"
              width="600"
              height="460"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
