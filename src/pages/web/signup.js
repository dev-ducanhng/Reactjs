import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { signup } from '../../api/authAPI';
import { authenticate } from '../../auth';
const Signup = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const onSubmit = async (user, e) => {
        try {
            const { data } = await signup(user);
            authenticate(data.user)
            setSuccess(true);
            e.target.reset();
        } catch (error) {
            setError(error.response.data)
        }
    }
    return (
        // <div className="col-6 mx-auto mt-2">
        //     <h2> Đăng ký tài khoản</h2>
        //     <hr />
        //     {error && <div className="alert alert-danger">{error}</div>}
        //     {success && <div className="alert alert-success">Bạn đã đăng ký thành công. Click <Link to="/auth/signin" >vào đây</Link> để login</div>}
        //     <form action="" onSubmit={handleSubmit(onSubmit)} className="">
        //         <div className="mb-3">
        //             <label className="form-label">Username</label>
        //             <input type="text" className="form-control" {...register('username')} />
        //         </div>
        //         <div className="mb-3">
        //             <label className="form-label">Email</label>
        //             <input type="email" className="form-control" {...register('email')} />
        //         </div>
        //         <div className="mb-3">
        //             <label className="form-label">Password</label>
        //             <input type="password" className="form-control" {...register('password')} />
        //         </div>
        //         <button type="submit" className="btn btn-primary btn-lg btn-block">Đăng ký</button>
        //     </form>
        // </div>
        <div className="bg-pink-100 flex h-full" >
        
<div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5 ">
<h1 className="font-bold text-2xl my-10 text-black"> Đăng ký tài khoản </h1>
{error && <div className="alert alert-danger">{error}</div>}
{success && <div className="alert alert-success">Bạn đã đăng ký thành công. Click <Link to="/auth/signin" >vào đây</Link> để login</div>}
<form action className="mt-2 flex flex-col lg:w-1/2 w-8/12" onSubmit={handleSubmit(onSubmit)}>
<div className="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
    <div className="flex -mr-px justify-center w-15 p-4">
      <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
        <i className="fas fa-user-circle" />
      </span>
    </div>
    <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none" placeholder="Name" {...register('username')} />
  </div>
  <div className="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
    <div className="flex -mr-px justify-center w-15 p-4">
      <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
        <i className="fas fa-user-circle" />
      </span>
    </div>
    <input type="email" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none" placeholder="Email" {...register('email')} />
  </div>
  <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
    <div className="flex -mr-px justify-center w-15 p-4">
      <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"> 
        <i className="fas fa-lock" />
      </span>
    </div>
    <input type="password" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none" placeholder="Password" {...register('password')}/>
    <div className="flex -mr-px">
      <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
        <i className="fas fa-eye-slash" />
      </span>
    </div>
  </div>
  <a href="/auth/signup" className="text-base text-white text-right font-roboto leading-normal hover:underline mb-6">Forget Password ?</a>

  <button type="submit" className="bg-pink-500 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20 hover:bg-pink-600">Đăng Ký</button>
</form>
</div>
</div>
    )
}

export default Signup;
