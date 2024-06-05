import React,{useEffect} from 'react'
import './project.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Projects() {

  useEffect(() => {
    AOS.init();
    
  }, []);
  return (
   
<>

<p className='container  projectpara' style={{color:'#01D293',fontSize:'1.8rem',marginTop:'3%'}}>---Projects</p>




<div    className='project_section_conatiner container'>
  <div className="row">

<div className="container  project col-md-6 col-sm-6 col-lg-4 mt-1 mt-md-2">



<div  data-aos="flip-up"  data-aos-duration="1000"  class="card mx-auto " style={{width: '22rem'}}>
  <img  className='sr' src="/images/portfolio.png" class="card-img-top" alt="..."/>
  <div   class="card-body" >
    <h5 class="card-title fw-bold" style={{color:'#01d293'}}>Portfolio</h5>
    <p class="card-text">
  <p className='fw-bol' style={{color:'#808DAD'}}>Build portfolio website using</p>

 <div className='project_description'>

  <span >React</span>  <span>AOS</span> <span>Bootstrap5</span>  <span>Emailjs</span> 
 </div>


    </p>
    <a href="https://github.com/nirbhaykr87/Portfolio-website" class="btn btn-primary  mt-1">View Project</a>
  </div>
</div>

   </div>








   <div className="container project col-md-6 col-sm-6  col-lg-4 mt-1 mt-md-2">



<div   data-aos="flip-up"  data-aos-duration="1000" class="card mx-auto " style={{width: '22rem'}}>
  <img  className='sr' src="/images/codeBuddy.png" class="card-img-top" alt="..."/>
  <div class="card-body" >
    <h5 class="card-title fw-bold" style={{color:'#01d293'}}>codeBuddy</h5>
    <p class="card-text">
  <p className='fw-bol' style={{color:'#808DAD'}}>Build codeBuddy using</p>

 <div className='project_description'>

  <span >React</span>  <span>Node</span> <span>Socket.io</span>  <span>Bootstrap5</span> 
 </div>


    </p>
    <a href="https://github.com/nirbhaykr87/codeBuddy" class="btn btn-primary mt-1">View Project</a>
  </div>
</div>

   </div>
























   <div className="container project col-md-6  col-sm-6  col-lg-4  mt-1 mt-md-2">



<div   data-aos="flip-up"  data-aos-duration="1000" class="card mx-auto " style={{width: '22rem'}}>
  <img  className='sr' src="/images/paytm.png" class="card-img-top" alt="..."/>
  <div class="card-body" >
    <h5 class="card-title fw-bold" style={{color:'#01d293'}}>Paytm Clone</h5>
    <p class="card-text">
  <p className='fw-bol' style={{color:'#808DAD'}}>Build Paytm clone using</p>

 <div className='project_description'>

  <span >HTML</span>  <span>CSS</span> <span>Bootstrap5</span>  <span>GSAP</span> 
 </div>


    </p>
    <a href="https://github.com/nirbhaykr87/Paytm_Clone" class="btn btn-primary mt-1">View Project</a>
  </div>
</div>

   </div>


{/* </div> */}


{/* <div className="row mt-5"> */}


   <div className="container project col-md-6  col-sm-6  col-lg-4  mt-1 mt-md-2">




<div   data-aos="flip-up"  data-aos-duration="1000" class="card mx-auto " style={{width: '22rem'}}>
  <img  className='sr' src="/images/flood_management.png" class="card-img-top" alt="..."/>
  <div class="card-body" >
    <h5 class="card-title fw-bold  " style={{color:'#01d293'}}>Flood management system</h5>
    <p class="card-text">
  <p className='fw-bol' style={{color:'#808DAD'}}>Build Flood management system using</p>

 <div className='project_description'>

  <span >HTML</span>  <span>CSS</span><span>MYSQL</span> 
   <span style={{marginLeft:'5px'}}>PHP</span>  <span>JS</span>
 </div>


    </p>
    <a href="https://github.com/nirbhaykr87/Defender" class="btn btn-primary mt-1">View Project</a>
  </div>
</div>

   </div>






   <div className="container project col-md-6  col-sm-6  col-lg-4  mt-1 mt-md-2">




<div   data-aos="flip-up"  data-aos-duration="1000" class="card mx-auto " style={{width: '22rem'}}>
  <img  className='sr' src="/images/pagalpanti.png" class="card-img-top" alt="..."/>
  <div class="card-body" >
    <h5 class="card-title fw-bold  " style={{color:'#01d293'}}>Toy Programming Language</h5>
    <p class="card-text">
  <p className='fw-bol' style={{color:'#808DAD'}}>Build Pagalpanti using</p>

 <div className='project_description'>

  <span >HTML</span>  <span>CSS</span> <span>Bootstrap5</span>  <span>javascript</span> 
  
 </div>


    </p>
    <a href="https://github.com/nirbhaykr87/Pagalpanti" class="btn btn-primary mt-1">View Project</a>
  </div>
</div>

   </div>



































   <div className="container project col-md-6 col-sm-6 col-lg-4 mt-1 mt-md-2 ">



<div   data-aos="flip-up"  data-aos-duration="1000" class="card mx-auto" style={{width: '22rem'}}>
  <img  className='sr' src="/images/food.png" class="card-img-top" alt="..."/>
  <div class="card-body" >
    <h5 class="card-title fw-bold" style={{color:'#01d293'}}>Food delivery website clone</h5>
    <p class="card-text">
  <p className='fw-bol' style={{color:'#808DAD'}}>Build food delivery website clone using</p>

 <div className='project_description'>

  <span >HTML</span>  <span>CSS</span> <span>Bootstrap5</span>  
 </div>


    </p>
    <a href="https://github.com/nirbhaykr87" class="btn btn-primary mt-1">View Project</a>
  </div>
</div>

   </div>
  
</div>

</div>
</>




  )
}
