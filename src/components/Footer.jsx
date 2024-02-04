import React from "react";
import SocialMedia from "../assets/icons/socials.icon.svg";
import playstore from "../assets/icons/playstore.icon.svg";
import appstore from "../assets/icons/appstore.icon.svg";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-12 mx-24 my-8">
        <div className="w-1/3">
          <Logo />
          <p className="text-gray-700 leading-6">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>

        <div className="w-2/3 flex gap-20">
          <FooterItem title="Product" links={["Overview", "Features", "Solutions", "Tutorials", "Pricing"]} />
          <FooterItem title="Company" links={["About Us", "Careers", "Press", "News", "Contact"]} />
          <FooterItem title="Resources" links={["Blog", "Events", "Help center", "Tutorials", "Support"]} />
          <FooterItem title="Legal" links={["Terms", "Privacy", "Cookies", "Licenses", "Contact"]} />

          <div className="flex flex-col gap-6">
            <p className="text-blue-600 font-semibold">Get the app</p>
            <div className="flex gap-4">
              <img src={playstore} alt="Playstore" className="w-16 h-16" />
              <img src={appstore} alt="Appstore" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center py-4 mx-24 bg-gray-100">
        <p className="text-gray-700">&copy; 2023 ClearLink. All rights reserved</p>
        <img src={SocialMedia} alt="Social Media Image" />
      </div>
    </div>
  );
};

const FooterItem = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <p className="text-gray-700 font-semibold">{title}</p>
    <ul className="list-none">
      {links.map((link, index) => (
        <li key={index} className="py-1">
          <a href="#" className="text-gray-600 hover:underline">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
