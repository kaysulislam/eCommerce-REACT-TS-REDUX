import { Grid, Divider } from '@mui/material';

import ProductSingle from '../ProductAll/ProductSingle';
import data from '../../data';

export default function ProductAll() {
  const products = [...data];

  return (
    <div>
      <Divider />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {products.map(product => (
          <ProductSingle product={product} />
        ))}
      </Grid>
    </div>
  );
}

/*
      <div className="App">
        <Divider /> 
        <Box sx={{ flexGrow: 1 }}>
            <Grid container direction='column' spacing={1} style={{maxWidth: 1200, margin: "0 auto", alignItems:'center',}}> 
                <Grid item xs={12} sm={6} md={3}> 
                  {products.map((product) => (
                  <ProductSingle product={product} />
                    ))}
                </Grid>
            </Grid>
        </Box>
        <Divider /> 
      </div>
  */
