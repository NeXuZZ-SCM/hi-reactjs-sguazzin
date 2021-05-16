import React from 'react';
import {AppBar, useTheme, Drawer, List,Divider, ListItem, ListItemIcon, ListItemText, Hidden, makeStyles, Toolbar, Typography, Button, IconButton, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList} from '@material-ui/core';
import {Menu, Store, Computer, ChevronLeft, ChevronRight, MoveToInbox, Mail, ShoppingCart, ContactPhone, EmojiPeople} from '@material-ui/icons';
import CartWidget from './CartWidget';

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
    const [subMenu, setsubMenu] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const theme = useTheme();
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
        setsubMenu((prevOpen) => !prevOpen);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
        setOpen(false);
        setsubMenu(false);
    };
    //#endregion
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
          setsubMenu(false);
        }
    }
    //#region Return
    return(

        <div className={classes.root}>
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <Hidden only={['md', 'lg', 'xl']}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleToggle}>
                    <Menu />
                </IconButton>
                </Hidden>
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
                </Hidden>
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
            </Toolbar>
        </AppBar>
        <Hidden only={['md', 'lg', 'xl']}>
        <Drawer className={classes.drawer} variant="persistent" anchor="left" open={subMenu} classes={{paper: classes.drawerPaper,}} >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleToggle}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Accesorios', 'Monitores', 'PC', 'Impresoras'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />                      
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
            <ListItem button key="Carrito">
              <ListItemIcon><ShoppingCart /></ListItemIcon>
              <ListItemText primary="Carrito"/>                      
            </ListItem>
        </List>
        <Divider />
        <List>
          {['Quienes Somos?','Contacto'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <EmojiPeople /> : <ContactPhone />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </Hidden>
        </div>
    );
    //#endregion
}//end function NavBar

export default NavBar;