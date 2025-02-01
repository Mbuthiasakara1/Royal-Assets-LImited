
import Description from "./components/Description"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
const App = () => {
   useEffect(() => {
     document.title = "Malazi Kenya";
   }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Home />
      <Description />
      <Footer /> 
    </div>
  )
}

export default App
