



function Contact() {
    return (
     <div className="bg-black text-blue-400 py-14 text-sm">
    <div className="md:grid md:grid-cols-3 grid grid-cols-1 md:mx-12 mx-14 gap-y-8 md:gap-y-8">
      <div className="flex flex-col space-y-8 md:mr-[100px] ml-0">
      <h1 className="text-lg ">Newsletter</h1>
      <p className=" text-sm">Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing days open</p>
      <form className="flex pt-2">

     
    <input type="email" id="email" className="w-[250px] p-2 border rounded-2xl " placeholder="info@su-casa.com"></input>
    <button type="submit" className='ml-[-79px] bg-black border rounded-xl border-gray-400 p-2'  >SUBSCRIBE</button>
          
          </form>
      </div>

      

      <div className="flex flex-col space-y-4 md:pl-[100px] ">
      <h1 className="text-lg  ">Contact Info</h1>
      <p className="">Email: info@su-casa.com</p>
      <p className="">Phone: +111(0)555664125</p>
      <p className="">Address :720 Street,Accra.Ghana </p>
      <p className="" >Visit : Mon - Sat, 08 AM - 06 PM</p>
      </div>

      <div className="flex flex-col space-y-4 pl-0  md:pl-[100px]">
      <h1 className="text-lg  ">LEGAL</h1>
      <p className="">Documents</p>
      <p className="">Offices</p>
      <p className="">How to buy a house</p>
      <p className="">Terms & Condition</p>
      </div>
    </div>
    
      </div>
     
    );
  }
  
  export default Contact;