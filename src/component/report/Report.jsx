import React from 'react'
import './Rebort.css'
import girl from '../../assets/shutterstock_45.png'
import star from '../../assets/Icon metro-star.png'
import { Button } from 'react-bootstrap'


function Report() {
  return (
   <>
   <section className='report'>
      <div className=' text-center'>
        <h1 className='head'>
        Don't Just Take <br />
        our Word for it!
        </h1>
      </div>

      <div className='container'>
        <div className='row text-center '>
            <div className='col-sm-12 col-md-6 col-lg-3'>
            <h3 className='font-weight-bold number'>
              570
            </h3>
            <p>
              Download
            </p>
            </div>
            <div className='col-md-6 col-lg-3'>
            <h3 className='font-weight-bold number'>
              570
            </h3>
            <p>
            Active User
            </p>
            </div>
            <div className='col-md-6 col-lg-3'>
            <h3 className='font-weight-bold number'>
              570
            </h3>
            <p>
            Positive Feedback
            </p>
            </div>
            <div className='col-md-6 col-lg-3'>
            <h3 className='font-weight-bold number'>
              570
            </h3>
            <p>
            + Rating
            </p>
            </div>
            </div>


          <div className='row'>

<div className='col-lg-6 col-md-12 '>   
            <div className='row mt-5 cardd'>
            <div className='mr-5'>
                  <img className='Girl-img' src={girl} alt="" />
                  </div>
                  <div>
                  <h5 className='text-black-50'>
                Florrie Jacobs
                </h5>
                <p className='text-black-50'>
                Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore <br /> et dolore magna aliquyam erat
                </p>
                <img className='star-img mr-2' src={star} alt="" />
                <img className='star-img mr-2' src={star} alt="" />
                <img className='star-img mr-2' src={star} alt="" />
                <img className='star-img mr-2' src={star} alt="" />
                <img className='star-img mr-2' src={star} alt="" />
                  </div>
            </div> 
                
                
                
            </div>
            <div className='col-lg-6 col-md-12 pl-5 text-rightt mt-5
            
            '>    
                <h1 className='Headd'>
                Grow Your Business and <br />
                Join Our Happy Users
                </h1>
                <p className='text-black-50'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br /> sed diam nonumy eirmod tempor invidunt ut <br /> labore et dolore magna aliquyam erat, sed <br /> diam voluptua. At vero eos et accusam  <br /> et justo duo dolores et ea rebum.
              
                </p>
                <Button style={{paddingLeft:'40px' , paddingRight:'40px' }} className='about_us'>About Us</Button>
            </div>


          </div>
            
        </div>
      
   </section>
   </>
  )
}

export default Report