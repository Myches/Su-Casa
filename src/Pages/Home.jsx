
import Navbar from "./Navbar";
import Main from "./Main";
import Services from "./Services";
import Properties from "./Properties";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";




function Homepage() {
    return (
     <div className=" w-full h-screen " >
      <Navbar />
<div className="bg-gray-200">
      <div className=" mt-12"  id="#Main"> <Main /></div>
      <div className=" mt-12 "  id="About"> <About /></div>
      <div className="mt-12"   id="Properties"> <Properties /></div>
      <div className=" mt-12"  id="Services"> <Services /></div>
      <div className="  mt-12"   id="Contact"> <Contact /></div>
      <div className=" "   id="Footer"> <Footer /></div>

      </div>
    

     </div>
    );
  }
  
  export default Homepage;
  