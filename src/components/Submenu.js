import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import { useGlobalContext } from '../utils/context';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  submenu: {
    background: '#fff',
    boxShadow: '0 5px 15px rgba(0,0,0,.2)',
    top: '4rem',
    zIndex: 3,
    display: 'none',
    padding: '2rem',
    borderRadius: '.25rem',
    transition: 'all .3s linear',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  show: {
    display: 'block',
  },
  link: {
    textTransform: 'capitalize',
  },
  list: {
    display: 'flex',
    textTransform: 'capitalize',
  },
  anchor: {
    textDecoration: 'none',
    display: 'flex',
    color: 'inherit',
  },
}));

const Submenu = () => {
  const classes = useStyles();
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState(6);

  useEffect(() => {
    setColumns(6);
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns(4);
    }
    if (links.length > 3) {
      setColumns(3);
    }
  }, [location, links]);
  return (
    <Paper
      variant="outlined"
      className={clsx({
        [classes.submenu]: true,
        [classes.show]: isSubmenuOpen,
      })}
      ref={container}
    >
      <Typography variant="h6" className={classes.link}>
        {page}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={columns} md={6}>
          <List className={classes.list}>
            {links.map((link, index) => {
              const { label, icon, url } = link;
              return (
                <ListItem key={index}>
                  <a href={url} className={classes.anchor}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={label} />
                  </a>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Submenu;
