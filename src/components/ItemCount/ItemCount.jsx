import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import { Add, Remove } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid gray',
    width: '12rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}))

const ItemCount = ({ stock, initial, onAdd }) => {
  const classes = useStyles()
  const [estado, setEstado] = useState(initial)

  useEffect(() => {
    console.log(`Hiciste click ${estado} veces`)
  }, [estado])

  // #region Funciones de incremento y decremento
  const incrementar = (e) => {
    if (stock > estado) {
      setEstado((estado) => {
        const contador = estado + 1
        onAdd(contador)
        return contador
      })
    }
  }
  const reducir = (e) => {
    if (estado > 1) {
      setEstado((estado) => {
        const contador = estado - 1
        onAdd(contador)
        return contador
      })
    }
  }
  // #endregion

  return (
    <>
      <div className={classes.container}>
        <div className={classes.root}>
          <IconButton onClick={reducir} >
            <Remove />
          </IconButton>
          {estado}
          <IconButton onClick={incrementar}>
            <Add />
          </IconButton>
        </div>
      </div>
    </>
  )
}

ItemCount.propTypes = {
  stock: PropTypes.number,
  initial: PropTypes.number,
  onAdd: PropTypes.func
}
export default ItemCount
