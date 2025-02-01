import {useNavigate} from "react-router-dom";
import './Home.css'

function Home() {
  const navigate=useNavigate()
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="content-info">
            <h1>Who We Are</h1>
            <p>
              Malazi Kenya Limited is a distinguished Engineering, Procurement,
              and Construction (EPC) contractor with a remarkable footprint in
              both Kenya and the United States. As a proud member of the Acacia
              Group, we bring world-class construction expertise to East Africa
              while maintaining our headquarters in Wichita, Kansas.
              <br />
              <br />
              <p>
                As part of the Acacia Group, a real estate ﬁrm headquartered in
                Kansas, we strive to enhance value for money by providing
                quality and affordability at all levels. Our team comprises
                professionals in architecture, civil engineering, building
                technology, project management, and ﬁnance. We prioritize our
                clients and are committed to superior quality and results,
                reﬂected in our motto: &nbsp;
                <span>
                  <strong>
                    {'"Committed to Superior Quality and Results"'}
                  </strong>
                </span>
              </p>
            </p>
            <div className="content-btn">
              <button onClick={() => navigate("/about")}> Learn More </button>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737327401/tractor_fwmktk.jpg"
            alt="tractor-image"
            className="clipped-image"
          />
        </div>
      </div>

      <h1 className="section-title">What We Do</h1>
      <div className="card-container">
        <div className="card">
          <img src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737327624/real_gweorz.jpg" />
          <div className="card-content">
            <h2>Real Estate Construction</h2>
            <p>
              We believe housing is essential and have the capacity to handle
              complex developments, from single units to multi-storey buildings.
              With over twenty years of experience in residential and commercial
              projects.
            </p>
            <button
              className="learn-more-btn"
              onClick={() => navigate("/services")}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="card">
          <img src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737327627/development_toywsc.jpg" />
          <div className="card-content">
            <h2>Roads, Bridges and Marine Engineering Works</h2>
            <p>
              Construction of roads, bridges, and marine engineering works using
              cutting-edge machinery and technology. Airports and Seaports
              development.
            </p>
            <button
              className="learn-more-btn"
              onClick={() => navigate("/services")}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="card">
          <img src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737327633/dam_lyazeq.jpg" />
          <div className="card-content">
            <h2>Dams and Irrigation</h2>
            <p>
              We can design and build dams and irrigation sites meant for
              agricultural, energy supply, and domestic use. We have embraced
              the fastest technologies from 3D AutoCAD in design to
              implementation.
            </p>
            <button
              className="learn-more-btn"
              onClick={() => navigate("/services")}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home