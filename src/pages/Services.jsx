import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import './Services.css'
import { useEffect } from "react";



 function Services() {
   useEffect(() => {
     document.title = "Services | Malazi Kenya";
   }, []);
    
  return (
    <>
      <Navbar />
      <div className="service-container">
        <div className="service-info">
          <h1>Our Services</h1>
          <p>
            <i>Let’s partner up and start realizing your dream building.</i>
          </p>
        </div>
        <div className="card-1">
          <img
            src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737327775/realestate_wem4kk.jpg"
            alt="real estate construction"
          />
          <div className="card1-info">
            <h2>Real Estate Construction</h2>
            <p>
              We believe housing is essential and have the capacity to handle
              complex developments, from single units to multi-storey buildings.
              With over twenty years of experience in residential and commercial
              projects, our experts excel in blueprint implementation, including
              ground leveling, landscaping, structural reinforcement, interiors,
              and renovations.
              <br /> We specialize in both affordable housing schemes and
              luxurious developments and have expertise in alternative building
              technologies like prefab and precast.
            </p>
            {/* <button onClick={() => navigate("/projects")}>Learn More</button> */}
          </div>
        </div>
        <div className="card-1 card-2">
          <div className="card1-info">
            <h2>Road,Bridges And Marine Engineering Works</h2>
            <p>
              With the latest machinery and technology that we have embraced, we
              can handle Road construction, Bridges, and Highways. Airports and
              Seaports development.
            </p>
            {/* <button onClick={() => navigate("/projects")}>Learn More</button> */}
          </div>

          <img
            src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737327779/Roads_nkb5zh.jpg"
            alt="roads-bridges-construction"
          />
        </div>
        <div className="card-1">
          <img
            src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737327774/sewarage_nszx2l.jpg"
            alt="Water-and-Sewerage-construction"
          />
          <div className="card1-info">
            <h2>Water and Sewerage</h2>
            <p>
              Water being a major resource is a key pillar in the construction
              sector. Our team of professionals has the experience to design and
              build water resources from borehole drillings, waterproofing,
              water treatment plants, plumbing works, and sewerage line
              installations.
            </p>
            {/* <button onClick={() => navigate("/projects")}>Learn More</button> */}
          </div>
        </div>
        <div className="card-1 card-2">
          <div className="card1-info">
            <h2>Dams and Irrigation</h2>
            <p>
              We design and build dams and irrigation sites meant for
              agricultural, energy supply, and domestic use. We have embraced
              the fastest technologies from 3D AutoCAD in design to
              implementation
            </p>
            {/* <button onClick={() => navigate("/projects")}>Learn More</button> */}
          </div>
          <img
            src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737327778/dams_s5ozr0.jpg"
            alt="Dams-and-Irrigation"
          />
        </div>
        <div className="card-1">
          <img
            src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737327776/oil_axxfbn.jpg"
            alt="oil-works"
          />
          <div className="card1-info">
            <h2>Oil and Gas Works</h2>

            <p>
              Our Electrical and Mechanical Engineering division can design and
              construct Oil refineries and gas plants. We drill oil reservoirs,
              and storage tanks installation and build pipelines. We put
              measures during construction to maximize quality and safety.
            </p>
            {/* <button onClick={() => navigate("/projects")}>Learn More</button> */}
          </div>
        </div>
        <div className="card-1 card-2">
          <div className="card1-info">
            <h2>Renewable Energy</h2>
            <p>
              Africa is a fast-growing Renewable Energy consumer in the world.
              From wind power, geothermal, and Solar. We can handle works from
              Renewable Energy Development to EPC via our Renewable Energy
              divisional ENERGY LTD. We have identified a site to structure and
              develop a 60 MW of solar power in Isinya - Kajiado county..
            </p>
            {/* <button onClick={() => navigate("/projects")}>Learn More</button> */}
          </div>
          <img
            src="https://res.cloudinary.com/dpngcztrh/image/upload/v1737327777/energy_wa1hu0.jpg"
            alt="renewable-energy"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Services