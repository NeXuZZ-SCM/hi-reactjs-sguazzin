import React, { createContext, useState, useContext, useEffect } from "react";
import Data from "../../data";

export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

const InitialState = {
  addedItem: [],
  totalPrice: 0,
}

export default function DataProvider({ children }) {

  const [data, setData] = useState(InitialState);
  const [product, setProduct] = useState(null);

  const addItem = (item) => {
    const totalSum = () => {
      return data.addedItem.reduce(
        (acc, items) => (acc += items.precio * items.cantidad), 0
      );
    }
    const existInData = data.addedItem.find((added) => added.id === item.id);
    if (existInData) {
      existInData.cantidad += item.cantidad;
      setData({ ...data });
    } else {
      const newAddedItems = [...data.addedItem, item];
      setData({ ...data, addedItem: newAddedItems, totalPrice: totalSum(data.totalPrice, item) });
    }
  }

  const clear = () => {
    setData(InitialState);
  }

  const removeItem = (item) => {
    if (data.addedItem.filter((remove) => remove.id !== item.id)) {
      console.log("item removido");
    }
  }

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      resolve(Data);
      console.log(Data);
    });
    getItems.then((result) => {
      setProduct(result);
    });
  }, []);



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

