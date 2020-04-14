import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
  ratingBox: {
    width: 30,
    height: 30,
    backgroundColor: "green",
    color: "white",
  },
});
export interface Location {
  address: string;
  locality: string;
  city: string;
  zipcode: string;
  country_id: string;
}

export interface UserRating {
  aggregate_rating: string;
  rating_text: string;
  rating_color: string;
  votes: string;
}

export interface IRestaurantMainCard {
  id: string;
  name: string;
  url: string;
  location: Location;
  average_cost_for_two: string;
  price_range: string;
  currency: string;
  thumb: string;
  featured_image: string;
  menu_url: string;
  events_url: string;
  user_rating: UserRating;
  has_online_delivery: string;
  is_delivering_now: string;
  has_table_booking: string;
  deeplink: string;
  cuisines: string;
  all_reviews_count: string;
  photo_count: string;
  phone_numbers: string;
}

export default function RestaurantMainCard(props: any) {
  const classes = useStyles();
  const {
    restaurant: {
      id,
      name,
      url,
      average_cost_for_two,
      price_range,
      featured_image,
      menu_url,
      events_url,
      user_rating: { aggregate_rating, votes },
      phone_numbers,
      cuisines,
      location: { address, locality },
    },
  } = props;

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item sm={3}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={featured_image}
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Grid>
        <Grid item sm={9}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Fine Dining
            </Typography>
            <Box className={classes.ratingBox}>{aggregate_rating}</Box>
            <Typography>{votes} votes</Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {locality}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {address}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary" component="p">
            Cuisines : {cuisines}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Cost for two : {average_cost_for_two}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Hours : {}
          </Typography>
        </Grid>
      </Grid>

      <CardActions>
        <Button size="small" color="primary">
          Call
        </Button>
        <Button size="small" color="primary">
          View Menu
        </Button>
      </CardActions>
    </Card>
  );
}
