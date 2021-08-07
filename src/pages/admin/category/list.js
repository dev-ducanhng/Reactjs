import React from 'react';
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { getAll,remove } from "../../../api/categoryAPI";
export default function ListCategory(props){
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

  const onHandleRemove = async (id) => {
    let Remove = window.confirm('Đồng ý xoá ?');
    if (Remove) {
    try {
      const { data } = await remove(id);
      const newCategory = categories.filter((item) => item.id !== id);
      setCategories(newCategory);
    } catch (error) {
      console.log(error);
    }
  }
  };
  
    return (
        <>
       
             <main className="w-full flex-grow p-6">
      <h1 className="text-3xl text-black pb-6">Dashboard</h1>
     
  <Link to="/admin/category/add" className="w-32 bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            Thêm Category
          </Link>
  
  <hr/>
      <div className="w-full mt-12">
        <p className="text-xl pb-3 flex items-center">
          <i className="fas fa-list mr-3" /> Latest Reports
        </p>
        <div className="bg-white overflow-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">ID</th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Image</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                </th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {categories.map((category) => (
                    <tr key={category.id}>
                <td className="w-1/3 text-left py-3 px-4">{category.id}</td>
                <td className="w-1/3 text-left py-3 px-4">{category.name}</td>
                <td className="text-left py-3 px-4">
                  <div className="flex">
                   
                    <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    to={`/admin/category/${category.id}/edit`}
                  >
                    Edit
                  </Link>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded"
                    onClick={() => onHandleRemove(category.id)}
                    >
                      Remove
                    </button>
                  </div>

                </td>
              </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
            </>
    )
}