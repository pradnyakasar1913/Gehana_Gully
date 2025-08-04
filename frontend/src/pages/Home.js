import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className="home-hero d-flex align-items-center justify-content-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div 
          className="hero-text text-white"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="hero-heading">Gehana Gully</h1>
          <p className="hero-sub">Where Beauty Meets Brilliance</p>
          <a href="/products" className="btn btn-outline-light btn-lg mt-4">Shop Now</a>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.section 
        className="about container text-center my-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">About Us</h2>
        <p className="lead">
          At Gehana Gully, we craft elegant imitation jewellery inspired by India's rich heritage. 
          Whether it’s for a wedding, festival, or everyday elegance — we make you shine.
        </p>
      </motion.section>

      {/* Why Choose Us */}
      <section className="why-us container my-5 text-center">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="row mt-4">
          {[
            { title: "🌟 Premium Quality", desc: "Elegant designs with lasting shine" },
            { title: "🚚 Fast Delivery", desc: "Pan India delivery with tracking" },
            { title: "💬 Support", desc: "Custom styling and care tips" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="icon-box shadow p-3 rounded bg-white h-100">
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="cta text-white text-center py-5"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-3">Discover Your Signature Look</h2>
        <p>Shop handcrafted imitation jewellery made to mesmerize.</p>
        <a href="/products" className="btn btn-light btn-lg mt-3">Explore Now</a>
      </motion.section>
    </>
  );
}

export default Home;
