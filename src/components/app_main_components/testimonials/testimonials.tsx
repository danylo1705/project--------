import React from 'react';
import './testimonials.scss'
import Carousel from 'react-multi-carousel';

import slider1 from '../../../images/app_main/testimonials/slider1.png'
import slider2 from '../../../images/app_main/testimonials/slider2.png'
import slider3 from '../../../images/app_main/testimonials/slider3.png'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

export default function Testimonials () {
    return (
        <div className="testimonials" id='testimonials'>
        <h2>Testimonials</h2>
        <div className="slider">
        <Carousel
          className='testim_slider'
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          autoPlay={false}
          infinite={false}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          centerMode={false}
          
        >
          <div>
            <img src={slider1} alt="" />
            <h2>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts Separated they live."</h2>
            <p>Chiranjit Hazarika - Web Designer</p>
          </div>
           {/* <div>
            <img src={slider2} alt="" />
            <h2>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts Separated they live."</h2>
            <p>Alex White - Lawyer</p>
          </div> */}
         {/* <div>
            <img src={slider3} alt="" />
            <h2>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts Separated they live."</h2>
            <p>John Deb - Manager</p>
          </div> */}

          
        </Carousel>


        </div>
  </div>
    )
}

