import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Response() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <div className=" text-center mb-4 pb-4" >
       <img  data-aos="fade-right"  data-aos-duration="2000" src="/images/responseImg.png" alt="responseimage" height="420px" width="420px" className='text-center' />


       <p className='fw-bold' style={{fontSize:'1.5rem',color:'#01d293'}}>Thank you for contacting me!</p>
      


       <span>I have received your message </span> <br />
       <span>I'll reach you out immediately </span> <br /> <br />
         <button className='btn btn-primary'>

<a href="/" style={{color:'white',textDecoration:'none'}}>Back to Home</a>

         </button>
    </div>


  
</>
  )
}
