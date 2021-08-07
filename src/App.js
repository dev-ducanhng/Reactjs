
import { useEffect, useState } from "react";
import './App.css';

import { add, getAll, remove, edit,search } from "./api/productAPI";
import Routes from "./Routes";

export default function App() {
  const [products, setProducts] = useState([]);
  
  // console.log(products);
  useEffect(() => {
    // Danh sach
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  // Xoa san pham
  const onHandleRemove = async (id) => {
    let Remove = window.confirm('Đồng ý xoá ?');
    if(Remove){
    try {
      const { data } = await remove(id);
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  }
  };
  // Them san pham
  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleEdit = async (item) => {
    console.log("app.js", item);
    try {
      const { data } = await edit(item);
      console.log(data);
      const newProducts = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  const searchPro = async (keyword) => {
    const dataSearch = await search(keyword);
    setProducts(dataSearch.data);
    console.log(dataSearch);
  };
  
  return (
    <>

      <Routes 
        data={products}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onEdit={onHandleEdit}
        searchSubmit={searchPro}
      />
    </>
  )
};


