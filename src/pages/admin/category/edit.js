// import { useState } from "react";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";

import { get,edit,getId } from "../../../api/categoryAPI";
const EditCategoryForm = (props) =>{
 
 
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
    
      const history = useHistory();
    
      const { id } = useParams();
      const [category, setCategory] = useState({});
    
      useEffect(() => {
        const getCategory = async () => {
          try {
            const { data } = await getId(id);
            setCategory(data);
            reset(data);
          } catch (error) {}
        };
        getCategory();
      }, []);
      const onCategoryEdit = async (item) => {
        try {
          const { data } = await edit(item);
          const newCategory = category.map((value) =>
          value.id == data.id ? data : value
          );
          setCategory(newCategory);
        } catch (error) {
          console.log(error);
        }
        history.push("/admin/category")
      };
      const onSubmit = (data) => {
        const newItem = {
          id,
          ...data
        };
        console.log(newItem);
        onCategoryEdit(newItem);
         ;
      };
      console.log(category);
    return (
        
        
       <form className="space-y-4 text-gray-700 w-full" onSubmit={handleSubmit(onSubmit)}>
  <div className="flex flex-wrap">
    <div className="w-full">
      <label className="block mb-1" htmlFor="formGridCode_card">Name</label>
      <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_card" 
      defaultValue={category.name}
      {...register("name", { required: true })}
      />
      { errors.name && (
        <span className="text-red-400">Phải nhập trường này</span>
      ) }
    </div>
  </div>
  
  
  
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" type="submit">Edit</button>
</form>

    );
}
export default EditCategoryForm;