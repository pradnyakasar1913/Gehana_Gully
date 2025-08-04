// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import Products from './pages/Products';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
//         <div className="container">
//           <Link className="navbar-brand fw-bold" to="/">Gehana Gully</Link>
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
//               <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />           {/* ✅ Default route */}
        <Route path="/home" element={<Home />} />       {/* Optional */}
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
