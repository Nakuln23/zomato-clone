import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

interface IHoverCard {
  text: string;
  imageUrl: string;
}

export default function CategoryCard(props: IHoverCard) {
  const classes = useStyles();
  const history = useHistory();
  type Params = {
    city: string;
  };

  const { city }: Params = useParams();
  const { text, imageUrl } = props;
  const handleClick = () => {
    history.push(`/${city}/delivery`);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={imageUrl}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
