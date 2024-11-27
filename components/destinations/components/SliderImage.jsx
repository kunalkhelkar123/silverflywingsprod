import React from "react";
const CarouselComponent = () => {
  return (
    <div id="carouselExampleGeneric" className="" data-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleGeneric" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleGeneric" data-slide-to="1"></li>
        <li data-target="#carouselExampleGeneric" data-slide-to="2"></li>
      </ol>

      {/* Wrapper for slides */}
      <div className="w-100" role="listbox">
        <div className="carousel-item active">
          <img src="https://tap.kesariselect.in/public/cms/timelineslider/1729676429.webp?w=1024" alt="First slide" />
          <div className="carousel-caption">
            <h3>First Slide</h3>
            <p>Description for the first slide</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400" alt="Second slide" />
          <div className="carousel-caption">
            <h3>Second Slide</h3>
            <p>Description for the second slide</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400" alt="Third slide" />
          <div className="carousel-caption">
            <h3>Third Slide</h3>
            <p>Description for the third slide</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <a className="carousel-control-prev" href="#carouselExampleGeneric" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleGeneric" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

    // <div>
    //   {/* Using Bootstrap's img-fluid */}
    //   <img
    //     src="https://tap.kesariselect.in/public/cms/timelineslider/1729676429.webp?w=1024" // Replace with your image URL
    //     alt="Full width"
    //     className="img-fluid"
    //     style={{ width: "100vw" }} // Optional for ensuring full width
    //   />
    // </div>

    
  );
};

export default CarouselComponent;
