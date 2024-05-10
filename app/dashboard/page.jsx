"use client";
import React from "react";
import bills from "@/public/bills.svg";
import transactions from "@/public/transactions.svg";
import Image from "next/image";
import { TextField, ThemeProvider } from "@mui/material";
import { theme } from "@/utils/muiTheme";


const page = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="flex justify-between flex-col md:flex-row gap-4">
          <div className="bg-white flex px-8 py-4 rounded-xl  w-full">
            <div className="flex items-center mr-4">
              <Image className="size-12" src={bills}></Image>
            </div>
            <div>
              <p className="font-medium whitespace-nowrap text-[#5C2D95]">
                Available Bills
              </p>
              <p className="text-3xl font-semibold text-[#5C2D95]">26,750</p>
            </div>
          </div>
          <div className="bg-white flex px-8 py-4  rounded-xl w-full">
            <div className="flex items-center mr-4">
              <Image className="size-12" src={transactions}></Image>
            </div>
            <div>
              <p className="font-medium whitespace-nowrap text-[#5C2D95]">
                Total Transactions
              </p>
              <p className="text-3xl font-semibold text-[#5C2D95]">81</p>
            </div>
          </div>
        </div>
        <div className="bg-white mt-6 py-8 px-5 rounded-xl flex flex-col items-center">
          <div className="text-center">
            <p className="text-xl font-semibold text-[#5C2D95]">Send Beans</p>
          </div>
          <div className="flex flex-col max-w-[350px] w-full mt-8 gap-4">
            {/* userid */}
            <div className="relative w-full">
              <input type="text" id="useridField" className="block font-medium focus:border-lightGray text-black px-2.5 pb-2.5 pt-4 w-full bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 peer" placeholder=" " />
              <label htmlFor="useridField" className="text-sm absolute text-lightGray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">USER ID</label>
            </div>
            {/* amount */}
            <div className="relative w-full">
              <input type="text" id="amountField" className="block font-medium focus:border-lightGray text-black px-2.5 pb-2.5 pt-4 w-full bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 peer" placeholder=" " />
              <label htmlFor="amountField" className="text-sm absolute text-lightGray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">AMOUNT</label>
            </div>
            {/* confirm amount */}
            <div className="relative w-full">
              <input type="text" id="confirmamountField" className="block font-medium focus:border-lightGray text-black px-2.5 pb-2.5 pt-4 w-full bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 peer" placeholder=" " />
              <label htmlFor="confirmamountField" className="text-sm absolute text-lightGray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">CONFIRM AMOUNT</label>
            </div>
          </div>
          <div className=" mt-7 max-w-[350px] w-full ">
            <button className=" bg-[#EE6093]  w-full py-2 rounded-lg text-white font-semibold">
              Send
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default page;
