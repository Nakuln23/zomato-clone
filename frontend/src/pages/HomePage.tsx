import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from '../common/components/functional/search-bar/SearchBar';
import LocationBar from '../common/components/functional/location-bar/LocationBar';
import { usePosition } from '../common/hooks/usePosition';

const HomePage = () => {
  const { city } = useParams();
 
  // console.log({ latitude, longitude });
  // useEffect(() => {
  //   dispatch(getDefaultsStart(city));
  // });
  return (
    <div>
      <SearchBar />
      <LocationBar />
    </div>
  );
};

export default HomePage;
