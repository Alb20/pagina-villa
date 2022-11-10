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
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>
                    <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./images/images/S1.1.png" className="d-xl-block caruIndex rounded float-start" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="./images/images/S1.2.png" className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="./images/images/S1.8.png" className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="./images/images/S1.9.png" className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="./images/images/S1.10.png" className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="./images/images/S1.12.png" className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="./images/images/S2.2.png" className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="./images/images/S2.1.png" className="d-xl-block caruIndex  rounded float-start" alt="..."/>
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