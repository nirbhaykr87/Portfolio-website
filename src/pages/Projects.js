import React,{useEffect} from 'react'
import './project.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer'


export default function Projects() {

  useEffect(() => {
    AOS.init();
    
  }, []);
  return (
   
<>

<p className='container  projectpara' style={{color:'#01D293',fontSize:'1.8rem',marginTop:'3%'}}>---Projects</p>




<div    className='project_section_conatiner'>

<div className="container project">



<div  data-aos="flip-up"  data-aos-duration="1000"  class="card mx-auto" style={{width: '24rem'}}>
  <img  className='sr' src="/images/portfolio.png" class="card-img-top" alt="..."/>
  <div   class="card-body" >
    <h5 class="card-title fw-bold" style={{color:'#01d293'}}>Portfolio</h5>
    <p class="card-text">
  <p className='fw-bol' style={{color:'#808DAD'}}>Build portfolio website using</p>

 <div className='project_description'>

  <span >React</span>  <span>AOS</span> <span>Bootstrap</span>  <span>Emailjs</span> <span>CSS</span>
 </div>


    </p>
    <a href="https://github.com/nirbhaykr87" class="btn btn-primary mt-1">View Project</a>
  </div>
</div>

   </div>





   <div className="container project">



<div   data-aos="flip-up"  data-aos-duration="1000" class="card mx-auto" style={{width: '24rem'}}>
  <img  className='sr' src="/images/paytm.png" class="card-img-top" alt="..."/>
  <div class="card-body" >
    <h5 class="card-title fw-bold" style={{color:'#01d293'}}>Paytm Clone</h5>
    <p class="card-text">
  <p className='fw-bol' style={{color:'#808DAD'}}>Build Paytm clone using</p>

 <div className='project_description'>

  <span >HTML</span>  <span>CSS</span> <span>Bootstrap</span>  <span>GSAP</span> 
 </div>


    </p>
    <a href="https://github.com/nirbhaykr87" class="btn btn-primary mt-1">View Project</a>
  </div>
</div>

   </div>





   <div className="container project">



<div   data-aos="flip-up"  data-aos-duration="1000" class="card mx-auto" style={{width: '24rem'}}>
  <img  className='sr' src="/images/flood_management.png" class="card-img-top" alt="..."/>
  <div class="card-body" >
    <h5 class="card-title fw-bold  " style={{color:'#01d293'}}>Flood management system</h5>
    <p class="card-text">
  <p className='fw-bol' style={{color:'#808DAD'}}>Build Flood management system using</p>

 <div className='project_description'>

  <span >HTML</span>  <span>CSS</span> <span>Bootstrap</span>  <span>MYSQL</span> 
   <span style={{marginLeft:'5px'}}>PHP</span>  <span>JS</span>
 </div>


    </p>
    <a href="https://github.com/nirbhaykr87" class="btn btn-primary mt-1">View Project</a>
  </div>
</div>

   </div>










   <div className="container project">



<div   data-aos="flip-up"  data-aos-duration="1000" class="card mx-auto" style={{width: '24rem'}}>
  <img  className='sr' src="/images/food.png" class="card-img-top" alt="..."/>
  <div class="card-body" >
    <h5 class="card-title fw-bold" style={{color:'#01d293'}}>Food delivery website clone</h5>
    <p class="card-text">
  <p className='fw-bol' style={{color:'#808DAD'}}>Build food delivery website clone using</p>

 <div className='project_description'>

  <span >HTML</span>  <span>CSS</span> <span>Bootstrap</span>  
 </div>


    </p>
    <a href="https://github.com/nirbhaykr87" class="btn btn-primary mt-1">View Project</a>
  </div>
</div>

   </div>
  

</div>



</>




  )
}
