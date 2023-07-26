import React from "react";
import { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const TestimonialSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper when the component mounts
    swiperRef.current = new Swiper(".testimonialsSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
      <div class="testiomnialsSLider">
        <div class="swiper testimonialsSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonialsContent">
                <p>
                  The Lido DAO first approached Hexens when picking audit
                  service providers for the Lido v2 upgrade – the most
                  significant and complex yet. We were impressed with how the
                  Hexens team provided a thorough code audit with meaningful
                  findings while consistently meeting the ETAs. Many thanks to
                  the team!
                </p>
              </div>
              <div class="Testimonials_author__fZU1h">
                Gregory
                <a
                  class="Testimonials_authorTwitter__6a6hE"
                  href="https://twitter.com/LidoFinance"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
              </div>
              <div class="testimonialsSubAuthor">
                <span>Lido DAO</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonialsContent">
                <p>
                  The Lido DAO first approached Hexens when picking audit
                  service providers for the Lido v2 upgrade – the most
                  significant and complex yet. We were impressed with how the
                  Hexens team provided a thorough code audit with meaningful
                  findings while consistently meeting the ETAs. Many thanks to
                  the team!
                </p>
              </div>
              <div class="Testimonials_author__fZU1h">
                Gregory
                <a
                  class="Testimonials_authorTwitter__6a6hE"
                  href="https://twitter.com/LidoFinance"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
              </div>
              <div class="testimonialsSubAuthor">
                <span>Lido DAO</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonialsContent">
                <p>
                  The Lido DAO first approached Hexens when picking audit
                  service providers for the Lido v2 upgrade – the most
                  significant and complex yet. We were impressed with how the
                  Hexens team provided a thorough code audit with meaningful
                  findings while consistently meeting the ETAs. Many thanks to
                  the team!
                </p>
              </div>
              <div class="Testimonials_author__fZU1h">
                Gregory
                <a
                  class="Testimonials_authorTwitter__6a6hE"
                  href="https://twitter.com/LidoFinance"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
              </div>
              <div class="testimonialsSubAuthor">
                <span>Lido DAO</span>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </>
  );
};

export default TestimonialSwiper;
