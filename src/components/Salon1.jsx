import React from 'react'
import CarouselS1 from './Carusel/CarouselS1'
import Footer from './Footer/Footer'
import { Link } from 'react-router-dom'
const salon1 = () => {
  return (
    <div>
      <CarouselS1/>
      <section>
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-xxl-6">
                            <Link to = '/salon1' className=' d-flex aling-items-center justify-content-center'>
                                    <img src = "/images/Salon1/11.png"
                                    className = " float-start rounded float-start ima-s1"
                                    alt = "React Bootstrap logo" />
                            </Link>
                            
                        </div>
                        <div className="col col-lg-6 col-xxl-6 text center align-self-center">
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt mollitia numquam magnam perferendis quasi veniam praesentium doloribus voluptatibus neque eum tempora dicta dolorum perspiciatis veritatis eveniet, dolorem ad sequi.</p>  
                        </div> 
                    </div>
                </div>  
      </section>
      <section>
      <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <img src="/images/Salon1/1.png"  className='float-none rounded float-start' width='200' height="180"  alt="" />
                        </div>
                        <div className='col'>
                            <img src="/images/Salon1/2.png"  className='float-none rounded float-start' width='200' height="180"  alt="" />
                        </div>
                        <div className='col'>
                            <img src="/images/Salon1/3.png"  className='float-none rounded float-start' width='200' height="180"  alt="" />
                        </div>
                        <div className='col'>
                            <img src="/images/Salon1/4.png"  className='float-none rounded float-start' width='200' height="180"  alt="" />
                        </div>
                    </div>
                </div>
      </section>
      <Footer/>
    </div>
  )
}

export default salon1