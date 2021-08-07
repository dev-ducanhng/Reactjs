// import { useState } from "react";
import { useForm } from 'react-hook-form';
const AddProductForm = (props) =>{
  const { register, handleSubmit, formState: { errors }}=useForm();
  
const onSubmit = (data) => {
  console.log(data);
  const newItem = {
          id : Math.random().toString(7).substring(5),
          ...data
        };
        
        props.onAdd(newItem);
}
    return (
        
        
       <form className="space-y-4 text-gray-700 w-full" onSubmit={handleSubmit(onSubmit)}>
  <div className="flex flex-wrap">
    <div className="w-full">
      <label className="block mb-1" htmlFor="formGridCode_card">Name</label>
      <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_card" 
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
       {...register("price", { required: true })}
      />
      { errors.price && (
        <span className="text-red-400">Phải nhập trường này</span>
      ) }
    </div>
  </div>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" type="submit">Add</button>
</form>

    );
}
export default AddProductForm;