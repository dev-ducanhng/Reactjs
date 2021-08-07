import React from "react"; 
import { Link } from "react-router-dom";
const NotFound = ()=>{
    return (
        <div className="text-center">
        <h2 className="text-red-400">Lỗi đường dẫn</h2>
        <Link to="/" className="w-32 bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center mx-auto">
            Quay về trang chủ
          </Link>
        </div>
    )
}
export default NotFound;