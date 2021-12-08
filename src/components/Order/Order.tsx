import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography, Divider } from '@mui/material';

import data from '../../data';

export default function Order() {
  const products = [...data];
  const cart = products.filter(item => item.category === 'dairy');

  const cartTotal = cart
    .map(i => i.price)
    .reduce((a, b) => a + b)
    .toFixed(2);
  const vat = (Number(cartTotal) * 0.24).toFixed(2);
  const totalPayable = Number(cartTotal) + Number(vat);

  return (
    <div>
      <Typography
        variant="h3"
        component="div"
        style={{ padding: '30px 0 30px 0' }}
      >
        ORDER SUMMARY
      </Typography>

      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={3} style={{ minHeight: '100vh' }}></Grid>
        <Grid item xs={12} sm={6} style={{ minHeight: '100vh' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>ITEM</TableCell>
                  <TableCell align="right" style={{ fontWeight: 'bold' }}>
                    PRODUCT(S)
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: 'bold' }}>
                    QUANTITY
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: 'bold' }}>
                    PRICE
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: 'bold' }}>
                    ITEM TOTAL
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item, index) => (
                  <TableRow key={item.title}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">{item.title}</TableCell>
                    <TableCell align="right">{1}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">{item.price * 1}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell />
                  <TableCell />
                  <TableCell />
                  <TableCell align="right" style={{ fontWeight: 'bold' }}>
                    Total
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: 'bold' }}>
                    {cartTotal}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell />
                  <TableCell />
                  <TableCell align="right" style={{ fontWeight: 'bold' }}>
                    VAT (24%)
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: 'bold' }}>
                    {vat}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell />
                  <TableCell />
                  <TableCell align="right" style={{ fontWeight: 'bold' }}>
                    Total Payable
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: 'bold' }}>
                    {totalPayable}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={3} style={{ minHeight: '100vh' }}></Grid>
      </Grid>
      <Link
        to={'/products'}
        style={{ textDecoration: 'none', paddingRight: 20 }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: '#df851b', color: '#52443b' }}
        >
          Continue Shopping !
        </Button>
      </Link>
      <Link to={''} style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: '#df851b',
            color: '#52443b',
          }}
        >
          Proceed to checkout
        </Button>
      </Link>
      <div style={{ height: 40 }} />
    </div>
  );
}
