import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import SearchBar from "../../common/components/functional/search-bar/SearchBar";
import LocationBar from "../../common/components/functional/location-bar/LocationBar";
import { usePosition } from "../../common/hooks/usePosition";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../common/components/core/category-card/CategoryCard";
import Grid from "@material-ui/core/Grid";
import CollectionCard from "../../common/components/core/collection-card/CollectionCard";
import { Typography } from "@material-ui/core";
import "./Home.scss";
import PopularLocalitiesCard from "../../common/components/core/popular-localities-card/PopularLocalitiesCard";
import Hero from "./components/Hero";
import { selectuserLocationDetails } from "../../store/api/commonApi/common.slice";

const HomePage = () => {
  const userLocationDetails = useSelector(selectuserLocationDetails);



  return (
    <div>
      <Hero userLocationDetails={userLocationDetails} />
      <div className='container'>
        <div className='flex'>
          <div className='flex-1'>
            <CategoryCard text='Order Food Online' imageUrl='' />
          </div>
          <div className='flex-1'>
            <CategoryCard text='Go out for a meal' imageUrl='' />
          </div>
          <div className='flex-1'>
            <CategoryCard text='Nightlife & Clubs' imageUrl='' />
          </div>
          <div className='flex-1'>
            <CategoryCard text='Zomato Pro' imageUrl='' />
          </div>
        </div>
        {/*Map Collections Cards  */}
        <Typography>Collections</Typography>
        <Typography>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Nagpur, based on trends
        </Typography>
        <NavLink to={"/"}>All collections in Nagpur</NavLink>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <CollectionCard
                title={"Trending This Week"}
                subtitle={"30 Places"}
              />
            </Grid>
            <Grid item xs={3}>
              <CollectionCard title={"Best of Nagpur"} subtitle={"30 places"} />
            </Grid>
            <Grid item xs={3}>
              <CollectionCard title={"Sweeth Tooth"} subtitle={"8 places"} />
            </Grid>
            <Grid item xs={3}>
              <CollectionCard
                title={"Value for Money"}
                subtitle={"12 places"}
              />
            </Grid>
          </Grid>
        </div>

        <div>
          <Typography>
            Popular localities in and around {userLocationDetails?.name}
          </Typography>
          <PopularLocalitiesCard placeName={"Dharampeth"} noOfPlaces={75} />
        </div>

        <Typography>Explore other options for you here</Typography>
        {/*  Popular cuisines near me*/}
        <div>
          <Typography>Popular cuisines near me</Typography>
        </div>
        {/*  Popular restaurant near me*/}
        <div>
          <Typography>Popular restaurants near me</Typography>
        </div>
        {/* Top restaurant chains */}
        <div>
          <Typography>Top Restaurant Chains</Typography>
        </div>
        {/* Cities we deliver to */}
        <div>
          <Typography>Cities We Deliver To</Typography>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
