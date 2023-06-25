

import { useState } from "react";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center w-full h-12 bg-blue-950 text-gray-300 px-8 text-lg z-10">   
    <p className='' >Su-Casa</p>
 
  <ul className="flex justify-around items-center  cursor-pointer hidden md:flex   "   >  
  <a href="#About"> <li className='m-6' >About us</li></a>
<a href="#Properties"> <li className='m-6 ' > Properties </li></a>
<a href="#Services" > <li className='m-6' >Services</li></a>
<a href="#Contact"> <li className='m-6 ' >Contact</li></a>

    
  </ul>
  <button className="md:hidden  absolute right-7 top-3 bg-White-950 " onClick={toggleMenu}>
    {!isOpen ? <AiOutlineMenu /> : <AiOutlineClose /> }
        </button>
       
</div> 
{isOpen &&  (

<ul className="  bg-blue-950 w-[70%] h-full mx-auto pt-4   flex flex-col  text-gray-300 fixed top-10 right-0 z-10 ease-in-out duration-500 ">  
<a href="#About" onClick={toggleMenu}> <li className='m-6 border-b border-gray-600' >About us</li></a>
<a href="#Properties" onClick={toggleMenu}> <li className='m-6 border-b border-gray-600' > Properties </li></a>
<a href="#Services" onClick={toggleMenu}> <li className='m-6 border-b border-gray-600' >Services</li></a>
<a href="#Contact" onClick={toggleMenu}> <li className='m-6 border-b border-gray-600' >Contact</li></a>
 
</ul>



 )}



</div>
  );
}
