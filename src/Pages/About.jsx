import CountUp from "react-countup";
import {BsPiggyBank,BsFillJournalBookmarkFill} from 'react-icons/bs'
import { AiOutlineUnlock } from 'react-icons/ai';
import { CiWallet } from 'react-icons/ci';




function Services() {
    return (
     <div className="mx-auto w-[80%] ">
     <h1 className='font-bold tracking-[3px] leading-[1.1] flex  justify-center items-center pt-[100px] text-2xl'>WHAT WE DO</h1>
     <p className="pt-12  flex  justify-center items-center">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything
 that was left from its origin would be the word "and" and the Little Blind Text should turn around and return 
 to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
      
      
      <div className="md:grid md:grid-cols-4  grid-1 gap-8  font-bold text-xl pt-12">
      <div className="md:border-r pb-8 md:pb-0">
     <span className="flex justify-center items-center text-2xl"><CountUp start={7000} end={10000} duration={70}/><span>+</span></span> 
      <p className="text-blue-700 flex justify-center items-center ">TOTAL PROPERTIES</p>
      </div>

      <div className="md:border-r  pb-8 md:pb-0">
      <span className="flex justify-center items-center"></span> 
      <span className="flex justify-center items-center text-2xl"> <CountUp start={15} end={89} duration={70}/><span>+</span></span>
      <p className="text-blue-700 flex  justify-center items-center">BRANCHES</p>
      </div>


      <div className="md:border-r pb-8 md:pb-0">
      <span className="flex justify-center items-center text-2xl"> <CountUp start={100} end={450} duration={70}/><span>+</span></span>
      <p className="text-blue-700  flex justify-center items-center">QUALIFIED REALTORS</p>
      </div>

      <div className="md:border-r pb-8 md:pb-0">
      <span className="flex justify-center items-center text-2xl"> <CountUp start={5} end={50} duration={70}/><span>+</span></span>
      <p className="text-blue-700 flex justify-center items-center">YEARS OF EXPEREIENCE</p>
      </div>





      </div>
      <div className="md:grid md:grid-cols-4 gap-8 grid grid-cols-1 mt-[100px] ">
       <div className=""> <BsPiggyBank  className="text-[85px] pb-4 " /> 
       <div className="">
        <h1 className="text-lg">No Downpayment</h1>
        <p className="">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
       </div>
       </div>


       <div className=""> <CiWallet  className="text-[85px] pb-4 "/>
       <div className="">
        <h1>All Cash Offer</h1>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
       </div>
      </div>


       <div className="">
        
          <BsFillJournalBookmarkFill  className="text-[85px] pb-4 "/>
          <div className="">
        <h1>Experts in Your Corner</h1>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
       </div>
          </div>


       <div className=""> 
         <AiOutlineUnlock  className="text-[85px] pb-4 "/>
         <div className="">
        <h1>Lokced in Pricing</h1>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
       </div>
         </div>
      
      
      
      </div>




      </div>
     
    );
  }
  
  export default Services;