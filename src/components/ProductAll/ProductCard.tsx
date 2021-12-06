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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { ProductDocument } from '../ProductSingle/ProductSingle';

interface IProps {
  product: ProductDocument;
}

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  card: {
    position: 'relative',
    width: 350,
    height: 450,
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'black',
    backgroundColor: 'white',
  },
};

export default function ProductCard(props: IProps) {
  const { title, description, images, price, rating } = props.product;

  return (
    <Box component="div" m={1}>
      <Card
        sx={{
          position: 'relative',
          width: 400,
          height: 420,
        }}
      >
        <Link to={`/products/${images[0]}`}>
          <CardMedia
            style={{ height: '220px', width: '200' }}
            component="img"
            height="140px"
            image={require(`../../assets/images/${images[0]}`).default}
            alt={title}
          />
        </Link>

        <CardActions
          style={{
            height: 40,
            position: 'absolute',
            top: '0',
            right: '0',
            backgroundColor: '#df851b',
          }}
        >
          <Button size="small" style={{ height: 40, color: '#52443b' }}>
            <ShoppingCartIcon style={{ paddingRight: '10px' }} />
            Add to Cart
          </Button>
        </CardActions>

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
      </Card>
    </Box>
  );
}
