import { Link } from 'react-router-dom';
import { Divider, Grid, Typography, Button, Box } from '@mui/material';

import { ProductDocument } from './ProductSingle';

interface IProps {
  product: ProductDocument;
}

function Detail(props: IProps) {
  const { title, description, price, category } = props.product;

  return (
    <div>
      <Grid
        container
        direction="column"
        style={{ height: '100%', textAlign: 'left' }}
      >
        <Typography variant="subtitle1">{category}</Typography>
        <Divider />
        <Typography variant="h4">{title}</Typography>
        <Box mt={2}>
          <Typography variant="subtitle1">{description}</Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h5">Price: $ {price}</Typography>
        </Box>
        <Box style={{ paddingTop: '20px' }}>
          <Link
            to={'/order'}
            style={{ textDecoration: 'none', padding: '0 10px 0 0' }}
          >
            <Button variant="contained" color="primary">
              BUY
            </Button>
          </Link>
          <Link to={'/products'} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Continue Shopping !
            </Button>
          </Link>
        </Box>
      </Grid>
    </div>
  );
}

export default Detail;
