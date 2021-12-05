import React from 'react';
import Grid from '@mui/material/Grid';

import { ProductDocument } from './ProductSingle';

interface IProps {
  product: ProductDocument;
  selectedImage: number;
  onSelect: React.Dispatch<React.SetStateAction<number>>;
}

function Thumbnail(props: IProps) {
  const { images, imgHeight, imgWidth } = props.product;
  const { selectedImage, onSelect } = props;

  return (
    <div>
      <Grid container direction="column">
        {images.map((image, index) => (
          <img
            key={index}
            src={require('../../assets/images/'.concat(image)).default}
            alt="Product"
            height={imgHeight * 0.3}
            width={imgWidth * 0.3}
            style={{
              opacity: index === selectedImage ? '1' : '0.65',
              paddingBottom: '5px',
            }}
            onClick={() => onSelect(index)}
          ></img>
        ))}
      </Grid>
    </div>
  );
}

export default Thumbnail;

/**
 
                {images.map((image, index) => (
                        <img 
                            key= {index} 
                            src={require("../assets/images/".concat(image)).default} 
                            alt="Product" 
                            height={imgHeight*.30}
                            width={imgWidth*.30} 
                            style={{opacity: index === selectedImage ? "1": "0.65", paddingBottom: '5px'}}
                            onClick={() => onSelect(index)}
                            >
                        </img>
                    ))}

 */
