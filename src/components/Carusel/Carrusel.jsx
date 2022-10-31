import React from 'react'
// import '../App.css'

const Carrusel = () => {
    return (
 
        <div >
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade carru " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                    <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./images/Index/10.png" className="d-xl-block caruIndex rounded float-start" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="./images/Index/9.png" className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="../images/Index/8.png" className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="../images/Index/7.png" className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                            </div>
                    </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
  
    )
}

export default Carrusel