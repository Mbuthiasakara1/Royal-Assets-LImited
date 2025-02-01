import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); // Get the current route's pathname

  useEffect(() => {
    // This effect is triggered whenever the pathname changes
    window.scrollTo(0, 0); // Scroll to the top-left corner of the window
  }, [pathname]); // Dependency array: Runs effect whenever 'pathname' changes

  return null; // This component doesn't render anything visible
}

export default ScrollToTop;
