import axios from 'axios'
import { useState, useEffect} from 'react';
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
        "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6",
        {
          headers: {
            "X-RapidAPI-Key": "853a1564dcmsh0f83fc694dea98fp1a0e6bjsnfd37b5e09ba6",
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
      "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6",
      {
        headers: {
          "X-RapidAPI-Key": "853a1564dcmsh0f83fc694dea98fp1a0e6bjsnfd37b5e09ba6",
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
    autoplaySpeed: 7000,
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
  



    return (

     <div className='mt-[150px] overflow-hidden'>
 <h1 className='flex justify-center items-center font-bold tracking-[3px] leading-[1.1]  pt-[100px] '>PROPERTIES</h1>

 <h2 className='pt-12 pl-8  md:text-2xl text-xl flex justify-center items-center text-blue-800 font-bold'>BEST CHOICES FOR RENT</h2>
 

    <Slider  {...sliderSettings}>
{rent.map((rent,i) => (
     
     
     <div className=" py-[30px]  px-8" key={i} >  
     <img src={rent.coverPhoto.url} alt='pic' className='border rounded-2xl w-[400px] h-[250px] p-4 border-gray-400'/>
     <div className='flex  justify-center items-center  mx-auto'> <CiLocationOn  className='text-blue-700'/><h1 className='font-bold  '>{rent.location[2].name} </h1>  </div>
     <p className=' flex  justify-center items-center text-sm'>{rent.title}</p>
  
     </div>
       
    
      
  
     
    ))}
    
    </Slider>

    <h2 className='pt-12 pl-8   md:text-2xl text-xl flex justify-center items-center text-blue-800 font-bold'>BEST CHOICES FOR SALE</h2>

   
    <Slider {...sliderSettings}>
{sale.map((sale,i) => (
     
     
     <div className=" py-[30px] px-8 " key={i} >  
     <img src={sale.coverPhoto.url} alt='pic' className='border rounded-2xl w-[400px] h-[250px] p-4 border-gray-400'/>
     <div className='flex  justify-center items-center  mx-auto'> <CiLocationOn  className='text-blue-700'/><h1 className='font-bold  '>{sale.location[2].name} </h1>  </div>
     <p className=' flex  justify-center items-center text-sm '>{sale.title}</p>
  
     </div>
       
    
      
  
     
    ))}</Slider>

</div>


   
     
    );
  }
  
  export default Properties;