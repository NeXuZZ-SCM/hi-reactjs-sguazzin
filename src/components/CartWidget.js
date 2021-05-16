import { IconButton } from '@material-ui/core'
import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartWidget = () => {
    return (
            <IconButton color="inherit">
                <ShoppingCartIcon />
            </IconButton>
    )
}

export default CartWidget
