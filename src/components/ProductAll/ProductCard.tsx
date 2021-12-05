import { Link } from 'react-router-dom';

import {
  Typography,
  Divider,
  Box,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from '@mui/material';
import Rating from '@material-ui/lab/Rating';

import { ProductDocument } from '../ProductSingle/ProductSingle';

interface IProps {
  product: ProductDocument;
}

export default function ProductCard(props: IProps) {
  const { title, description, images, price, rating } = props.product;

  return (
    <Box component="div" m={1}>
      <Card sx={{ width: 350, height: 450, position: 'relative' }}>
        <Link to={`/products/${images[0]}`}>
          <CardMedia
            style={{ height: '200px', width: '200' }}
            component="img"
            height="140px"
            image={require(`../assets/images/${images[0]}`).default}
            alt={title}
          />
        </Link>
        <CardContent style={{ textAlign: 'left' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            Price: $ {price}
          </Typography>
          <Rating name="rating" value={rating} />
        </CardContent>
        <CardActions
          style={{ backgroundColor: '#eee', position: 'absolute', bottom: '0' }}
        >
          <Button size="small" style={{ height: 20 }}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
