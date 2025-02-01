
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import ProjectGallery from "./ProjectGallery";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./Scroll";
import ImageDetail from "./ImageDetail";


function Layout() {
  return (
    <>
      <ScrollToTop /> 
      <Outlet /> 
    </>
  );
}

const routes = [
  {
    path: "/",
    element: <Layout />, // Wrap everything in the Layout
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services", element: <Services /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/portfolio/:projectId", element: <ProjectGallery /> },
      {
        path: "/portfolio/:projectId/image/:imageIndex",
        element: <ImageDetail />,
      },
    ],
  },
];
       
           

export default routes;