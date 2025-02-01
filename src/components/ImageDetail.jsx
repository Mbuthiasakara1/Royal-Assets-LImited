
// import { Box, IconButton } from "@mui/material";
// import { useNavigate, useParams } from "react-router-dom";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import CloseIcon from "@mui/icons-material/Close";
// import { useEffect, useState } from "react";

// const ImageDetail = () => {
//   const { projectId, imageIndex } = useParams();
//   const navigate = useNavigate();
//   const [currentIndex, setCurrentIndex] = useState(Number(imageIndex));

//   const projectImages = {
//     1: [
//       { img: "/projects/pict3.jpg" },
//       { img: "/projects/toiletsb.jpg" },
//       { img: "/projects/project3.jpg" },
//     ],
//     2: [
//       { img: "/projects/Marketpic1.jpg" },
//       { img: "/projects/marketpic2.jpg" },
//     ],
//     3: [
//       { img: "/projects/culvert1.jpg" },
//       { img: "/projects/culvert2.jpg" },
//       { img: "/projects/culvert3.jpg" },
//     ],
//     4: [
//       { img: "/projects/githunguri3.jpg" },
//       { img: "/projects/githunguri2.jpg" },
//     ],
//     5: [
//       { img: "/images/mirror.jpg" },
//       { img: "/images/waterfall.jpg" },
//       { img: "/images/blackblock.jpg" },
//     ],
//     6: [{ img: "/projects/Roadpic2.jpg" }, { img: "/projects/Roadpic1.jpg" }],
//     7: [{ img: "/projects/fencepic1.jpg" }, { img: "/projects/fence3.jpg" }],
//     8: [
//       { img: "/projects/Komothai2.jpg" },
//       { img: "/images/IMG-20250104-WA0042.jpg" },
//     ],
//   };

//   const images = projectImages[projectId] || [];

//   useEffect(() => {
//     if (currentIndex < 0 || currentIndex >= images.length) {
//       navigate(`/portfolio/${projectId}`);
//     }
//   }, [currentIndex, images.length, navigate, projectId]);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
//   };

//   const handleClose = () => {
//     navigate(`/portfolio/${projectId}`);
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//         position: "relative",
//         bgcolor: "black",
//       }}
//     >
//       {/* Close button */}
//       <IconButton
//         onClick={handleClose}
//         sx={{
//           position: "absolute",
//           top: 16,
//           right: 16,
//           color: "white",
//           "&:hover": {
//             bgcolor: "rgba(255, 255, 255, 0.1)",
//           },
//         }}
//       >
//         <CloseIcon />
//       </IconButton>

//       {/* Navigation buttons wrapper */}
//       <Box
//         sx={{
//           position: "absolute",
//           left: 0,
//           right: 0,
//           display: "flex",
//           justifyContent: "space-between",
//           px: 2,
//           top: "50%",
//           transform: "translateY(-50%)",
//         }}
//       >
//         <IconButton
//           onClick={handlePrev}
//           sx={{
//             color: "white",
//             "&:hover": {
//               bgcolor: "rgba(255, 255, 255, 0.1)",
//             },
//             "&.Mui-disabled": {
//               color: "rgba(255, 255, 255, 0.3)",
//             },
//           }}
//           disabled={currentIndex === 0}
//         >
//           <ArrowBackIcon />
//         </IconButton>

//         <IconButton
//           onClick={handleNext}
//           sx={{
//             color: "lightblue", // Default color
//             "&:hover": {
//               bgcolor: "rgba(173, 216, 230, 0.1)", // Light blue hover background
//             },
//             "&.Mui-disabled": {
//               color: "rgba(173, 216, 230, 0.3)", // Muted light blue for disabled state
//             },
//           }}
//           disabled={currentIndex === images.length - 1}
//         >
//           <ArrowForwardIcon />
//         </IconButton>
//       </Box>

//       <img
//         src={images[currentIndex].img}
//         alt={`Image ${currentIndex + 1}`}
//         style={{ maxHeight: "90%", maxWidth: "90%" }}
//       />
//     </Box>
//   );
// };

// export default ImageDetail;

import { Box, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

const ImageDetail = () => {
  const { projectId, imageIndex } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(Number(imageIndex));
  const [projectImages, setProjectImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the JSON file containing project images
    fetch("/images.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch project images");
        return response.json();
      })
      .then((data) => {
        setProjectImages(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project images:", err);
        setError("Failed to load images.");
        setIsLoading(false);
      });
  }, []);

  const images = projectImages[projectId] || [];

  useEffect(() => {
    if (!isLoading && (currentIndex < 0 || currentIndex >= images.length)) {
      navigate(`/portfolio/${projectId}`);
    }
  }, [currentIndex, images.length, isLoading, navigate, projectId]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  };

  const handleClose = () => {
    navigate(`/portfolio/${projectId}`);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (!images[currentIndex]) {
    return (
      <p style={{ color: "white" }}>No images available for this project.</p>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
        bgcolor: "black",
      }}
    >
      {/* Close button */}
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "white",
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Navigation buttons */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          px: 2,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            color: "white",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.1)",
            },
            "&.Mui-disabled": {
              color: "rgba(255, 255, 255, 0.3)",
            },
          }}
          disabled={currentIndex === 0}
        >
          <ArrowBackIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            color: "lightblue",
            "&:hover": {
              bgcolor: "rgba(173, 216, 230, 0.1)",
            },
            "&.Mui-disabled": {
              color: "rgba(173, 216, 230, 0.3)",
            },
          }}
          disabled={currentIndex === images.length - 1}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      <img
        src={images[currentIndex]?.img}
        alt={`Image ${currentIndex + 1}`}
        style={{ maxHeight: "90%", maxWidth: "90%" }}
      />
    </Box>
  );
};

export default ImageDetail;
