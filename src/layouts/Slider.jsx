import React from "react";
// import "./Slider.css";

function Slider() {
  return (
    <div id="sliderpro1" className="slider-pro main-slider">
      <div className="sp-slides">
        <div className="sp-slide">
          <img
            className="sp-image"
            src="assets/media/main-slider/1.jpg"
            alt="img"
          />
          <div className="item-wrap sp-layer sp-padding" data-show-delay={400}>
            <div className="main-slider__inner text-left">
              <div className="custom-caption">
                <a className="main-slider__btn btn-effect" href="#">
                  <span className="main-slider__btn_inner">The all new</span>
                </a>
                <div className="main-slider__title">2016 Atura ILX</div>
                <div className="main-slider__subtitle">
                  High Performance & Outstanding Technology Combined
                </div>
                <div className="main-slider__text">Starts from</div>
                <span className="main-slider__price">$35,290</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
