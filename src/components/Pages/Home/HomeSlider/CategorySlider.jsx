import React, { useRef } from 'react';
import Slider from 'react-slick';
import HomeSliderSlide from './HomeSliderSlide';
import 'slick-carousel/slick/slick.scss';
import ArrowLeft from '../../../../images/svg/arrow_left.svg';
import ArrowRight from '../../../../images/svg/arrow_right.svg';
import useLanguage from '../../../Hooks/useLanguage';

const CategorySlider = ({ dataSlider }) => {
  const langToggle = useLanguage;

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
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    //autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 576,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
    ],
  };

  const slider = useRef(null);

  return (
    <Slider ref={slider} {...settings}>
      {dataSlider.nodes.map((slide, index) => {
        return (
          <HomeSliderSlide
            title={langToggle(
              slide.titolo_en,
              slide.titolo_bg,
              slide.titolo_ge,
              slide.titolo_it
            )}
            slug={slide.slug}
            img={slide.image}
            key={index}
          />
        );
      })}
    </Slider>
  );
};

export default CategorySlider;
