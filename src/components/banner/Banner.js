import React from "react";
import "./banner.css";
import BannerSwiper from "../Swipers/BannerSwiper";
import Model from "../Model";

const Banner = () => {
  return (
    <>
      <Model />
      <section class="banner">
        <div class="container">
          <div class="banner_contentBlock">
            <h1>
              Novel Approach <br /> to Cybersecurity
            </h1>
            <p>
              We go above and beyond expectations to secure digital assets and
              data. Our goal is to provide an incomparable experience when it
              comes to serving your <span> CYBERSECURITY </span> needs.
              Regardless of the task, the Hexens approach will get you the
              results that you wouldn’t come across in the industry.{" "}
            </p>
            <div class="getaRequestBtn">
              <a
                href="#."
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                request a quote
              </a>
            </div>
          </div>
          <BannerSwiper />
        </div>
      </section>
    </>
  );
};

export default Banner;
