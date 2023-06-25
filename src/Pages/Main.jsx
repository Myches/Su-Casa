import Fade from 'react-reveal/Fade';
import   AwesomeSlider  from 'react-awesome-slider'
import   withAutoplay from 'react-awesome-slider/dist/autoplay'
import  'react-awesome-slider/dist/styles.css'  
import  'react-awesome-slider/dist/custom-animations/cube-animation.css'



 function Main() {

      

  const AutoplaySlider=withAutoplay(AwesomeSlider)
 

  
  return (
 
      <div className=' w-full  ' >

<div className='relative'>

         <AutoplaySlider play={true} interval={3000} animation="fadeAnimation" className="h-screen  bg-cover bg-center w-[100vw] bg-black  opacity-50 " bullets={false}  organicArrows={false} buttons={false}  >
       
        
      
      <div>
      <img src="./assets/pexel-2.jpg" />
      </div>
      <div>
      <img src="./assets/pexel-3.jpg" />
      </div>
      <div>
      <img src="./assets/pexel-4.jpg" />
      </div>
      <div>
      <img src="./assets/pexel-5.jpg" />
      </div>


         </AutoplaySlider>
         <div className='absolute md:inset-0 inset-[50%] flex flex-col justify-center items-center md:text-[24px] text-[18px] '  >
         <h1 className='  font-bold tracking-[13px] leading-[1.1]   '>MODERN APARTMENT HOUSES </h1>
      <Fade bottom>  <button className='href="#About" mt-14 font-light  tracking-[10px] leading-[1.1] border rounded-3xl border-cyan-950 p-4 bg-blue-950 text-white ' >Explore</button></Fade> 
      </div>

        </div>
  

       

      </div>
   
     
  );

     

    
 
  
  
  
}
export default Main