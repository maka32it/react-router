import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import "./index.css"
import About from "./components/about/About";
import Offers from "./components/offers/Offers"
import Footer from "./components/footer/Footer"



function App() {

 
  return (
   <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Offers></Offers>
    <Footer></Footer>
   </>
  );
}

export default App;
