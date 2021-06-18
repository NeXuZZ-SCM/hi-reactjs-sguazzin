import React, { createContext, useState, useContext, useEffect } from "react";
import Data from "../../data";

export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

const InitialState = {
  addedItem: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export default function DataProvider({ children }) {

  const [data, setData] = useState(InitialState);
  const [product, setProduct] = useState(null);


  const sumQuantity = (data, item) => {
    return (
      data.addedItem.reduce((acc, items) => (acc += items.cantidad), 0) +
      item.cantidad
    );
  };

  const subQuantity = (data, item) => {
    return (
      data.addedItem.reduce((acc, items) => (acc += items.cantidad), 0) -
      item.cantidad
    );
  };



  const addItem = (item) => {
    const totalSum = () => {
      return (
        data.addedItem.reduce(
          (acc, items) => (acc += items.precio * items.cantidad),
          0
        ) +
        item.cantidad * item.precio
      );
    };
    const isInCart = data.addedItem.find((added) => added.id === item.id);
    const suma = totalSum(data, item);
    const cantidad = sumQuantity(data, item);
    if (isInCart) {
      isInCart.cantidad += item.cantidad;
      setData({ ...data, totalPrice: suma });
    } else {
      const newAddedItems = [...data.addedItem, item];
      setData({
        ...data,
        addedItem: newAddedItems,
        totalPrice: totalSum(data.totalPrice, item),
        totalQuantity: cantidad,
      });
    }
  };

  const clear = () => {
    setData(InitialState);
  };

  const removeItem = (item) => {
    const removeSum = () => {
      return data.addedItem.reduce(
        (acc, items) => (acc += items.precio * items.quantity),
        0
      );
    };
    const removeItem = data.addedItem.findIndex(
      (remove) => remove.id === item.id
    );
    const cantidad = subQuantity(data, item);
    if (removeItem !== -1) {
      data.addedItem.splice(removeItem, 1);
      setData({
        ...data,
        totalPrice: removeSum(data.totalPrice, item),
        totalQuantity: cantidad,
      });
    } else {

    }
  };

  return (
    <DataContext.Provider value={{
      data,
      addItem,
      clear,
      removeItem,
      product
    }}>
      {children}
    </DataContext.Provider>
  )
}

