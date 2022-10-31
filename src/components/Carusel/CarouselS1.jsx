import React from 'react'

const CarouselS1 = () => {
    return (
    
        <div >
        <div id="carouselExampleIndicators" className="carousel slide  carousel-fade carru" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button> */}
            </div>
                <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/Salon1/1.png" className="d-xl-block carruS1 rounded float-start" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/Salon1/12.png" className="d-xl-block carruS1  rounded float-start" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="../images/Salon1/3.png" className="d-xl-block carruS1 rounded float-start" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="../images/Salon1/4.png" className="d-xl-block carruS1  rounded float-start" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="../images/Salon1/5.png" className="d-xl-block carruS1 rounded float-start" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="../images/Salon1/6.png" className="d-xl-block carruS1 rounded float-start" alt="..."/>
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

export default CarouselS1