import React, { useState } from "react";
import "./experiences.css";

// Import Data
import { experiencesData } from "../data/experiencesData";

export default function Experiences() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="experiences-section">
      <div className="experiences-content">
        <h2>My Journey</h2>

        {/* Image Grid */}
        <div className="experience-grid">
          {experiencesData.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.title}
              className="experience-img"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* Popup */}
        {selectedImage && (
          <div
            className="popup-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="popup-box"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt="popup"
                className="popup-image"
              />

              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>

              <p>
                <strong>Itinerary:</strong> {selectedImage.itinerary}
              </p>

              <button
                className="close-btn"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}