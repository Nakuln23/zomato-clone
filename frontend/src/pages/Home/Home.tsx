import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import SearchBar from "../../common/components/functional/search-bar/SearchBar";
import LocationBar from "../../common/components/functional/location-bar/LocationBar";
import { usePosition } from "../../common/hooks/usePosition";
import { getLocationStart, selectuserLocationDetails } from "./home.slice";
import { useDispatch, useSelector } from "react-redux";
import HoverCard from "../../common/components/core/hover-card/HoverCard";
import Grid from "@material-ui/core/Grid";
import CollectionCard from "../../common/components/core/collection-card/CollectionCard";
import { Typography } from "@material-ui/core";
import PopularLocalitiesCard from "../../common/components/core/popular-localities-card/PopularLocalitiesCard";

const HomePage = () => {
  const { latitude, longitude, error } = usePosition();
  const userLocationDetails = useSelector(selectuserLocationDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(getLocationStart({ params: { lat: latitude, lon: longitude } }));
    }
  }, [latitude, longitude]);

  return (
    <div>
      <LocationBar options={userLocationDetails} />
      <SearchBar />
      <div>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <HoverCard text='Order Food Online' imageUrl='' />
          </Grid>
          <Grid item xs={3}>
            <HoverCard text='Go out for a meal' imageUrl='' />
          </Grid>
          <Grid item xs={3}>
            <HoverCard text='Nightlife & Clubs' imageUrl='' />
          </Grid>
          <Grid item xs={3}>
            <HoverCard text='Zomato Pro' imageUrl='' />
          </Grid>
        </Grid>
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
            <CollectionCard title={"Value for Money"} subtitle={"12 places"} />
          </Grid>
        </Grid>
      </div>

      <div>
        <Typography>
          Popular localities in and around {userLocationDetails[0]?.city_name}
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
  );
};

export default HomePage;
