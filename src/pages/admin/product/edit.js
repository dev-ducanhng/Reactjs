// import { useState } from "react";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../../api/productAPI";
import { getAll } from "../../../api/categoryAPI";
const EditProductForm = (props) =>{
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await getAll();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
 
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
    
      const history = useHistory();
    
      const { id } = useParams();
      const [product, setProduct] = useState({});
    
      useEffect(() => {
        const getProduct = async () => {
          try {
            const { data } = await get(id);
            setProduct(data);
            reset(data);
          } catch (error) {}
        };
        getProduct();
      }, []);
      const selected = product.id == categories.id ? "selected" : "";
      const onSubmit = (data) => {
        const newItem = {
          id,
          ...data
        };
        props.onEdit(newItem);
         history.push("/admin/product");
      };
      
    return (
        
        
       <form className="space-y-4 text-gray-700 w-full" onSubmit={handleSubmit(onSubmit)}>
  <div className="flex flex-wrap">
    <div className="w-full">
      <label className="block mb-1" htmlFor="formGridCode_card">Name</label>
      <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_card" 
      defaultValue={product.name}
      {...register("name", { required: true })}
      />
      { errors.name && (
        <span className="text-red-400">Phải nhập trường này</span>
      ) }
    </div>
  </div>
  <div className="flex flex-wrap">
    <div className="w-full">
      <label className="block mb-1" htmlFor="formGridCode_card">Price</label>
      <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="number" id="formGridCode_card" 
       defaultValue={product.price}
       {...register("price", { required: true })}
      />
      { errors.price && (
        <span className="text-red-400">Phải nhập trường này</span>
      ) }
      
    </div>
  </div>
  <div className="flex flex-wrap">
    <div className="w-full">
      <label className="block mb-1" htmlFor="formGridCode_card">Image</label>
      <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_card" 
       defaultValue={product.images}
       {...register("images", { required: true })}
      />
      { errors.price && (
        <span className="text-red-400">Phải nhập trường này</span>
      ) }
      
    </div>
  </div>
  <div className="mb-3">
          <label className="form-label">Danh mục</label>
          <select
            className="form-control"
            {...register("categoryId")}
          >
            {categories.map((category) => (
              <option value={category.id} $selected>{category.name}</option>
            ))}
          </select>
        </div>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" type="submit">Edit</button>
</form>

    );
}
export default EditProductForm;