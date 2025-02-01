
import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PortfolioImages.css"

const PortfolioImages = () => {
  const navigate = useNavigate();

  const portfolioItems = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dpngcztrh/image/upload/v1737321070/toilets_jvi3re.jpg",
      title: "Kathwana Market Ablution Block",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dpngcztrh/image/upload/v1737321155/Market1_js2ybv.jpg",
      title: "Ndagani Modern Market",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dpngcztrh/image/upload/v1737321280/CulvertM_kjtuzh.png",
      title: "Culvert Projects in Kajiado",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dpngcztrh/image/upload/v1737321937/githunguriM_mfuogx.jpg",
      title: "Abulution Block in GIthunguri Primary School",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dpngcztrh/image/upload/v1737321362/pic1_n2tdkc.jpg",
      title: "Apartment Blocks in Nairobi",
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dpngcztrh/image/upload/v1737321424/RoadM_fz7jtk.jpg",
      title: "Rehabilitated Roads in Chuka",
    },
    {
      id: 7,
      img: "https://res.cloudinary.com/dpngcztrh/image/upload/v1737321464/fence_iipu28.jpg",
      title: "Fence Construction at Chuka Level 5",
    },
    {
      id: 8,
      img: "https://res.cloudinary.com/dpngcztrh/image/upload/v1737321535/KomothaiM_njr9xr.jpg",
      title: "Abulution Block at Komothai Girls School",
    },
  ];

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4 }} className="portfolio-container">
        <Typography variant="h2">
          Our Projects
        </Typography>
        <ImageList cols={3} gap={16}>
          {portfolioItems.map((item) => (
            <ImageListItem
              key={item.id}
              onClick={() => navigate(`/portfolio/${item.id}`)}
              sx={{ cursor: "pointer" }}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <ImageListItemBar title={item.title} position="below" />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default PortfolioImages;
