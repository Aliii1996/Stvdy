import React from 'react'
import {Carousel} from 'react-bootstrap'
import './About.css'
import './style.css'
import {FaLongArrowAltRight} from 'react-icons/fa'
import imgg from './report.png'
import icon1 from '../../assets/Icon simple-boo.png'
import icon2 from '../../assets/Icon awesome-bo.png'
import icon3 from '../../assets/Icon material-h.png'
import icon4 from '../../assets/Tracé 2.png'
import nopath from '../../assets/NoPath.png'
import { Button } from 'react-bootstrap'
function About() {
  return (
    <>
    <section className='mt-5 about'>

        
        <div className='container'>
            <div className='row'>
                <div className='about-content  col-lg-5'>
                    <h1 className=' hhh font-weight-bold mb-3'>
                    The best business <br />
                    solution for you
                    </h1>
                    <p className='text-black-50 mb-4'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                     
                    </p>
                    <h6 className='to-learn'>
                    Learn About Our Success
                    <FaLongArrowAltRight className='ml-5'/>
                    </h6>
                </div>
                <div className='icons-about col-lg-7'>
                    <div className='row'>
                    <div className='col-lg-6'>
                        <div className='card-about mb-5'>
                            <div className='icon-about icon1 d-flex justify-content-center align-items-center'>
                                <img className='ico-img ' src={icon1} alt="" />
                            </div>
                        
                    <h3 className='mt-3 line'>
                    Scale Your Activity
                    </h3>
                    <p className='text-black-50 mt-4'>
                    Lorem ipsum dolor sit amet <br />, consetetur sadipscing elitr,
                     sed diam <br /> nonumy eirmod tempor invidunt ut labore
                    </p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='card-about mb-5 '>
                            <div className='icon-about icon2 d-flex justify-content-center align-items-center'>
                            <img className='ico-img ' src={icon2} alt="" />
                            </div>
                        
                    <h3 className='mt-3 line'>
                    Bootcamps
                    </h3>
                    <p className='text-black-50 mt-4'>
                    Lorem ipsum dolor sit amet <br />, consetetur sadipscing elitr,
                     sed diam <br /> nonumy eirmod tempor invidunt ut labore
                    </p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='card-about mb-5 '>
                            <div className='icon-about icon3 d-flex justify-content-center align-items-center'>
                            <img className='ico-img ' src={icon3} alt="" />
                            </div>
                        
                    <h3 className='mt-3 line'>
                    Hight Quality
                    </h3>
                    <p className='text-black-50 mt-4'>
                    Lorem ipsum dolor sit amet <br />, consetetur sadipscing elitr,
                     sed diam <br /> nonumy eirmod tempor invidunt ut labore
                    </p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='card-about mb-5'>
                            <div className='icon-about icon4 d-flex justify-content-center align-items-center'>
                            <img className='ico-img ' src={icon4} alt="" />
                            </div>
                        
                    <h3 className='mt-3 line'>
                    Get Certifcation
                    </h3>
                    <p className='text-black-50 mt-4'>
                    Lorem ipsum dolor sit amet <br />, consetetur sadipscing elitr,
                     sed diam <br /> nonumy eirmod tempor invidunt ut labore
                    </p>
                        </div>
                    </div>
                    
               
                    </div>
                        

                </div>
            </div>
            <div className='row'>
                <div className='col-lg-'>
                </div>    
            </div>
        </div>
    
        <div className="container sec2">
        <div className="section-text">
          <div className="" />
          <h2 className='hhh' >Best Platform for the Technological Era</h2>
          <p className="text-gray">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
          <a href className="read-more">Learn About Our Success<img src="img/arrow-alt-right.svg" alt="" /></a>
        </div>
        <div className="sec2-img-bg">
          <img className="imgg" src={imgg} alt="" />
        </div>
        <div><img className="rec" src="./img/Rectangle 9.png" alt="" /></div>
      </div>


        <div className='middle-text pt-5 mt-5'>
            <div>
                <h3>
                    
                </h3>
                <h1>
            Platform Overview
            </h1>
            <p className='text-black-50'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br />
             sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam <br /> erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
 Stet clita kasd gubergren,  ipsum dolor sit amet
            </p>
            </div>
            
        </div>
                













    </section >
    <section className='slider about2  mb-5'>
        <Carousel>
  <Carousel.Item>
    <img
    className='img-slider mb-5'
      src={nopath}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
    className='img-slider mb-5'
    src={nopath}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className='img-slider mb-5'
      src={nopath}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
    </Carousel>

     <section className='about22'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className="left-text ">
                        <h1 className='hhh' style={{fontWeight : "900"}}>
                        Best Platform for the <br />
                            Technological Era
                        </h1>
                        <p className='text-black-50'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br />
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum <br /> dolor sit amet
                        </p>

                        <h6 className='to-learn'>
                    Learn About Our Success
                    <FaLongArrowAltRight className='ml-5'/>
                    </h6>

                    </div>                    
                </div>
                <div className="col-lg-6">
                        <img className='right-img' src={nopath} alt="" />
                    </div>

            </div>

          

             <div className='row mt-5 reserch-part'>
            <div className='col-lg-6'>
                    <div className="left-text1">
                        <h1 className='title1'>
                        Acceleration Process to <br />
                        Grow Your Business
                        </h1>
                        <p className='text-black-50'>
                         consetetur sadipscing elitr, sed diam <br />  bore et  magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br />
                        Stet clita kasd gubergren, no sea  sanctus est Lorem ipsum <br /> 
                        </p>
                        <Button className='about_us'>About Us</Button>

                    </div>                    
               
             </div>
             <div className=' col-lg-6'>
                <div className='row group-parts '>
                    <div className='col-lg-12 research'>
                    <span className='circle mr-4'>
                        1   
                 </span>

                 <div>
                    <h5>
                 Market Research
                 </h5>
                 <p className='text-black-50'>
                 Lorem ipsum dolor sit amet,  <br /> eirmod tempor invidunt ut labore et dolore <br /> magna aliquyam erat, sed diam voluptua.
                 </p>
                 
                 </div>
                    </div>
                    <div className='col-lg-12 research'>
                    <span className='circle mr-4'>
                        1   
                 </span>

                 <div>
                    <h5>
                 Market Research
                 </h5>
                 <p className='text-black-50'>
                 Lorem ipsum dolor sit amet,  <br /> eirmod tempor invidunt ut labore et dolore <br /> magna aliquyam erat, sed diam voluptua.
                 </p>
                 
                 </div>
                    </div>
                    <div className='col-lg-12 research'>
                    <span className='circle no mr-4'>
                        1   
                 </span>

                 <div>
                    <h5>
                 Market Research
                 </h5>
                 <p className='text-black-50'>
                 Lorem ipsum dolor sit amet,  <br /> eirmod tempor invidunt ut labore et dolore <br /> magna aliquyam erat, sed diam voluptua.
                 </p>
                 
                 </div>
                    </div>

                </div>
                 
            </div>
             </div>
            

        </div>
    </section>
    </section>

    
    </>
  )
}

export default About