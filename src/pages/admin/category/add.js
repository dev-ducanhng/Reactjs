// import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { getAll,add } from "../../../api/categoryAPI";
import { useEffect, useState } from "react";
const AddCategoryForm = (props) => {
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
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onHandleAdd = async (item) => {
        try {
            const { data } = await add(item);
            setCategories([...categories, data]);
        } catch (error) {
            console.log(error);
        }
        history.push("/admin/category");
    };
    const history = useHistory();
    const onSubmit = (data) => {
        console.log(data);
        const newItem = {
            id: Math.random().toString(7).substring(5),
            ...data
        };
        onHandleAdd(newItem);
    }

    return (


        <form className="space-y-4 text-gray-700 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <label className="block mb-1" htmlFor="formGridCode_card">Name</label>
                    <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_card"
                        {...register("name", { required: true })}
                    />
                    {errors.name && (
                        <span className="text-red-400">Phải nhập trường này</span>
                    )}
                </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" type="submit">Add</button>
        </form>

    );
}
export default AddCategoryForm;