import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Search from "../features/Search/Search";

const HomePage = () => {
  const { city } = useParams();
  // useEffect(() => {
  //   dispatch(getDefaultsStart(city));
  // });
  return (
    <div>
      <Search />
    </div>
  );
};

export default HomePage;
