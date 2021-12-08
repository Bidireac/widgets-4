import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useGlobalContext } from '../utils/context';

const useStyles = makeStyles((theme) => ({
  amountButtons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
  },
  phoneImg: {
    width: '100%',
    height: '100%',
  },
  phoneTitle: {
    textTransform: 'capitalize',
  },
}));

const CartItem = ({ id, img, title, price, amount }) => {
  const classes = useStyles();
  const { remove, toggleAmount } = useGlobalContext();
  return (
    <>
      <Grid item xs={1}>
        <Paper elevation={0} className={classes.image}>
          <img src={img} alt={title} className={classes.phoneImg} />
        </Paper>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h6" component="h2" className={classes.phoneTitle}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="h4"
          className={classes.price}
        >
          ${price}
        </Typography>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => remove(id)}
        >
          remove
        </Button>
      </Grid>
      <Grid item xs={1} className={classes.amountButtons}>
        <Button onClick={() => toggleAmount(id, 'increase')}>
          <KeyboardArrowUpIcon />
        </Button>
        <Typography
          variant="subtitle1"
          component="p"
          className={classes.amount}
        >
          {amount}
        </Typography>
        <Button onClick={() => toggleAmount(id, 'decrease')}>
          <KeyboardArrowDownIcon />
        </Button>
      </Grid>
    </>
  );
};

export default CartItem;
