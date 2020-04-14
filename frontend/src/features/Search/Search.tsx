import React, { useEffect } from "react";
import RestaurantMainCard from "../../common/components/Card/Card";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getDefaultsStart } from "./search.slice";
import { useParams } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const { city } = useParams();
  useEffect(() => {
    dispatch(getDefaultsStart(city));
  });
  return <div>{/* <RestaurantMainCard /> */}</div>;
};

export default Search;
