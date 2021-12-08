import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useGlobalContext } from '../utils/context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 2,
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 6,
  },
  link: {
    padding: '15px 35px',
    color: '#fff',
    '& span': {
      pointerEvents: 'none',
    },
  },
  menuButton: {
    fontSize: 30,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { amount, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent.toLowerCase();
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 15;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('MuiButtonBase-root')) {
      closeSubmenu();
    }
  };
  return (
    <>
      <AppBar
        position="fixed"
        className={classes.root}
        onMouseOver={handleSubmenu}
      >
        <Container>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Shopping
            </Typography>
            <Box className={classes.links}>
              <Button onMouseOver={displaySubmenu} className={classes.link}>
                Products
              </Button>
              <Button onMouseOver={displaySubmenu} className={classes.link}>
                Developers
              </Button>
              <Button onMouseOver={displaySubmenu} className={classes.link}>
                Company
              </Button>
            </Box>
            <IconButton edge="end" color="inherit" aria-label="shop">
              <Badge badgeContent={amount} color="secondary">
                <LocalMallIcon className={classes.menuButton} />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
