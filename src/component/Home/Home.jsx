import React from 'react'
import './Home.css'
import Navs from '../Navbar/Navbar'
import homeimg from '../../assets/NoPath.png'
import { Button } from 'react-bootstrap'
import client1 from '../../assets/client-1.png'
import client2 from '../../assets/client-2.png'
import client3 from '../../assets/client-3.png'
import client4 from '../../assets/client-4.png'
import client5 from '../../assets/client-5.png'


function Home() {
  return (

    <>
    
      <section className='home'>
    <Navs/>
    <section className='content_home mt-5'>
        <div className='container'>
            <div className='row'>      
                <div className='col-lg-5 m-auto content-home '>
                    <h3 className='mb-2'>Advanced Platform</h3>
                    <h1>Take your team  <br />
                        to the next level
                    </h1>
                    <p className='mt-4 mb-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod </p>
                    <Button className='content-button'>About Us</Button>
                </div>
                <div className='col-lg-7 img-home '>
                    <img src={homeimg} alt="" />
                </div>
            </div>
            <div>

            </div>
        </div>

    </section>
    </section>


        
    <section className='container'>
      <div class="partners-logo ">
        <img src={client1} alt="" />
        <img src={client2} alt="" />
        <img src={client3} alt="" />
        <img src={client4} alt="" />
        <img src={client5} alt="" />
        
      </div>
    </section>



    </>
    
  

    
    
    
  )
}

export default Home