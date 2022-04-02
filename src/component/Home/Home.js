import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="heroSection fade-in">
        <div className="infoText slide-in from-left">
          <h1>Travel the world with your travel companion</h1>
          <h4>Find the best restaurants, hotels and attractions nearby.</h4>
          <Link to="/find" className="Btn Btn-Secondary Btn-large">
            Click To Find
          </Link>
        </div>
        <div className="heroSectionImg slide-in from-right">
          <img src="/assets/man-finding-location-in-map.png" alt="man-finding-location-in-map" />
        </div>
      </section>
      <section className="middleSection fade-in">
        <div className="infoText middleText slide-in from-left">
          <h1>Plan Your Whole Trip With Us</h1>
          <h4>Schedule every day of your trip before, so that you can enjoy freely without worrying about what to do next.</h4>
          <Link to="/find" className="Btn Btn-large">
            Click To Plan
          </Link>
        </div>
        <div className="middleSectionImg slide-in from-right">
          <img src="/assets/concept-of-to-do-list.png" alt="concept-of-to-do-list"/>
        </div>
      </section>
    </div>
  );
}
