// import React, { Component } from 'react'
import Carrusel from './Carusel/Carrusel'
import Footer from './Footer/Footer'
import { Link } from 'react-router-dom'
import Contenido from './Contenido/Contenido'

const index = () =>  {
    
        return ( 
        <div> 
            <Carrusel/>
            <section>
                <div className="container">
                    <div className="row">
                        <div className=" col col-sm-6  col-md-6  col-lg-6  col-xxl-6">
                            <Link to = '/salon1' className=' d-flex aling-items-center justify-content-center'>
                                    <img src = "/images/images/S1.2.png"
                                    className = " float-start rounded float-start ima-s1"
                                    alt = "React Bootstrap logo" />
                            </Link>
                            <p className='text-center imgsespS1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt mollitia numquam magnam perferendis quasi veniam praesentium doloribus voluptatibus neque eum tempora dicta dolorum perspiciatis veritatis eveniet, dolorem ad sequi.</p>
                            <Link to='/salon1'>
                            <button className='btn btn-primary text-button imgsespS1 '  > Conocer mas </button>
                            </Link>
                        </div>
                        <div className=" col col-sm-6 col-md-6  col-lg-6  col-xxl-6">
                            <Link to = '/salon2'>
                                    <img src = "/images/images/S2.2.png"
                                    className = "float-none rounded float-start  ima-s2"
                                    alt = "React Bootstrap logo" />
                            </Link>
                            <p className='text-center imgsespS1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt mollitia numquam magnam perferendis quasi veniam praesentium doloribus voluptatibus neque eum tempora dicta dolorum perspiciatis veritatis eveniet, dolorem ad sequi.</p>
                            <Link to='/salon2'> 
                            <button className='btn btn-primary text-button imgsespS1 ' > Conocer mas </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className=' col ' id='imgs' >
                            <img src="/images/images/S1.5.png"  className='float-none rounded float-start'  alt="" />
                        </div>
                        <div className=' col ' id='imgs'  >
                            <img src="/images/images/S1.8.png"  className='float-none rounded float-start'  alt="" />
                        </div>
                        <div className=' col ' id='imgs' >
                            <img src="/images/images/S1.9.png"  className='float-none rounded float-start'  alt="" />
                        </div>
                        <div className='col' id='imgs'>
                            <img src="/images/images/S1.12.png"  className='float-none rounded float-start'  alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Contenido/>
                
            <Footer />
        </div>
)}

export default index