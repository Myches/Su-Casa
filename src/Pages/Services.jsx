import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'
import Fade from 'react-reveal/Fade';

function Services() {



  const accordionItems = [
    { title: 'Customer Satisfaction', content: 'Your satisfaction is our top priority. We are committed to delivering exceptional service and exceeding your expectations. Our numerous satisfied clients are a testament to our dedication and commitment to building long-lasting relationships based on trust and integrity.' },
    { title: 'Market Insights and Analysis', content: 'We go beyond surface-level information. Our in-depth market analysis and insights empower you to make informed decisions. We provide you with data-driven reports, comparative market analyses, and local market trends to help you ' },
    { title: 'Budgeting Confidence', content: ' Our program allows you to plan your finances with confidence. With locked-in pricing, you can accurately budget for your purchase without the worry of unexpected price increases impacting your financial plans.' },
  ];






    return (

     <div className='w-full'>
      <h1 className='flex justify-center items-center font-bold tracking-[3px] leading-[1.1]  pb-8 pt-[100px]'>SERVICES</h1>
      <h2 className='md:text-3xl text-xl flex  justify-center items-center md:pb-[100px] pb-[50px] text-blue-800 font-bold'>Exclusive Offer For You</h2>
     <div className="md:flex justify-center items-center mx-8 ">
     <Fade bottom> 
  |<div className='md:w-1/2 w-full '> 
  <h1 className=" md:text-3xl text-xl pb-4 text-blue-800 flex justify-center items-center font-bold">MARCY PROJECTS</h1>
      <img src="./assets/pexel-1.jpg"  className='  md:h-[450px] h-[250px] border border-blue-700 rounded-2xl md:p-8 p-2'/>
      
    </div>
    </Fade>


    <Fade bottom> 
  <div className='md:w-1/2 w-full'>
  <h1 className="flex  justify-center items-center md:text-3xl text-xl pb-4 pt-8 md:pt-0 text-blue-800 font-bold">Our Value</h1>
  <p className='py-8 w-[80%] mx-auto text-lg'>
Here at Su-casa, where we deliver unmatched value to our users in the dynamic world of real estate.
 We are committed to providing you with a seamless,
 comprehensive, and rewarding experience throughout your real estate journey.</p>

  <div className='flex  justify-center items-center '>
  <Accordion className='w-[80%] shadow-lg  '>
    {accordionItems.map((item) => (
        <AccordionItem key={item.uuid}>
            <AccordionItemHeading>
                <AccordionItemButton>
                
             <span className="text-xl text-blue-800">  {item.title}</span>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel >
              {item.content}
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>
</div>

    </div></Fade>
      </div>
      </div>
    );
  }
  
  export default Services;