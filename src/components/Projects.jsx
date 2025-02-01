import "./Projects.css"
import {
  Box,
  ImageList,
  ImageListItem,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Projects = ({ projectImages, projectId, onImageClick }) => {

  const navigate = useNavigate();
  const galleryImages = projectImages[projectId] || [];

  return (
    <>
      <Box sx={{ p: 4 }} className="gallery-container">
        <Button onClick={() => navigate("/portfolio")} sx={{ mb: 3 }}>
          Back to Portfolio
        </Button>

        <Typography variant="h4" sx={{ mb: 4 }}>
          Project Gallery
        </Typography>

        <ImageList cols={3} gap={16}>
          {galleryImages.map((item, index) => (
            <ImageListItem
              key={index}
              sx={{
                cursor: "pointer",
                "& img": {
                  transition: "opacity 0.3s",
                  ":hover": {
                    opacity: 0.6,
                  },
                },
              }}
              onClick={() => onImageClick(index)}
            >
              <img
                src={item.img}
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
                style={{ height: "200px", objectFit: "cover" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default Projects;
