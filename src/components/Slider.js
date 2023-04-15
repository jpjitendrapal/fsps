import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div className="carousel-ct">
      <Carousel
        autoPlay={false}
        infiniteLoop={false}
        showIndicators={true}
        showThumbs={false}
      >
        <div>
          <img src="./images/banner1.jpeg" alt="banner1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="./images/banner2.jpeg" alt="banner2" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="./images/school1.jpeg" alt="banner2" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="./images/school2.jpeg" alt="banner2" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="./images/banner3_1.jpeg" alt="banner2" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
