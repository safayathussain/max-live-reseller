'use client'
import Image from "next/image";
import Link from "next/link";
import logo from '@/public/logo.svg'
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "@/redux/slices/AuthSlice";
// import { useEffect } from "react";
import axios from "axios";
import { FetchApi } from "@/utils/FetchApi";
import { useRouter } from "next/navigation";
import {  loginUser, useAuth } from "@/utils/functions";
import { TextField } from "@mui/material";
import TextInput from "@/components/TextInput";
import { useEffect } from "react";



const page = () => {

  const router = useRouter()
  const { auth } = useAuth()
  const dispatch = useDispatch()
  useEffect(() => {
    if (auth?.role === 'BR') {
      return router.push('/dashboard')
    }
    else {
      dispatch(setAuth({}))
    }
    
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.pass.value
    await loginUser(email, password)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white mt-6 py-8 px-5 rounded-xl flex flex-col items-center w-96">
        <div className="flex justify-center mb-4">
          <Image src={logo} alt=""></Image>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold text-[#5C2D95]">Reseller Login</p>
        </div>
        <div className="flex flex-col max-w-[350px] w-full mt-5 gap-3">
          {/* email */}
          <div className="relative w-full">
            <TextInput label={'Email'} name={'email'} id={'emailField'} />
          </div>
          {/* password */}
          <div className="relative w-full">
            <TextInput label={'Password'} name={'password'} type={'password'} id={'pass'} />
          </div>
          <div className="flex justify-end">
            <Link className="text-xs text-primary underline" href="/reset-password">Reset Password?</Link>
          </div>
        </div>
        <div className="mt-2 max-w-[350px] w-full ">
          <button className=" bg-primary  w-full py-2 rounded-lg text-white font-semibold">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
