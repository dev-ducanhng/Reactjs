import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getAll } from "../../../api/categoryAPI";
export default function ListProduct(props) {
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
  return (
    <>
       
    <main className="w-full flex-grow p-6">
      <h1 className="text-3xl text-black pb-6">Dashboard</h1>
     
  <Link to="/admin/product/add" className="w-32 bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            Thêm sản phẩm
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
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">STT</th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Image</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
                {/* <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Category</th> */}
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                </th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {props.data.map( (item, index) => (
                    <tr key={index}>
                <td className="w-1/3 text-left py-3 px-4">{index+1}</td>
                <td className="w-1/3 text-left py-3 px-4">{item.name}</td>
                
                <td className="w-1/3 text-left py-3 px-4">
                <img className="w-32" src= {item.images} />
                  </td>
                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">{item.price}</a></td>
                {/* <td>{item.category.name}</td> */}
                <td className="text-left py-3 px-4">
                  <div className="flex">
                   
                    <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    to={`/admin/product/${item.id}/edit`}
                  >
                    Edit
                  </Link>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded"
                    onClick={() => props.onRemove(item.id)}
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
  );
}
