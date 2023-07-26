import React from "react";
import { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";

const BannerSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper when the component mounts
    swiperRef.current = new Swiper(".mySwiper", {
      // Swiper options here...
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: "2000",
      },
    });

    // Clean up Swiper instance when the component unmounts
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);
  return (
    <>
      <div class="brandsSlider">
        <h5>Backed by:</h5>
        <div class="brandsSlliderContent">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="branLogo">
                  <a href="#.">
                    <img
                      src="https://hexens.io/storage/partners/b669651c6e26d6f40afd37ff0ca49056.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="branLogo">
                  <a href="#.">
                    {" "}
                    <img
                      src="https://hexens.io/storage/partners/b669651c6e26d6f40afd37ff0ca49056.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="branLogo">
                  <a href="#.">
                    <img
                      src="https://hexens.io/storage/partners/b669651c6e26d6f40afd37ff0ca49056.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="branLogo">
                  <a href="#.">
                    <img
                      src="https://hexens.io/storage/partners/b669651c6e26d6f40afd37ff0ca49056.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="branLogo">
                  <a href="#.">
                    <img
                      src="https://hexens.io/storage/partners/b669651c6e26d6f40afd37ff0ca49056.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="branLogo">
                  <a href="#.">
                    <img
                      src="https://hexens.io/storage/partners/b669651c6e26d6f40afd37ff0ca49056.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSwiper;
