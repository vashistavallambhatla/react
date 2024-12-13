import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

function RouterPage() {
  return (
    <Router>
      <NavigationWrapper />
    </Router>
  );
}

function NavigationWrapper() {
  const location = useLocation();

  return (
    <>
      {(location.pathname==="/contact" || location.pathname==="/" || location.pathname==="/about") &&  
      (
        <nav className="router-navbar">
          <ul>
            <li>
              <Link to="/" className="links">Home</Link>
            </li>
            <li>
              <Link to="/about" className="links">About</Link>
            </li>
            <li>
              <Link to="/contact" className="links">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to the home page!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This website was created to explore and understand routing in React.</h1>
      <p>React Router is a powerful library for handling navigation in React applications. It enables developers to map URLs to components, making single-page applications (SPAs) possible. With features like dynamic route matching, nested routes, and programmatic navigation, React Router simplifies handling state changes and rendering components based on the URL.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-form">
      <h1>Contact us at</h1>
      <p>123 Anywhere st, Any city, st 1234</p>
      <hr />
      <p>123-456-7890</p>
      <hr />
      <p>email@gmail.com</p>
      <hr />
      <p>www.ourpage.com</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
        <h1>404 Page not found!</h1>
    </div>
  )
}

export default RouterPage;