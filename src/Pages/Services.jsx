import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'
import {HiShieldCheck} from 'react-icons/hi'


function Agents() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };


  const accordionItems = [
    { title: 'Best Interest Rate', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis' },
    { title: 'Prevent Unstable Prices', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis' },
    { title: 'Best Price on the market', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis' },
  ];






    return (

     <div className=''>
      <h1 className='flex justify-center items-center font-bold tracking-[3px] leading-[1.1] text-2xl pb-8 pt-[100px]'>SERVICES</h1>
      <h2 className='text-3xl flex  justify-center items-center pb-[100px]'>Exclusive Offer For You</h2>
     <div className="flex justify-center items-center mx-8">

  |<div className='w-1/2 flex  justify-center items-center'> 
      <img src="./assets/pexel-1.jpg"  className='  h-[450px]  border rounded-2xl'/>
      
    </div>

  <div className='w-1/2 '>
  <h1 className="flex  justify-center items-center text-3xl pb-4 ">Our Value</h1>
  <p className='py-8 w-[80%] mx-auto'>I'm John Doe a realtor agent, Lorem ipsum dolor sit amet,
   consectetur adipisicing elit. Saepe omnis beatae libero quisquam ex nostrum repellendus,
    consectetur suscipit.Velit iusto ducimus sit quos officiis nesciunt libero, officia, aliquam doloremque totam.</p>

  <div className='flex  justify-center items-center '>
  <Accordion className='w-[80%] shadow-lg  '>
    {accordionItems.map((item) => (
        <AccordionItem key={item.uuid}>
            <AccordionItemHeading>
                <AccordionItemButton>
                
             <span className="text-xl ">  {item.title}</span>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel >
              {item.content}
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>
</div>

    </div>
      </div>
      </div>
    );
  }
  
  export default Agents;