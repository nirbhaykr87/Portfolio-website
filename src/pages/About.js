import React,{useEffect} from 'react'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer'



export default function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (<>
   
<div className="container mt-5">
  <div className="row">

    <div className='boy_image col-md-3  text-center  justify-space-evenly'>

<img    data-aos="fade-right"  data-aos-duration="2000" src="/images/boy.png" alt="boyImage" height="400px" width="auto" />

    </div>
    <div className='about_section pt-5  mb-5 pb-5  col-md-8'>

      <div className=''>
      👋 Hey there! I'm <span className='fw-bold'>Nirbhay Kumar</span> a B.Tech student and tech enthusiast diving deep into the MERN (MongoDB, Express.js, React.js, Node.js) stack. Passionate about transforming ideas into dynamic web experiences, I'm on a mission to explore the limitless possibilities of web development. <br /> <br />

📚 Currently on my B.Tech journey, I'm fueled by a relentless curiosity to learn and grow. From tackling coding challenges to staying on the pulse of tech trends, I thrive in the ever-evolving digital landscape.  <br /> <br />

🌐 Join me as I navigate the exciting intersection of technology and creativity, weaving lines of code into meaningful digital solutions. Let's push boundaries and build something extraordinary together!
      </div>



    </div>
  </div>
</div>


    
    </>
  )
}
