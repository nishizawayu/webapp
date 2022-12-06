import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideImg1 from './img/s_01.jpg';
import slideImg2 from './img/s_02.jpg';
import slideImg3 from './img/s_03.jpg';

function Slider(){
    return (
    <Carousel>
      <div>
       <img src={slideImg1} alt="" />
       <p className="legend">テキスト</p>
      </div>
      <div>
       <img src={slideImg2} alt="" />
       <p className="legend">テキスト</p>
      </div>
      <div>
       <img src={slideImg3} alt="" />
       <p className="legend">テキスト</p>
      </div>
    </Carousel>)
    }
    export default Slider;