import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './About.css'
import { VscTelescope } from "react-icons/vsc";
import { GiBullseye } from "react-icons/gi";
import { useEffect } from 'react';


function About() {
 useEffect(()=>{
  document.title="About | Malazi Kenya"
 },[])
    return (
      <>
        <Navbar />
        <div className="about-container">
          <div className="about">
            <div className="about-info">
              <h1>About Us</h1>
              <p>
                Malazi Kenya Limited is an Engineering, Procurement, and
                Construction (EPC) contractor, duly incorporated to offer
                construction services for residential, commercial, industrial,
                and road projects. Based in Wichita, Kansas, we also have an
                office in Kenya
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737327622/sunset_nicksu.jpg"
              alt="About us"
              className="about-img"
            />
            <div className="about-info">
              <p>
                Malazi Kenya Limited is an Engineering, Procurement, and
                Construction (EPC) contractor, duly incorporated to offer
                construction services for residential, commercial, industrial,
                and road projects. Based in Wichita, Kansas, we also have an
                office in Kenya
              </p>
            </div>
          </div>
          <div className="vision-mission">
            <div className="vis-mis-container">
              <div className="vis-mis">
                <span>
                  {" "}
                  <VscTelescope /> <h2>Our Vision:</h2>{" "}
                </span>
                <p>
                  To be a leading construction company in Kenya, known for our
                  innovation, quality, and sustainable building practices.
                </p>
              </div>
              <div className="vis-mis">
                <span>
                  <GiBullseye /> <h2>Our Mission:</h2>
                </span>
                <p>
                  To deliver superior construction services by leveraging
                  advanced technology, skilled professionals, and a
                  client-centered approach, contributing to Kenyas
                  infrastructural growth and development.
                </p>
              </div>
            </div>
          </div>
          <div className="value-container">
            <h1>Our Values</h1>
            <div className="value-list">
              <div className="value">
                <img src="images/okay.png" alt="Quality" />
                <div>
                  <h2>Quality</h2>
                  <p>Commitment to excellence in every project we undertake.</p>
                </div>
              </div>
              <div className="value">
                <img src="images/saving.png" alt="Integrity" />
                <div>
                  <h2>Integrity</h2>
                  <p>
                    Maintaining transparency and honesty in all our dealings.
                  </p>
                </div>
              </div>
              <div className="value">
                <img src="images/fast.png" alt="Satisfaction" />
                <div>
                  <h2>Client Satisfaction</h2>
                  <p>
                    Striving to exceed client expectations through exceptional
                    service.
                  </p>
                </div>
              </div>
              <div className="value">
                <img src="images/innovate.png" alt="Innovation" />
                <div>
                  <h2>Innovation</h2>
                  <p>
                    Continuously improving our methods and embracing new
                    technologies.
                  </p>
                </div>
              </div>
              <div className="value">
                <img src="images/drop.png" alt="Sustainability" />
                <div>
                  <h2>Sustainability</h2>
                  <p>
                    Ensuring our projects are environmentally friendly and
                    socially responsible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default About