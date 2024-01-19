import React from 'react'
import './error.css'

export default function Error() {

  return (
 <>
 
 <img className='img-fluid align-center mx-auto d-block' src="images/error.png" alt="error_404"  />

 <div className="container errorStyle text-center mt-1">

  <h3 className='fw-bold' style={{marginTop:'-100px'}}>Oops! page  not found</h3>
  
 </div>
 </>
  )
}
