import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import CartItem from './CartItem';
import { useGlobalContext } from '../utils/context';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    padding: 50,
  },
  divider: {
    backgroundColor: theme.palette.primary.dark,
    height: 4,
    width: '100%',
    marginBottom: 20,
  },
  footer: {
    marginTop: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
  },
  totalPrice: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const CartContainer = () => {
  const classes = useStyles();
  const { cart, total, clearCart, closeSubmenu } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <Container className={classes.container} onMouseOver={closeSubmenu}>
        <Typography variant="h2" component="h2" gutterBottom>
          Your Bag
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          is currently empty.
        </Typography>
      </Container>
    );
  }

  return (
    <Container className={classes.container} onMouseOver={closeSubmenu}>
      <Typography
        variant="h2"
        component="h2"
        className={classes.title}
        gutterBottom
      >
        Your Bag
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={4}
      >
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </Grid>
      <footer className={classes.footer}>
        <Divider variant="middle" className={classes.divider} />
        <Box className={classes.totalPrice}>
          <Typography variant="h4" component="h4" className={classes.total}>
            Total
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            className={classes.total}
          >
            ${total}
          </Typography>
        </Box>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          onClick={clearCart}
        >
          clear cart
        </Button>
      </footer>
    </Container>
  );
};

export default CartContainer;
