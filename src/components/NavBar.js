import React from 'react';
import {AppBar, ListItemIcon, Hidden, makeStyles, Toolbar, Typography, Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList} from '@material-ui/core';
import {Store, Computer} from '@material-ui/icons';
import CartWidget from './CartWidget';
import {MobileMenu, HamburgerMenu} from './NavBarComponents/MobileMenu.js';

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
    }
  }));


function NavBar(){
    //#region Const
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [estadoMenu, setEstadoMenu] = React.useState(false);

    const EstadoDelMenu = (estado) => {
      setEstadoMenu(estado);
      console.log("EnCallback:",estado)
    };

    const handleToggle = () => {
        if(open == true){
          setOpen(false);
        }else{
          setOpen(true);
        }
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
        setOpen(false);
    };
    //#endregion
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
    }
    //#region Return
    return(
        <div className={classes.root}>
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <HamburgerMenu estado={estadoMenu} onAddMenuHam={EstadoDelMenu}/>
                <Typography variant="h5" color="initial" className={classes.title}>
                👋Hi-React
                </Typography>
                <Hidden only={['sm', 'xs']}>
                  <Button variant="contained" color="primary" className={classes.button} startIcon={<Store />} ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}>
                      <Typography variant="body1" className={classes.title}>
                      Nuestros Productos
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
                              <MenuItem onClick={handleClose}>
                                  <ListItemIcon className={classes.icon}><Computer/></ListItemIcon>
                              Accesorios
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                  <ListItemIcon className={classes.icon}><Computer/></ListItemIcon>
                                  Monitores
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                  <ListItemIcon className={classes.icon}><Computer/></ListItemIcon>
                                  PC
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                  <ListItemIcon className={classes.icon}><Computer/></ListItemIcon>
                              Impresoras
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
        <MobileMenu estado={estadoMenu} onAddMenuLateral={EstadoDelMenu}/>
        </div>
    );
    //#endregion
}//end function NavBar

export default NavBar;