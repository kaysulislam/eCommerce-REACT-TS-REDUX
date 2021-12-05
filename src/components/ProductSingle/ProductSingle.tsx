import React, { useState } from 'react';
import { Grid, Divider, Box } from '@mui/material';

import Thumbnail from './Thumbnail';
import Detail from './Detail';
import MainImage from './MainImage';

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

/*
            <Grid container spacing={1} style={{maxWidth: 1200, margin: "0 auto"}}> 
                <Grid item xs = {2}> 
                    <Thumbnail product={product} selectedImage={selectedImage} onSelect={setSelectedImage}/>
                </Grid>
                <Grid item xs={4}> 
                    <MainImage src={product.images[selectedImage]} imgHeight={product.imgHeight} imgWidth={product.imgWidth}/>
                </Grid>
                <Grid item xs={6}>  
                    <Detail product={product}/>
                </Grid>
            </Grid>





const product: ProductDocument = {
    title: "Brown eggs",
    category: "dairy",
    variant: ['Red', 'green'],
    description: "Raw organic brown eggs in a basket",
    images: ["0.jpg"],
    imgHeight: 600,
    imgWidth: 400,
    price: 28.1,
    rating: 4
  }





import React, { useState } from 'react'
import {Grid, Divider} from '@mui/material';

import Thumbnail from './Thumbnail';
import Detail from './Detail'
import MainImage from './MainImage';


export type ProductDocument = {
    name: string
    category: string
    description: string
    images: string[]
    imgHeight: number
    imgWidth: number
    price: number
    rating: number
  }


const testProduct: ProductDocument = {
    name: "Brown eggs",
    category: "dairy",
    description: "Raw organic brown eggs in a basket",
    images: ["0.jpg"],
    imgHeight: 600,
    imgWidth: 400,
    price: 28.1,
    rating: 4
  }

export interface Product {
    title: string,
    description: string,
    variant: string[],
    price: number,
    category: string,
    images: string[]
}

const product: Product = 
    {
        title: "Apple",
        description: "Perhaps more than any other modern apple, Pink Lady® epitomises the trend towards product marketing and branding in the sale of apples.",
        variant: ['Red', 'green'],
        price: 4.5,
        category: "Fruits",
        images: [
            "https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=",
            "https://www.wadherafruits.com/wp-content/uploads/2020/04/apple_green-600x600.jpg"]
    }

function ProductSingle() {
    const [selectedImage, setSelectedImage] = useState(0)

    return (
        <div>
            <Divider /> 
            <Grid container spacing={1} style={{maxWidth: 1100, margin: "0 auto"}}> 
                <Grid item sm = {2}> 
                    <Thumbnail product={product} selectedImage={selectedImage} onSelect={setSelectedImage}/>
                </Grid>
                <Grid item sm={5}> 
                    <MainImage src={product.images[selectedImage]}/>
                </Grid>
                <Grid item sm={5}>  
                    <Detail product={product}/>
                </Grid>
            </Grid>
            <Divider /> 
        </div>
    )
}

export default ProductSingle

*/
