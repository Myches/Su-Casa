import CountUp from "react-countup";
import {BsPiggyBank,BsJournalBookmark} from 'react-icons/bs'
import { AiOutlineUnlock } from 'react-icons/ai';
import { CiWallet } from 'react-icons/ci';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


function Services() {
    return (
     <div className="mx-auto w-full ">
     <h1 className='flex justify-center items-center font-bold tracking-[3px] leading-[1.1]  pt-[100px] '>ABOUT</h1>
     <Fade bottom>   <h2 className='text-3xl flex  justify-center items-center pt-12 text-blue-800 font-bold '>WHAT WE DO</h2>

     
     <p className="pt-12 text-lg flex  justify-center items-center w-[80%] mx-auto">Welcome to our real estate website, where we transform your property dreams into reality! At Su-Casa, we specialize in connecting buyers, sellers, and renters in the vibrant world of real estate.

     Our mission is simple: to simplify and enhance your real estate journey. Whether you're searching for your dream home, looking to sell your property quickly, or seeking a reliable tenant, we've got you covered.</p>
     </Fade>
      
      
 <div className="md:grid md:grid-cols-3 grid-cols-1 space-y-8 mt-[100px] gap-8 mx-8 ">
 <Zoom>  
   <div className="flex flex-col justify-center items-center m"> <BsPiggyBank  className="text-[85px] pb-4 text-blue-800  " /> 
       <div className="text-gray-600 flex flex-col justify-center items-center">
        <h1 className="pb-4 text-xl font-bold">No Downpayment</h1>
        <p className="text-sm w-[80%] mx-auto">We partner with lenders and financial institutions who offer exclusive programs that allow you to purchase a home without the need for a downpayment. Say goodbye to the traditional barriers of entry and hello to homeownership.</p>
       </div>
       </div>
       </Zoom>

       <Zoom> 
       <div className="flex flex-col justify-center items-center"> <CiWallet  className="text-[85px] pb-4 text-blue-800"/>
       <div className="text-gray-600 flex flex-col justify-center items-center">
        <h1 className="pb-4 text-xl font-bold">All Cash Offer</h1>
        <p className="text-sm w-[80%] mx-auto">We streamline the buying process, ensuring that your cash offer is processed swiftly. By eliminating the need for mortgage approval and the associated delays, we expedite the transaction and help you seize opportunities in a competitive market.</p>
       </div>
      </div>
      </Zoom>

     
      <Zoom> 
       <div className="flex flex-col justify-center items-center"> 
         <AiOutlineUnlock  className="text-[85px] pb-4 text-blue-800"/>
         <div className="text-gray-600 flex flex-col justify-center items-center">
        <h1 className="pb-4 text-xl font-bold">Locked in Pricing</h1>
        <p className="text-sm w-[80%] mx-auto"> When you find a property you love, we offer the opportunity to lock in the price, shielding you from market fluctuations. This means that even if prices rise before the closing, you are protected and will pay the initially agreed-upon amount.</p>
       </div>
         </div>
         </Zoom>
      
      
      </div>



      <div className="md:grid md:grid-cols-4  grid-1 gap-8  font-bold text-xl mt-[100px]">
      <div className="md:border-r border-cyan-950  pb-8 md:pb-0">
     <span className="flex justify-center items-center text-[40px] text-gray-600 pb-4"><CountUp start={7000} end={10000} duration={70}/><span className="text-blue-800">+</span></span> 
      <p className=" text-cyan-950 flex justify-center items-center ">TOTAL PROPERTIES</p>
      </div>

      <div className="md:border-r border-cyan-950 pb-8 md:pb-0">
      <span className="flex justify-center items-center"></span> 
      <span className="flex justify-center items-center text-[40px] text-gray-600 pb-4"> <CountUp start={15} end={89} duration={70}/><span className="text-blue-800">+</span></span>
      <p className=" text-cyan-950 flex  justify-center items-center">BRANCHES</p>
      </div>


      <div className="md:border-r border-cyan-950  pb-8 md:pb-0">
      <span className="flex justify-center items-center text-[40px] text-gray-600 pb-4"> <CountUp start={100} end={450} duration={70}/><span className="text-blue-800">+</span></span>
      <p className=" text-cyan-950  flex justify-center items-center">QUALIFIED REALTORS</p>
      </div>

      <div className=" pb-8 md:pb-0">
      <span className="flex justify-center items-center text-[40px] text-gray-600 pb-4"> <CountUp start={5} end={50} duration={70}/><span className="text-blue-800">+</span></span>
      <p className=" text-cyan-950  flex justify-center items-center">YEARS OF EXPERIENCE</p>
      </div>





      </div>
     




      </div>
     
    );
  }
  
  export default Services;