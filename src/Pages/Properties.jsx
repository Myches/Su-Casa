import axios from 'axios'
import { useState, useEffect, useRef} from 'react';
import {CiLocationOn} from 'react-icons/ci'
import   Slider from 'react-slick'
import   'slick-carousel/slick/slick.css'  
import   'slick-carousel/slick/slick-theme.css'


function Properties() {

  const [rent, setRent] = useState([]);
  const [sale, setSale] = useState([]);


  const fetchPropertiesData = async () => {
    try {
      const response = await axios.get(
        "https://ayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6",
        {
          headers: {
            "X-RapidAPI-Key": "af208aba5amshf0beec87a12c7c5p1fc525jsn01005babeeec",
            "X-RapidAPI-Host": "bayut.p.rapidapi.com"
          },
        }
      );
      setRent(response.data.hits);
      console.log(response.data.hits);
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }

    const response = await axios.get(
      "https://ayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6",
      {
        headers: {
          "X-RapidAPI-Key": "af208aba5amshf0beec87a12c7c5p1fc525jsn01005babeeec",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com"
      }}
    );
   
    setSale(response.data.hits);
    console.log(response.data.hits);

    
  };
  
  

 
  
 
   useEffect(() => {
    fetchPropertiesData();
  }, []);

 
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true ,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: null,
        prevArrow: null,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

    
  
  
  };
  
const sliderRef=useRef(null)


    return (

     <div className='mt-[150px] '>
 <h1 className='flex justify-center items-center font-bold tracking-[3px] leading-[1.1]  pt-[100px] '>PROPERTIES</h1>

 <h2 className='pt-12 pl-8  md:text-2xl text-xl flex justify-center items-center text-blue-800 font-bold'>BEST CHOICES FOR RENT</h2>
 

    <Slider  {...sliderSettings}>
{rent.map((rent,i) => (
     
     
     <div className=" py-[30px]  " key={i} >  
     <img src={rent.coverPhoto.url} alt='pic' className='border rounded-2xl m:w-[400px] md:h-[250px] w-[200px] h-[80px]'/>
     <div className='flex  justify-center items-center  mx-auto'> <CiLocationOn  className='text-blue-700'/><h1 className='font-bold  '>{rent.location[2].name} </h1>  </div>
     <p className=' flex  justify-center items-center text-sm'>{rent.title}</p>
  
     </div>
       
    
      
  
     
    ))}
    
    </Slider>

    <h2 className='pt-12 pl-8   md:text-2xl text-xl flex justify-center items-center text-blue-800 font-bold'>BEST CHOICES FOR SALE</h2>

   
    <Slider {...sliderSettings}>
{sale.map((sale,i) => (
     
     
     <div className=" py-[30px]  " key={i} >  
     <img src={sale.coverPhoto.url} alt='pic' className='border rounded-2xl w-[400px] h-[250px]'/>
     <div className='flex  justify-center items-center  mx-auto'> <CiLocationOn  className='text-blue-700'/><h1 className='font-bold  '>{sale.location[2].name} </h1>  </div>
     <p className=' flex  justify-center items-center text-sm '>{sale.title}</p>
  
     </div>
       
    
      
  
     
    ))}</Slider>

</div>


   
     
    );
  }
  
  export default Properties;