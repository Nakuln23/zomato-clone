import { Typography } from "@material-ui/core";
import React from "react";
import LocationBar from "../../../common/components/functional/location-bar/LocationBar";
import SearchBar from "../../../common/components/functional/search-bar/SearchBar";
import "./Hero.scss";

interface IHero {
  userLocationDetails: any;
}

const Hero = ({ userLocationDetails }: IHero) => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <img
          src='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png'
          className='hero-high-res-image'
          alt=''
          role='presentation'
        />
        <div className='hero-contents-wrapper'>
          <img
            src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'
            className='hero-zomato-res-image'
            alt=''
            role='presentation'
          />
          <h2 className='hero-text'>
            Discover the best food & drinks in Nagpur
          </h2>
          <LocationBar options={userLocationDetails} />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
