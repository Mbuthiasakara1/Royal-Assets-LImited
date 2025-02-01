import AnimatedNumber from "./Animated";
import "./Description.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";


export default function Description() {
  const navigate=useNavigate()

  return (
    <div className="container">
      <h1>Why Choose Us</h1>
      <div className="desc-info">
        <div className="content-image">
          <img
            src="/images/Untitled_design-removebg-preview.png"
            alt="phone-display"
          />
        </div>
        <div className="features">
          <p className="description">
            At Malazi Kenya we place the client’s needs first and build
            structures that will have a positive impact on their lives.
          </p>
          <div className="feature">
            <div className="icon">
              <img src="icons/eco.svg" alt="eco friendly icon" />
            </div>
            <p>Eco friendly</p>
          </div>
          <div className="feature">
            <div className="icon">
              <img src="icons/budget.svg" alt="budget friendly icon" />
            </div>
            <p>Budget friendly</p>
          </div>
          <div className="feature">
            <div className="icon">
              <img src="icons/strong.svg" alt="strong foundation icon" />
            </div>
            <p>Strong foundation</p>
          </div>
          <div className="feature">
            <div className="icon">
              <img src="icons/sustainable.svg" alt="eco friendly icon" />
            </div>
            <p>Sustainable Solutions</p>
          </div>
          <div className="feature">
            <div className="icon">
              <img src="icons/extensive.svg" alt="extensive research icon" />
            </div>
            <p>Extensive research </p>
          </div>
          <div className="feature">
            <div className="icon">
              <img src="icons/service.svg" alt="excellent service" />
            </div>
            <p>Excellent service</p>
          </div>
        </div>
      </div>
      <div className="animated-container">
        <div className="animated-num">
          <div className="animated-styles">
            <AnimatedNumber targetValue={9} suffix="+" duration={2000} />
            <p> Years of Experience</p>
          </div>
          <div className="animated-styles">
            <AnimatedNumber targetValue={94} suffix="+" duration={2000} />
            <p> Complete Total Projects</p>
          </div>
          <div className="animated-styles">
            <AnimatedNumber targetValue={100} suffix="%" duration={2000} />
            <p>Efficiency</p>
          </div>
          <div className="animated-styles">
            <AnimatedNumber targetValue={100} suffix="+" duration={2000} />
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
      <div className="project-card-container">
        <h2>Our Projects</h2>
        <div className="projects-info-container">
          <div className="project-info-card">
            <img src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737321070/toilets_jvi3re.jpg" />
            <div className="below-container">
              <p>Kathwana Market Ablution Block</p>
            </div>
          </div>

          <div className="project-info-card">
            <img src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737321155/Market1_js2ybv.jpg" />
            <div className="below-container">
              <p>Ndagani Modern Market</p>
            </div>
          </div>

          <div className="project-info-card">
            <img src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737321280/CulvertM_kjtuzh.png" />
            <div className="below-container">
              <p>Culvert Projects in Kajiado</p>
            </div>
          </div>
        </div>
        <button
          className="other-projects-btn"
          onClick={() => navigate("/portfolio")}
        >
          Other Projects <HiArrowLongRight />
        </button>
      </div>
    </div>
  );
}
