import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//@ts-ignore
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import p1 from "../../../assets/images/p1.png"
import p2 from "../../../assets/images/p2.png"
import p3 from "../../../assets/images/p3.png"
import p4 from "../../../assets/images/p4.png"
import p5 from "../../../assets/images/p5.png"
import p6 from "../../../assets/images/p6.png"
import p7 from "../../../assets/images/p7.png"

export const ProductDetailsCarousel = () => {
    return (
        <StyledCarousel className=" mx-auto sticky">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                <img src={p1} alt="" />
                <img src={p2} alt="" />
                <img src={p3} alt="" />
                <img src={p4} alt="" />
                <img src={p5} alt="" />
                <img src={p6} alt="" />
                <img src={p7} alt="" />
            </Carousel>
        </StyledCarousel>
        // <div className="text-white text-[20px] w-full max-w-[1300px] mx-auto sticky top-[50px]">
        //     <Carousel
        //         infiniteLoop={true}
        //         showIndicators={false}
        //         showStatus={false}
        //         thumbWidth={60}
        //         className="productCarousel"
        //     >
        //         <img src={p1} alt="" />
        //         <img src={p2} alt="" />
        //         <img src={p3} alt="" />
        //         <img src={p4} alt="" />
        //         <img src={p5} alt="" />
        //         <img src={p6} alt="" />
        //         <img src={p7} alt="" />
        //     </Carousel>
        // </div>
    );
};

const StyledCarousel = styled.div`
  
  color: #fff;
  font-size: 20px;
  width: 100%;
  max-width: 500px;
  top: 50px;
  position: sticky;
  
  &.productCarousel {
    display: flex;
    flex-direction: row-reverse;
    gap: 15px;
    
    &.carousel {
      width: auto;
      
      &.carousel-slider {
        width: 100%;
        
        &.slider-wrapper {
          border-radius: 10px;
          
          
        }
      }
      &.thumbs-wrapper {
        margin: 0;
      }
      &.thumb {
        height: 60px;
        border-radius: 6px;
        overflow: hidden;
        position: relative;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        &:after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: black;
          opacity: 0;
        }
        &.selected, :hover {
          border: 0;
          
          &:after {
            opacity: 0.2;
          }
        }
      }
      
    }
    &.control-arrow {
      display: none;
    }
  }
`

