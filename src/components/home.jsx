import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import About from "./about";
import Contact from "./contact";
import Experiences from "./experiences";

import "./home.css";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="home-container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img onClick={() => setActiveSection("home")}src="/logo.jpg" alt="" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li onClick={() => setActiveSection("home")}>Home</li>
          <li onClick={() => setActiveSection("experiences")}>Journey</li>
          <li onClick={() => setActiveSection("about")}>About</li>
          <li onClick={() => setActiveSection("contact")}>Contact</li>
          
        </ul>
      </nav>

      {/* Home Section */}
      {activeSection === "home" && (
        <>
          <div className="hero-section">
            <div className="hero-content">
              <h5>Embark On The Journey Of A Lifetime</h5>
              <h1>TRAVEL FAR,<br />WITH NOMADICPULSE</h1>
              <p>
                 I am a traveller.
I travel by cycle and love exploring new places slowly, deeply, and meaningfully.I’ve cycled across India and Bangladesh, I believe in balancing work and life through travel.
I also explore Nepal — its beautiful trails, villages, and mountains.If you are planning to visit Nepal or trek its Himalayan trails, feel free to contact me. I can help you with tips, local routes, and real advice from experience.
This website is for sharing my journeys, travel hacks, budget tips, and the joy of exploring the world — one pedal at a time.
Let’s ride, trek, and discover together.
              </p>
      <button 
       className="start-btn"
      onClick={() => setActiveSection("experiences")}
      >
       START YOUR ADVENTURE
      </button>
            </div>
          </div>
          <div className="journey">
            <h1>My Best Journey</h1>
          </div>

          {/* Image Cards */}
          <div className="image-cards">
            
            <img src="/sachin.jpg" alt="sachin" />
            <img src="/sachin2.jpg" alt="sachin2" />
            <img src="/sachin3.jpg" alt="sachin3" />
            <img src="/sachin4.jpg" alt="sachin4" />
          </div>
        </>
      )}

      {/* About Section */}
      {activeSection === "about" && <About />}
      {/*Contact Section */}
      {activeSection === "contact" && <Contact />}
      {/*Experience Section*/}
      {activeSection === "experiences" && <Experiences />}

      {/* Footer */}
      <footer className="footer">
        <p>Follow Me on:</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/nomadicpulse71" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={35} />
          </a>
          <a href="https://www.facebook.com/nomadicpulse71/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={35} />
          </a>
          <a href="https://www.youtube.com/@NomadicPulse71" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={35} />
          </a>
        </div>
        <p>&copy; 2026 NomadicPulse</p>
      </footer>

    </div>
  );
}