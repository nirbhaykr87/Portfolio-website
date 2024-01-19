import React, { useRef,useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import About from './About';
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';



import './contact.css'
import emailjs from '@emailjs/browser';
import { Navigate } from 'react-router-dom';


export default function Contact() {

    useEffect(() => {
      AOS.init();
    }, [])
  const navigate = useNavigate();

  const form = useRef();
  const redirectToAbout = () => {
    navigate('/response');}

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xkvd1d3', 'template_oytyayc', form.current, 'IpV03V5hbPn8_omi5')
      .then((result) => {
          console.log(result.text);
          
          redirectToAbout();
          
          e.target.reset(); 
      }, (error) => {
          console.log(error.text);
          redirectToAbout();


      });
  };



  return (
    <>
    

<div className='mc'>
    <div className="container   mc mt-4  "  >

      <div className="row   mt-5"  >


      <div   className="leftContainer col-md-3     mx-md-auto" >

      <img data-aos="fade-right"  data-aos-duration="2000" className='mx-5 ' src="images/contact_img1-transformed.png" alt="manimage"  height={"420px"}  />


       </div>

      
     
     
<div    className="rightContainer     col-md-5   mx-md-auto"  style={{border:'2px solid #808DAD',padding:'12px 19px',borderRadius:'15px'}}>

<h3 className='fw-bold text-center ' style={{color:'#01d293',textDecoration:'underline',textDecorationColor:'#808DAD',textDecorationThickness:'2px'}}>Contact me</h3>


<form action=""   ref={form} onSubmit={sendEmail}>

<svg style={{color:'#808DAD'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 20 20">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
  <label htmlFor="name" className='mx-2 mt-4'>Name </label>
<input   type="text" placeholder='Your Full Name' required  autoComplete='off' name="user_name"/> <br />




<svg style={{color:'#808DAD'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>
<label htmlFor="email" className='mx-3 mt-4'>Email </label>
<input   type="email" placeholder='Your Email'   autoComplete='off' name="user_email" required/> <br />




<div className='text_area_adjustment mt-4'>
<svg  style={{color:'#808DAD'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-text-fill" viewBox="0 0 16 16">
  <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"/>
</svg>

<label htmlFor="message" className='mx-3 '>Message </label>

<textarea id="" cols="10" rows="4"   autoComplete='off' name="message" placeholder='Your Message'></textarea>
</div>

<input className='mt-4' type="submit" value="Send Message"/>



</form>
  

</div>
</div>

      </div>



      

      {/* content for mobile ---> card like details show */}


      <div class="card mx-auto  car profile_div mb-4 pb-4" style={{width: '24rem'}}>
  <img src="images/profile.jpg" class="card-img-top" alt="ProfileImg"/>
  <div class="card-body text-white">
    
    <p className='line ' style={{color:'#01D293'}}>  <span >-----</span> Details</p>
    

    <span >

    <svg style={{color:'#808DAD', marginRight:'8px'}} xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 19 19">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>

         Name : <span  style={{color:'#808DAD'}}>Nirbhay Kumar</span> 

    </span>
    <br />
  


    <span className=''>

    <svg style={{color:'#808DAD', marginRight:'8px'}} xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 19 19">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>

Email : <span  style={{color:'#808DAD'}}>nirbhaysawan8757@gmail.com</span> 

      
    </span>



<br />

    <span>


    <svg   style={{ fill: '#808DAD',marginRight:'8px',marginTop:'4px'}}  xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
   

    Mobile : <span  style={{color:'#808DAD'}}>6207935550</span> 

</span>  <br />




<span >

<svg  style={{ fill: '#808DAD',marginRight:'8px',marginTop:'4px'}} xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 20 20">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>


Address : <span  style={{color:'#808DAD'}}>Patna, Bihar</span> 

</span>



    
   

  </div>
</div>

</div>


    
    </>
  )
}
