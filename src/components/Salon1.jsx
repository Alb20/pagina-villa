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
                                    
                                    <img src = "/images/Salon1/11.png"
                                    className = " float-start rounded float-start ima-s1"
                                    alt = "React Bootstrap logo" />
                            
                        </div>
                        <div className="col col-lg-6 col-xxl-6 text center align-self-center">
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt mollitia numquam magnam perferendis quasi veniam praesentium doloribus voluptatibus neque eum tempora dicta dolorum perspiciatis veritatis eveniet, dolorem ad sequi.</p>  
                        </div> 
                    </div>
                <div className='container imgsespS1'>
                    <div className='row'>
                        <div className='col' id='imgs1'>
                            <img src="/images/Salon1/1.png"  className='float-none rounded float-start'  alt="" />
                        </div>
                        <div className='col' id='imgs1'>
                            <img src="/images/Salon1/2.png"  className='float-none rounded float-start'  alt="" />
                        </div>
                        <div className='col' id='imgs1'>
                            <img src="/images/Salon1/3.png"  className='float-none rounded float-start'  alt="" />
                        </div>
                        <div className='col' id='imgs1'>
                            <img src="/images/Salon1/4.png"  className='float-none rounded float-start'  alt="" />
                        </div>
                    </div>
                </div>  
                </div>
                
        </section>
            <div className="d-grid gap-2 col-6 mx-auto imgsespS1 ">
                <Link to='/paquetesS1'>
                    <button className="btn btn-primary text-button" type="button"  > Paquetes </button>
                </Link>
            </div>
        <Footer/>
    </div>
    )
}

export default salon1