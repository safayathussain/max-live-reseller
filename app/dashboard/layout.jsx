"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import {  logoutUser, useAuth } from "@/utils/functions";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const {auth, token, refetchAuth} = useAuth()
  if (auth?.role !== 'BR') return router.push('/login')
  const currentTime = Date.now() / 1000;
  const decodedData = jwtDecode(token);
  if (decodedData.exp < currentTime) {
    logoutUser()
  }
  useEffect(() => {
    refetchAuth()
  }, [])
  return (
    <div className="min-h-screen">
      <div className="flex items-center bg-primary">
        <Sidebar open={open} setOpen={setOpen} />
        <Navbar />
      </div>
      <div
        className={`w-full h-full bg-black fixed z-20 top-0 left-0 opacity-45 ${open ? "block" : "hidden"
          }`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`w-full relative h-full lg:ml-[255px] lg:max-w-[calc(100vw-255px)] px-7 py-7 lg:px-14 lg:py-10`}
        onClick={() => setOpen(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
