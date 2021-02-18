import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running Shoes',
    price: '$60',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5I-fNzSQxpKln2uxbT0RjQ9119dgG3pVHbtAUhsA1rTXwEtIOiygl7FzfdMj0mQLMKtjbXDI&usqp=CAc',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple macbook',
    price: '$300',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQrDekrm1B5G55783QJJAtW7WpO98263juZTfDROf85d0vDvjGtp0oRpYGcSG0hgUbufRxOOY&usqp=CAc',
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
