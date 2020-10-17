import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../common/components/functional/search-bar/SearchBar";
import LocationBar from "../../common/components/functional/location-bar/LocationBar";
import { usePosition } from "../../common/hooks/usePosition";
import { getLocationStart, selectuserLocationDetails } from "./home.slice";
import { useDispatch, useSelector } from "react-redux";

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
      {/* <SearchBar /> */}
    </div>
  );
};

export default HomePage;
