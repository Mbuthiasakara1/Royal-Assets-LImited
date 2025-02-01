import Navbar from "./Navbar";
import Projects from "./Projects";
import Footer from "./Footer";
import "./ProjectGallery.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProjectGallery() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [projectImages,setProjectImages] =useState({})
  const[isLoading,setIsLoading] =useState(true)


   useEffect(() => {
    fetch("/images.json")
      .then((response) => response.json())
      .then((data) => {
        setProjectImages(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project images:", error);
        setIsLoading(false);
      });
  }, []);

    if (isLoading) return <p>Loading</p>
   

  const projects = [
    "",
    "Kathwana Market Ablution Block",
    "Ndagani Modern Market",
    "Culvert Projects in Kajiado",
    "Abulution Block in GIthunguri Primary School",
    "Apartment Blocks in Nairobi",
    "Rehabilitated Roads in Chuka",
    "Fence Construction at Chuka Level 5",
    "Abulution Block at Komothai Girls School",
    "Kathwana Ablution Block",
  ];

  const handleImageClick = (index) => {
    navigate(`/portfolio/${projectId}/image/${index}`),{
    };
  };

  
  const image = projectImages[projectId]?.[0]; 
  const projectTitle = projects[projectId];

  return (
    <>
      <Navbar />
      <div className="header-container">
        {image && (
          <>
            <img
              src={image.img}
              alt={`Project ${projectId}`}
              className="project-header"
            />
            <div className="project-text">
              <h1>{projectTitle}</h1>
            </div>
          </>
        )}
        {!image && <p>No image available for this project.</p>}
      </div>
      <Projects
        projects={projects}
        projectImages={projectImages}
        projectId={projectId}
        onImageClick={handleImageClick}
      />
      <Footer />
    </>
  );
}

export default ProjectGallery;
