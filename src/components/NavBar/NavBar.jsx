import React, { useState, useEffect } from 'react';
import { AppBar, ListItemIcon, Hidden, makeStyles, Toolbar, Typography, Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList } from '@material-ui/core';
import { Store, Computer, LinkedIn } from '@material-ui/icons';
import CartWidget from '../CartWidget/CartWidget';
import { MobileMenu, HamburgerMenu } from '../NavBarComponents/MobileMenu';
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    minWidth: '30px',
  },
  logo: {
    flexGrow: 1,
    marginTop: 10,
    height: 59,

  }
}));

function NavBar() {
  // #region Const
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [estadoMenu, setEstadoMenu] = React.useState(false);


  useEffect(() => {
    setEstadoMenu(estadoMenu);
  }, [estadoMenu]);

  const EstadoDelMenu = (estado) => {
    setEstadoMenu(estado);
  };

  const handleToggle = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  // #endregion
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  // #region Return
  return (
    <div className={classes.root} position="sticky" elevation={0}>
      <AppBar style={{ background: '#10121E' }}>

        <Toolbar>
          <HamburgerMenu estado={estadoMenu} onAddMenuHam={EstadoDelMenu} />

          <Typography component={Link} to='/' variant="h5" color="initial" className={classes.title}>
            <img src="https://raw.githubusercontent.com/NeXuZZ-SCM/hi-reactjs-sguazzin/master/logo.png" alt="logo" className={classes.logo} />
          </Typography>
          <Hidden only={['sm', 'xs']}>
            <Button variant="outlined" color="primary" className={classes.button} startIcon={<Store />} ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}>
              <Typography variant="body1" className={classes.title}>
                Nuestros Cursos
              </Typography>
            </Button>
            <CartWidget />
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose} >
                          <ListItemIcon className={classes.icon}><Computer /></ListItemIcon>
                          <Link to="/category/1">JavaScript essential</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to='/category/2' >
                          <ListItemIcon className={classes.icon}><Computer /></ListItemIcon>
                          React Js essential
                        </MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to='/category/3'>
                          <ListItemIcon className={classes.icon}><Computer /></ListItemIcon>
                          React Js Intermediate
                        </MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to='/category/4'>
                          <ListItemIcon className={classes.icon}><Computer /></ListItemIcon>
                          React Js Advanced
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Hidden>
        </Toolbar>
      </AppBar>
      <MobileMenu estado={estadoMenu} onAddMenuLateral={EstadoDelMenu} />
    </div>
  );
  // #endregion
}// end function NavBar

export default NavBar;
