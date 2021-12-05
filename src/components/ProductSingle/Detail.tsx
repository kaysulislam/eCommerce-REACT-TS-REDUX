import React from 'react';
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
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '50px' }}
        >
          Purchase
        </Button>
      </Grid>
    </div>
  );
}

export default Detail;
