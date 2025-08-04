// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import './Contact.css';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:5000/send-message', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.json();
//     if (result.success) {
//       alert('WhatsApp message sent!');
//       setFormData({ name: '', email: '', message: '' });
//     } else {
//       alert('Failed to send message.');
//     }
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <motion.div
//         className="contact-hero d-flex align-items-center justify-content-center text-center"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="text-white">
//           <h1 className="display-4">Contact Us</h1>
//           <p className="lead">We'd love to hear from you</p>
//         </div>
//       </motion.div>

//       {/* Contact Section */}
//       <section className="container py-5">
//         <div className="row">
//           <motion.div
//             className="col-md-6 mb-4"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h2 className="section-title">Get in Touch</h2>
//             <p className="mb-4">
//               Have questions about our products or custom designs? Reach out — we're here to help!
//             </p>
//             <ul className="list-unstyled contact-info">
//               <li><strong>Email:</strong> pradnyarkasar@gmail.com</li>
//               <li><strong>Phone:</strong> +91 9011995742</li>
//               <li><strong>Address:</strong> Pune, Maharashtra, India</li>
//               <li><strong>Instagram:</strong> @gehana_gully</li>
//             </ul>
//           </motion.div>

//           <motion.div
//             className="col-md-6"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <form className="contact-form shadow p-4 rounded bg-white" onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Your Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Email Address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="message" className="form-label">Your Message</label>
//                 <textarea
//                   className="form-control"
//                   id="message"
//                   rows="4"
//                   required
//                   value={formData.message}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn btn-success w-100">Send on WhatsApp</button>
//             </form>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default ContactUs;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://gehana-gully-1.onrender.com/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('WhatsApp message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <motion.div
        className="contact-hero d-flex align-items-center justify-content-center text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-white">
          <h1 className="display-4">Contact Us</h1>
          <p className="lead">We'd love to hear from you</p>
        </div>
      </motion.div>

      <section className="container py-5">
        <div className="row">
          <motion.div
            className="col-md-6 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="section-title">Get in Touch</h2>
            <p className="mb-4">
              Have questions about our products or custom designs? Reach out — we're here to help!
            </p>
            <ul className="list-unstyled contact-info">
              <li><strong>Email:</strong> pradnyarkasar@gmail.com</li>
              <li><strong>Phone:</strong> +91 9011995742</li>
              <li><strong>Address:</strong> Pune, Maharashtra, India</li>
              <li><strong>Instagram:</strong> @gehana_gully</li>
            </ul>
          </motion.div>

          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <form className="contact-form shadow p-4 rounded bg-white" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">Send on WhatsApp</button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
