import React from "react";
import Navbar from "./Navbar";
import heroImage from "../assets/icons/hero-image.svg";
import ai from '../assets/icons/ai.icon.svg';
import reviews from '../assets/icons/reviews.icon.svg';
import shopify from '../assets/icons/shopify.icon.svg';
import coinbase from '../assets/icons/coinbase.icon.svg';
import dropbox from '../assets/icons/dropbox.icon.svg';
import intercom from '../assets/icons/intercom.icon.svg';
import marvel from '../assets/icons/marvel.icon.svg';
import automattic from '../assets/icons/automattic.icon.svg';

const HeroSection = () => {
  const icons = [
    shopify,
    coinbase,
    dropbox,
    intercom,
    marvel,
    automattic,
  ];

  return (
    <div className="hero-view mx-24">
      <Navbar />
      <div className="flex items-center my-20">
        <div className="w-1/2">
          <div className="text">
            <p className="title text-4xl font-semibold mb-4">
              Uniting the world, one video call at a time
            </p>
            <p className="description text-lg mb-8 text-gray-700">
              Experience the future of communication with ClearLink – where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>
          </div>

          <div className="cta flex flex-col gap-8">
            <div className="cta-btn flex gap-4">
              <button className="px-6 py-4 rounded-full border-none text-white bg-blue">
                Start your free trial
              </button>

              <div className="cta-text flex items-center gap-2 text-blue">
                <img src={ai} alt="" className="w-6 h-6" />
                <p>Discover AI Assistant</p>
              </div>
            </div>

            <div className="reviews">
              <img src={reviews} alt="" />
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <img src={heroImage} alt="" className="w-full h-full" />
        </div>
      </div>

      <div className="icon-section flex flex-col items-center mt-10 mb-20 gap-8">
        <p className="text-lg text-gray-700">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <div className="icon-wrapper w-full flex">
          {icons.map((icon, index) => (
            <div key={index} className="w-1/6 h-16 p-8">
              <img src={icon} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
