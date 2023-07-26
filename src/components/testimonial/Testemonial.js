import React from "react";
import TestimonialSwiper from "../Swipers/TestimonialSwiper";
import "./testimonial.css";
const Testemonial = () => {
  return (
    <>
      <section class="testimonialsSectionBlock trustedSectionBlock">
        <div class="container">
          <h1 class="trustedSectionBlock__mainHeading">Testimonials</h1>
          <TestimonialSwiper />
        </div>
      </section>
    </>
  );
};

export default Testemonial;
