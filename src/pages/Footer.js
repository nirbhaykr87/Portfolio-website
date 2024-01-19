import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom';


export default function Footer() {
  return (
   <>

<div className="container-fluid footer  ">

<div className="row  ">

<div className=' text-center mt-5  svglogo '>
<a className='mx-2' href="https://www.facebook.com/profile.php?id=100009032383452" target='_blank'>
<svg style={{fill:'white'}} xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>

</a>

{/* insta logo */}



<a className='mx-2' href="https://www.instagram.com/_nirbhaykr/" target='_blank'>

<svg style={{fill:'white'}} xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512"><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg>




</a>



{/* twitter logo */}




<a className='mx-2' href="https://twitter.com/_nirbhaykr" target='_blank'>


<svg style={{fill:'white'}} xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>


</a>


{/* //google logo */}


<a className='mx-2' href="mailto:nirbhaysawan8757@gmail.com?&subject=Regarding work">
<svg  style={{fill:'white'}} xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M256 8C119.1 8 8 119.1 8 256S119.1 504 256 504 504 392.9 504 256 392.9 8 256 8zM185.3 380a124 124 0 0 1 0-248c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1S142.3 334 185.3 334c32.6 0 64.9-19.1 70.1-53.3H185.3V238.1H302.2a109.2 109.2 0 0 1 1.9 20.7c0 70.8-47.5 121.2-118.8 121.2zM415.5 273.8v35.5H380V273.8H344.5V238.3H380V202.8h35.5v35.5h35.2v35.5z"/></svg>

</a>



</div>


</div>


{/* 2nd row */}

<div className="row  " >

  <div className='text-center mt-3  footerNav '>


<NavLink style={{color:'#808DAD',textDecoration:'none'}} className="fw-bold mx-3 navhover" to="/" >
                   
                   Home
                </NavLink>
<NavLink  style={{color:'#808DAD',textDecoration:'none'}} className="fw-bold mx-3" to="/about" >
                   
                   About
                </NavLink>
<NavLink  style={{color:'#808DAD',textDecoration:'none'}} className="fw-bold mx-3" to="/projects" >
                   
                   Project
                </NavLink>
<NavLink  style={{color:'#808DAD',textDecoration:'none'}} className="fw-bold mx-3" to="/resume" >
                   
                   Resume
                </NavLink>
<NavLink  style={{color:'#808DAD',textDecoration:'none'}} className="fw-bold mx-3" to="/contact" >
                   
                   Contact
                </NavLink>

</div>
</div>

<div className="row text-center mt-4 pb-2">
  <div style={{color:'#808DAD',fontSize:'12px'}}>
  © Copyright 2024 - Developed by Nirbhay Kumar. All right reserved.
  </div>
</div>




</div>





   </>
  )
}
