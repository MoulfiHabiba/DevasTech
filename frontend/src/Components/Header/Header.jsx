import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box, Button, Icon } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import usedStyles from './styles';
import {Museum} from '@material-ui/icons';

export const Header = () => {
  const classes = usedStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
          <Button className={classes.goButton} variant="contained" color="primary">
            GO
          </Button>
        </div>
        <Typography variant="h5" className={classes.title}>
          Categories:
        </Typography>
        <Typography variant="h5" className={classes.categorie}>
          <Icon className={classes.icon}>Monumant</Icon>
        </Typography>
        <Typography variant="h5" className={classes.categorie}>
          <Icon className={Museum}>museum</Icon>
        </Typography>
        <Typography variant="h5" className={classes.categorie}>
          <Icon className={classes.icon}>place</Icon>
        </Typography>
        <Typography variant="h5" className={classes.categorie}>
          <Icon className={classes.icon}>restaurant</Icon>
        </Typography>
        <Typography variant="h5" className={classes.categorie}>
        <Icon className={classes.icon}>Hotel</Icon>
        </Typography>
        <Typography variant="h5" className={classes.title}>
          Theme:
        </Typography>
        <Typography variant="h5" className={classes.categorie}>
          <Icon className={classes.icon}>nature</Icon>
        </Typography>
        <Typography variant="h5" className={classes.categorie}>
          <Icon className={classes.icon}>history</Icon>
        </Typography>
        <Box display="flex"></Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
