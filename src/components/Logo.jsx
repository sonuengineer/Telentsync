import React from "react";
import logo from '../assets/icons/logo.png';
import clearLink from '../assets/icons/clearLink.png';

const Logo = () => {
  return (
    <div className="logo-view">
      <div className="flex items-center gap-2">
        <img src={logo} alt="ClearLink Logo" className="w-6 h-6" />
        <div className="img w-24 h-4">
          <img src={clearLink} alt="Clearlink" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
