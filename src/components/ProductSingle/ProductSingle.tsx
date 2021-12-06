import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { useParams } from 'react-router';

import Thumbnail from './Thumbnail';
import Detail from './Detail';
import MainImage from './MainImage';

import data from '../../data';

export type ProductDocument = {
  title: string;
  category: string;
  description: string;
  images: string[];
  imgHeight: number;
  imgWidth: number;
  price: number;
  rating: number;
};

function ProductSingle() {
  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = useParams();
  const product = data.find(item => item.images[0] === id);

  if (product) {
    return (
      <Grid
        container
        xs={12}
        sm={12}
        alignItems="center"
        direction="column"
        justifyContent="space-between"
        style={{ padding: '10px' }}
        sx={{
          flexGrow: 1,
        }}
      >
        <div style={{ height: 30 }} />
        <Grid
          container
          spacing={1}
          style={{ maxWidth: 1200, margin: '0 auto' }}
        >
          <Grid item xs={2}>
            <Thumbnail
              product={product}
              selectedImage={selectedImage}
              onSelect={setSelectedImage}
            />
          </Grid>
          <Grid item xs={7}>
            <MainImage
              src={product.images[selectedImage]}
              imgHeight={product.imgHeight}
              imgWidth={product.imgWidth}
            />
          </Grid>
          <Grid item xs={3}>
            <Detail product={product} />
          </Grid>
        </Grid>
        <div style={{ height: 30 }} />
      </Grid>
    );
  } else {
    return <h1>Error ! product not found</h1>;
  }
}

export default ProductSingle;

/*
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { useParams } from 'react-router';

import Thumbnail from './Thumbnail';
import Detail from './Detail';
import MainImage from './MainImage';

import data from '../../data';

export type ProductDocument = {
  title: string;
  category: string;
  description: string;
  images: string[];
  imgHeight: number;
  imgWidth: number;
  price: number;
  rating: number;
};

type IProps = {
  product: ProductDocument;
};

function ProductSingle(props: IProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const { product } = props;
  const { id } = useParams();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          style={{ maxWidth: 1200, margin: '0 auto' }}
        >
          <Grid item xs={2}>
            <Thumbnail
              product={product}
              selectedImage={selectedImage}
              onSelect={setSelectedImage}
            />
          </Grid>
          <Grid item xs={5}>
            <MainImage
              src={product.images[selectedImage]}
              imgHeight={product.imgHeight}
              imgWidth={product.imgWidth}
            />
          </Grid>
          <Grid item xs={5}>
            <Detail product={product} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProductSingle;

*/
