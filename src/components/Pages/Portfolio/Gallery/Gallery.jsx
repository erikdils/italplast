import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import ArrowLeft from "../../Ui/Svg/arrow_left.svg";
import ArrowRight from "../../Ui/Svg/arrow_right.svg";
import GalleryFilter from "./GalleryFilter";

const Gallery = ({ images, dataFilter }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const [filterActive, setFilterActive] = useState(null);
  const [filter, setFilter] = useState(images);

  function onSelectFilter(index) {
    setFilterActive(index);
  }

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp, false);

    return () => {
      window.removeEventListener("keyup", handleKeyUp, false);
    };
  });

  function handleClick(e, index) {
    e.preventDefault();
    setShowLightbox(!showLightbox);
    setSelectedImage(index);
  }

  function closeModal() {
    setShowLightbox(false);
    setSelectedImage(0);
  }

  function goBack() {
    setSelectedImage(selectedImage - 1);
  }

  function goForward() {
    setSelectedImage(selectedImage + 1);
  }

  function handleKeyUp(e) {
    e.preventDefault();
    const { keyCode } = e;
    if (showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (selectedImage > 0) {
          setSelectedImage(selectedImage - 1);
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (selectedImage < images.length - 1) {
          setSelectedImage(selectedImage + 1);
        }
      }
      if (keyCode === 27) {
        // Escape key
        setShowLightbox(false);
      }
    }
  }

  return (
    <>
      <GalleryFilter
        dataFilter={dataFilter}
        onSelectFilter={onSelectFilter}
        filterActive={filterActive}
        setFilter={setFilter}
        setFilterActive={setFilterActive}
        images={images}
      />

      <div className="portfolio-items">
        {filter.map((img, i) => (
          <div className="portfolio-item" key={i}>
            <a
              href={img.Image.childImageSharp.fluid.src}
              alt="Alt"
              onClick={e => handleClick(e, i)}
            >
              <StyledImg fluid={img.Image.childImageSharp.fluid} />
            </a>
          </div>
        ))}
      </div>

      <LightboxModal visible={showLightbox} onKeyUp={e => handleKeyUp(e)}>
        <div
          className="modal-overlay"
          role="presentation"
          onClick={closeModal}
        ></div>
        <div className="light-box-content">
          <Img fluid={filter[selectedImage].Image.childImageSharp.fluid} />
          <button className="light-box-close" onClick={closeModal}>
            X
          </button>
          <button
            className="light-box-arrow light-box__prev"
            onClick={goBack}
            disabled={selectedImage === 0}
          >
            Prev
            <ArrowLeft />
          </button>
          <button
            className="light-box-arrow light-box__next"
            onClick={goForward}
            disabled={selectedImage === filter.length - 1}
          >
            Next
            <ArrowRight />
          </button>
        </div>
      </LightboxModal>
    </>
  );
};

Gallery.propTypes = {
  images: PropTypes.array,
};

const StyledImg = styled(Img)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%; // or whatever
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
  }
`;

const LightboxModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.visible ? "1" : "0")};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  z-index: 1000;
`;

export default Gallery;
