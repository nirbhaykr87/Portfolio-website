import React,{useEffect} from 'react'
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './Projects';
import Footer from './Footer'



export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <div className="contain">
    <div className="container  " style={{marginTop:'8%'}}>

<div className="row items">


<div className='intro col-md-6'>
<h4 style={{color:'#01d293'}}>--- Hello</h4>
<h2>I'm Nirbhay Kumar</h2>
<p style={{color:'#808DAD'}}>MERN Stack Learner</p>
<p  className='' style={{color:'#808DAD'}}>Hi there! My name is Nirbhay Kumar and i'm a third-year B.Tech IT student diving into the MERN stack. Passionate about tech   and   coding, I showcase my projects and share my journey in the IT world. Let's connect and code together! </p>


<a className='fw-bold   ' style={{color:'white',textDecoration:'none',fontSize:'1.2rem'}} href="https://www.linkedin.com/in/nirbhaykrmuj">

<button class="connectBtn mt-4 fw-bold">Let's connect 😀</button> 

   </a>
</div>



<div  data-aos="zoom-in" data-aos-duration="2000"
    
        className='home_image text-center col-md-6'>

  <img src="/images/profile.jpg" alt=""  className=''  height="350px" width="350px" style={{borderRadius:'50%',objectFit:'cover'}}/>
</div>


</div>
 </div>
 </div>



 {/* what i know Section */}



 <div className="container mt-5  what_i_know">

 <h4 style={{color:'#01d293'}}>--- What I know</h4>



 <div className="row mt-4">

<div className='col-md-1    col-sm-2 col-2'>  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="45px" height="auto" />
</div>
<div className='col-md-1 col-sm-2  col-2'>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="45px" height="auto" />
</div>
<div className='col-md-1 col-sm-2 col-2'>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40px" height="auto" />

</div>
<div className='col-md-1 col-sm-2 col-2'>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40px" height="auto"/>
</div>
<div className='col-md-1 col-sm-2 col-2'>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  width="40px" height="auto" />
</div>
<div className='col-md-1 col-sm-2 col-2'>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="48px" height="auto" />
</div>
<div className='col-md-1 col-sm-2 col-2'>
       
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" width="50px" height="auto"/>
</div>
<div className='col-md-1 col-sm-2 col-2'>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"  width="58px" height="auto"/>
</div>
<div className='col-md-1 col-sm-2 col-2'>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" width="58px" height="auto" />
</div>
<div className='col-md-1 col-sm-2 col-2'>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
  width="52px" height="auto" />


  
</div>
<div className='col-md-1 col-sm-2 col-2'>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
  width="62px" height="auto" />


          
</div>

 </div>


 </div>


 <Projects/>


   {/* education */}
   <div className="container heading mt-5 " style={{}}>

   <h4 className='' style={{color:'#01d293'}}>--- Education</h4>

   </div>


 <div className='container higher_education mt-5 mb-5' style={{margin:'%'}}>


<div className="row  pb-4">


<div className='col-md-5 mx-md-auto text-center'>

<img data-aos="zoom-in-right"   data-aos-duration="1000"  className='mt-5' src="/images/muj.png" alt="muj_logo"  width="300px" style={{
  filter: 'grayscale(100%) brightness(0) invert(1)'}
}
  />

</div>


<div className='col-md-5 mt-4 mx-md-auto '>
  <p  className="fw-bold mb-4" style={{color:'#01D293',fontSize:'19px',textDecoration:'underline',textDecorationColor:'#808DAD68'}}>Higher Education Details</p>

  <svg   style={{fill:'#808DAD '}} xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
 <span className='mx-2'> Institute :</span> <span className='' style={{color:'#808DAD'}}>Manipal University Jaipur</span>

 <br />

 <svg style={{fill:'#808DAD '}} xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/></svg>
 <span className='mx-2'> Course :</span> <span className='' style={{color:'#808DAD'}}>B.Tech [ Information Technology ]</span>

 <br />


 <svg style={{fill:'#808DAD '}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-day-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16zm-4.785-6.145a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43c0 .238.192.425.43.425m.336.563h-.672v4.105h.672zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a2 2 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98z"/>
</svg>
<span className='mx-2'> Completed :</span> <span className='' style={{color:'#808DAD'}}>Currently Pursuing</span>

<br />

<svg  style={{fill:'#808DAD '}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
</svg>
<span className='mx-2'> Current CGPA :</span> <span className='' style={{color:'#808DAD'}}>9.05</span> <br />


<svg  style={{fill:'#808DAD '}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
<span className='mx-2'> Location :</span> <span className='' style={{color:'#808DAD'}}>Jaipur, Rajasthan</span>





</div>

</div>











<div className="row  pb-4">


<div className='col-md-5 mx-md-auto text-center'>

<img  data-aos="zoom-in-right"   data-aos-duration="1000"  className='mt-5 ' src="/images/holymission.png" alt="muj_logo"  width="200px"
  />

</div>


<div className='col-md-5 mt-4 mx-md-auto '>
  <p  className="fw-bold mb-4" style={{color:'#01D293',fontSize:'19px',textDecoration:'underline',textDecorationColor:'#808DAD68'}}>Higher Secondary Education Details</p>

  <svg   style={{fill:'#808DAD '}} xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
 <span className='mx-2'> Institute :</span> <span className='' style={{color:'#808DAD'}}>Holy Mission SR SEC School</span>

 <br />

 <svg style={{fill:'#808DAD '}} xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/></svg>
 <span className='mx-2'> Stream :</span> <span className='' style={{color:'#808DAD'}}>Science</span>

 <br />


 <svg style={{fill:'#808DAD '}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-day-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16zm-4.785-6.145a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43c0 .238.192.425.43.425m.336.563h-.672v4.105h.672zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a2 2 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98z"/>
</svg>
<span className='mx-2'> Completed :</span> <span className='' style={{color:'#808DAD'}}>2020</span>

<br />

<svg  style={{fill:'#808DAD '}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
</svg>
<span className='mx-2'> Percentage :</span> <span className='' style={{color:'#808DAD'}}>71.8</span> <br />


<svg  style={{fill:'#808DAD '}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
<span className='mx-2'> Location :</span> <span className='' style={{color:'#808DAD'}}>Patna, Bihar</span>





</div>

</div>















<div className="row lastrow pb-4">


<div className='col-md-5 mx-md-auto text-center'>

<img data-aos="zoom-in-right"   data-aos-duration="1000"  className='mt-5' src="/images/baldwin.png" alt="muj_logo"  width="100px" 
  />

</div>


<div className='col-md-5 mt-4 mx-md-auto '>
  <p  className="fw-bold mb-4" style={{color:'#01D293',fontSize:'19px',textDecoration:'underline',textDecorationColor:'#808DAD68'}}>Matriculation Education Details</p>

  <svg   style={{fill:'#808DAD '}} xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
 <span className='mx-2'> Institute :</span> <span className='' style={{color:'#808DAD'}}>Baldwin Academy</span>

 <br />

 <svg style={{fill:'#808DAD '}} xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/></svg>
 <span className='mx-2  '> Course :</span> <span className='' style={{color:'#808DAD'}}>Matriculation</span>

 <br />


 <svg style={{fill:'#808DAD '}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-day-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16zm-4.785-6.145a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43c0 .238.192.425.43.425m.336.563h-.672v4.105h.672zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a2 2 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98z"/>
</svg>
<span className='mx-2'> Completed :</span> <span className='' style={{color:'#808DAD'}}>2018</span>

<br />

<svg  style={{fill:'#808DAD '}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
</svg>
<span className='mx-2'> Percentage :</span> <span className='' style={{color:'#808DAD'}}>80.2</span> <br />


<svg  style={{fill:'#808DAD '}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
<span className='mx-2'> Location :</span> <span className='' style={{color:'#808DAD'}}>Patna, Bihar</span>





</div>

</div>











 </div>



  

          
          
         
         
          
          
          
          
          
          



 


    
    
    
    
    
    
    
    
  
    
    </>
  )
}
