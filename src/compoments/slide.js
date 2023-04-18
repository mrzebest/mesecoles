import React from 'react';
import bannerImage from '../assets/banner.png';
import 'bootstrap/dist/css/bootstrap.css';

import '../App.css';


const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" />
      <div className="banner-text">
      

      </div>
    </div>
  );
};

export default Banner;
