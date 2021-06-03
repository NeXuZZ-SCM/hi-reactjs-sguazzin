import React from 'react'
import { Drawer, useTheme, makeStyles, List, Divider, ListItem, ListItemIcon, ListItemText, Hidden, IconButton } from '@material-ui/core';
import { Menu, ChevronLeft, ChevronRight, MoveToInbox, Mail, ShoppingCart, ContactPhone, EmojiPeople } from '@material-ui/icons';
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
    }
}));

const MobileMenu = ({ estado, onAddMenuLateral }) => {
    const theme = useTheme();
    const classes = useStyles();
    const [subMenu, setsubMenu] = React.useState(estado);

    console.log("MOBILE MENU ESTADO: ", estado);
    const handleToggleMenu = () => {

        setsubMenu((estadoNuevo) => {
            if (estado == true) {
                let estadoNuevo = false;
                onAddMenuLateral(estadoNuevo);
                return estadoNuevo;
            } else {
                let estadoNuevo = true;
                onAddMenuLateral(estadoNuevo);
                return estadoNuevo;
            }
        })
    };

    return (
        <Hidden only={['md', 'lg', 'xl']}>
            <Drawer className={classes.drawer} variant="persistent" anchor="left" open={estado} classes={{ paper: classes.drawerPaper, }} >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleToggleMenu}>
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button key="JavaScript essential" component={Link} to='/category/1'>
                        <ListItemIcon><MoveToInbox /></ListItemIcon>
                        <ListItemText primary="JavaScript essential" />
                    </ListItem>
                    <ListItem button key="JavaScript essential" component={Link} to='/category/2'>
                        <ListItemIcon><MoveToInbox /></ListItemIcon>
                        <ListItemText primary="React Js essential" />
                    </ListItem>
                    <ListItem button key="JavaScript essential" component={Link} to='/category/3'>
                        <ListItemIcon><MoveToInbox /></ListItemIcon>
                        <ListItemText primary="React Js Intermediate" />
                    </ListItem>
                    <ListItem button key="JavaScript essential" component={Link} to='/category/4'>
                        <ListItemIcon><MoveToInbox /></ListItemIcon>
                        <ListItemText primary="React Js Advanced" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="Carrito">
                        <ListItemIcon><ShoppingCart /></ListItemIcon>
                        <ListItemText primary="Carrito" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {['Quienes Somos?', 'Contacto'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <EmojiPeople /> : <ContactPhone />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Hidden>
    )
}

const HamburgerMenu = ({ estado, onAddMenuHam }) => {
    const classes = useStyles();
    const [subMenuHambu, setsubMenuHambu] = React.useState(false);

    const handleToggleMenu = () => {
        console.log("Menu Hamburgesa Estado:", subMenuHambu);

        setsubMenuHambu((estadoNuevo) => {
            if (estado == true) {
                let estadoNuevo = false;
                onAddMenuHam(estadoNuevo);
                return estadoNuevo;
            } else {
                let estadoNuevo = true;
                onAddMenuHam(estadoNuevo);
                return estadoNuevo;
            }
        })
    };
    return (
        <Hidden only={['md', 'lg', 'xl']}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleToggleMenu}>
                <Menu />
            </IconButton>
        </Hidden>
    )
}

export { MobileMenu, HamburgerMenu }
