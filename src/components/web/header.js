import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { getAll } from "../../api/categoryAPI";
import { useHistory } from "react-router";
import { isAuthenticated } from "../../auth";
import { useLocation } from "react-router-dom";
import { NavLink, Redirect } from "react-router-dom";
import { signout } from "../../auth";
export default function Header(props) {
  
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
 
  const history = useHistory();
  const { pathname } = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  // const { user: { email, id } } = isAuthenticated();
  useEffect(() => {
    isAuthenticated() && setIsLogged(true);
  }, [pathname, isLogged]);

  // check login để render lại menu
  const checkLogin = () => {
    if (pathname !== "/signin" && isLogged) {
      return (
        <>
          
          <a
            onClick={() =>
              signout(() => {
                history.push("/");
                setIsLogged(false);
              })
            }
          >
            Sign Out
          </a>
        </>
      );
    } else if (pathname === "/signin" && isLogged) {
      return <Redirect to="/" />;
    } else {
      return (
        <>
          <NavLink className="bg-red-600 h-14 px-6 py-2 font-semibold rounded-xl  hover:bg-red-500 text-white" to="/auth/signin">Đăng nhập</NavLink>

          
        </>
      );
    }
  };
  const searchSubmit = async (event) => {
    props.searchSubmit(event.target.value);
  };
  return (
    <div>
      <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li >
                  <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to='/'>Home</Link>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to={`/category/${category.id}`}>{category.name}</Link>
                  </li>
                ))}
                <li >
                  <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to='/contac'>Liên Hệ</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div><input
                      onChange={searchSubmit}
                      type="text"
                      className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      placeholder="Search"
                    /></div>
          <div className="order-1 md:order-2">
            <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
              <svg className="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
              </svg>
              NORDICS
            </a>
          </div>
          <div className="order-2 md:order-3 flex items-center" id="nav-content">

           
            <a className="pl-3 inline-block no-underline hover:text-black" href="#">
              <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
              </svg>
              
            </a>
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                {checkLogin()}
                </div>
              </div>
          </div>
        </div>
      </nav>

    </div>

  )
}