import React, { useRef } from 'react';
import Slider from 'react-slick';
import PartnersItem from './PartnersItem';
import 'slick-carousel/slick/slick.scss';
import ArrowLeft from '../../../../images/svg/arrow_left.svg';
import ArrowRight from '../../../../images/svg/arrow_right.svg';

import homepartnersstate from './homepartnersstate';

const PartnersSlider = () => {
  const partnersItems = homepartnersstate;

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        Next
        <ArrowRight />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        Prev
        <ArrowLeft />
      </button>
    );
  }

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    //autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 576,
        settings: { slidesToShow: 2, slidesToScroll: 2, arrows: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 3, arrows: true },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 4, slidesToScroll: 4, arrows: true },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 5, slidesToScroll: 5, arrows: true },
      },
    ],
  };

  const slider = useRef(null);

  return (
    <section className="partners">
      <Slider ref={slider} {...settings}>
        {partnersItems.map((slide) => {
          return (
            <PartnersItem
              key={slide.id}
              imgUrl={slide.imgUrl}
              alt={slide.alt}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default PartnersSlider;
