import React from "react";
import { action } from "@storybook/addon-actions";
import RestaurantMainCard from "./Card";

export default {
  component: RestaurantMainCard,
  title: "RestaurantMainCard",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const cardData: any = {
  id: "16774318",
  name: "Otto Enoteca & Pizzeria",
  url:
    "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village",
  location: {
    address: "1 5th Avenue, New York, NY 10003",
    locality: "Greenwich Village",
    city: "New York City",
    //   "latitude": "40.732013",
    //   "longitude": "-73.996155",
    zipcode: "10003",
    country_id: "216",
  },
  average_cost_for_two: "60",
  price_range: "2",
  currency: "$",
  thumb:
    "https://b.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_thumb.png",
  featured_image:
    "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
  // "photos_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop",
  menu_url:
    "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/menu#tabtop",
  events_url:
    "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/events#tabtop",
  user_rating: {
    aggregate_rating: "3.7",
    rating_text: "Very Good",
    rating_color: "5BA829",
    votes: "1046",
  },
  has_online_delivery: "0",
  is_delivering_now: "0",
  has_table_booking: "0",
  deeplink: "zomato://r/16774318",
  cuisines: "Cafe",
  all_reviews_count: "15",
  photo_count: "18",
  phone_numbers: "(212) 228-2930",
};

export const actionsData = {
  onRestaurantNameClick: action("onRestaurantNameClick"),
  onRestaurantAddressClick: action("onRestaurantAddressClick"),
  onCallClick: action("onCallClick"),
  onMenuClick: action("onMenuClick"),
};

export const Default = () => (
  <RestaurantMainCard restaurant={cardData} {...actionsData} />
);

export const withNoData = () => <RestaurantMainCard {...actionsData} />;

// export const Default = () => <Task />;
