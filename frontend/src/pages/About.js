import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <div className="about-hero d-flex align-items-center justify-content-center text-center">
        <div className="text-white" data-aos="zoom-in">
          <h1 className="display-4">About Gehana Gully</h1>
          <p className="lead">Crafting Timeless Imitation jewellery with Love</p>
        </div>
      </div>

      {/* About Info */}
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Carousel */}
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div
              id="ourStoryCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner rounded shadow overflow-hidden">
                <div className="carousel-item active">
                  <img
                    src="/Images/logo.png"
                    className="d-block w-100 carousel-img"
                    alt="Story 1"
                    style={{ height: '300px', objectFit: 'contain' }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Images/my-jewellery-case-study-cover-768x429.webp"
                    className="d-block w-100 carousel-img"
                    alt="Story 2"
                    style={{ height: '300px', objectFit: 'contain' }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/Images/862d74e87c1205619fbf2bc8f128961a.jpg"
                    className="d-block w-100 carousel-img"
                    alt="Story 3"
                    style={{ height: '300px', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="section-title">Our Story</h2>
            <p>
              Gehana Gully was born from a passion for tradition and elegance. What started as a small idea has grown into a trusted name for imitation jewellery across India.
            </p>
            <p>
              We believe that every piece of jewelleryshould not only beautify, but also tell a story. Our designs are inspired by culture, crafted with care, and made to shine for every occasion — from weddings and festivals to everyday wear.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-5 bg-light text-center" data-aos="zoom-in-up">
        <div className="container">
          <h2 className="section-title">Our Vision & Mission</h2>
          <div className="row mt-4">
            <div className="col-md-6 mb-4" data-aos="fade-up-right">
              <h5 className="text-gold">🌟 Vision</h5>
              <p>
                To be the go-to brand for elegant, affordable jewellerythat enhances every woman’s confidence and grace.
              </p>
            </div>
            <div className="col-md-6 mb-4" data-aos="fade-up-left">
              <h5 className="text-gold">🎯 Mission</h5>
              <p>
                To craft high-quality imitation jewellerywith timeless beauty, accessible to all corners of India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="container py-5 text-center" data-aos="fade-up">
        <h2 className="section-title">Meet the Team</h2>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-4" data-aos="flip-left">
            <img
              src="/Images/IMG_20250105_223847.jpg"
              className="rounded-circle shadow mb-3"
              alt="Founder"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <h5 className="text-gold">Pradnya Kasar</h5>
            <p>Founder & Designer</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
