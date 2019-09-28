import React from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import './ArticleCard.css'
import image from '../../images/wallpaper.png';

const ArticleCard: React.FC = () => (
    <Card className='article-card'>
      <CardActionArea>
        <CardMedia
          className='card-image'
          image={image}
          title="Contemplative Reptile"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="secondary">
        Share
      </Button>
      <Button size="small" color="secondary">
        Learn More
      </Button>
    </CardActions>
  </Card>
);

export default ArticleCard;