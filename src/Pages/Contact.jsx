import {AiOutlineArrowRight,AiOutlineSend} from 'react-icons/ai'
import Fade from 'react-reveal/Fade';


function Contact() {
    return (
     <div className="bg-blue-950 text-gray-300 py-14 text-sm ">
   <Fade bottom>  <div className="md:grid md:grid-cols-3 grid grid-cols-1 md:mx-12 mx-[50px] gap-y-8 md:gap-y-8 ">
     <div className="flex flex-col space-y-4 md:mr-[100px] mr-0 ">
      <h1 className="text-lg ">Newsletter</h1>
      <p className=" text-sm w-[80%]">Stay informed, stay ahead with our exclusive real estate newsletter! At Su-Casa, we are delighted to bring you a valuable resource packed with the latest industry updates, market insights, and expert advice, directly to your inbox.</p>
      <form className="flex pt-2">

     
    <input type="email" id="email" className="w-[250px] p-2 border rounded-lg " placeholder="info@su-casa.com"></input>
    <button type="submit" className='ml-[-20px] bg-blue-950 border rounded-lg border-gray-400 p-2'  ><AiOutlineSend /> </button>
          
          </form>
          
         
      </div>  
    
      
      
      <div className="flex flex-col space-y-4 md:pl-[100px] pl-0">
      <h1 className="text-lg  ml-8">Contact Info</h1>
      <p className="flex space-x-4"><AiOutlineArrowRight />  <p> Email: info@su-casa.com</p></p>
      <p className="flex space-x-4"><AiOutlineArrowRight />  <p> Phone: +111(0)555664125</p></p>
      <p className="flex space-x-4"><AiOutlineArrowRight />  <p> Address :720 Street,Accra.Ghana </p></p>
      <p className="flex space-x-4" ><AiOutlineArrowRight />  <p>  Visit : Mon - Sat, 08 AM - 06 PM</p></p>
      </div>
      
      <div className="flex flex-col space-y-4 pl-0  md:pl-[100px]">
      <h1 className="text-lg ml-8 ">LEGAL</h1>
      <p className="flex space-x-4"><AiOutlineArrowRight />  <p>  Documents</p></p>
      <p className="flex space-x-4"><AiOutlineArrowRight />  <p>  Offices</p></p>
      <p className="flex space-x-4"><AiOutlineArrowRight />  <p>  How to buy a house</p></p>
      <p className="flex space-x-4"><AiOutlineArrowRight />  <p> Terms & Condition</p></p>
      </div>
    </div>
    </Fade>
      </div>
     
    );
  }
  
  export default Contact;