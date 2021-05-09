import React from 'react';
import {AppBar, Hidden,makeStyles, Toolbar, Typography,Button,IconButton,ClickAwayListener,Grow,Paper,Popper, MenuItem,MenuList} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Store from '@material-ui/icons/Store';
import Computer from '@material-ui/icons/Computer';



import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


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
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
          setsubMenu(false);
        }
    }


    // const handleDrawerOpen = () => {
    //     setsubMenu(true);
    //   };
    // const handleDrawerClose = () => {
    //     setsubMenu(false);
    //   };

    return(

        <div className={classes.root}>
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <Hidden only={['md', 'lg', 'xl']}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleToggle}>
                    <MenuIcon />
                </IconButton>
                </Hidden>
                <Typography variant="h5" color="initial" className={classes.title}>
                👋Hi-React
                </Typography>
                <Hidden only={['sm', 'xs']}>
                <Button variant="outlined"
                        color="default"
                        className={classes.button}
                        startIcon={<Store />}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}>
                    <Typography variant="body1" className={classes.title}>
                    Nuestros Productos
                    </Typography>
                    
                </Button>
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
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={subMenu}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleToggle}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Accesorios', 'Monitores', 'PC', 'Impresoras'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Quienes Somos?','Contacto'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </Hidden>
        </div>
    );
}

export default NavBar;