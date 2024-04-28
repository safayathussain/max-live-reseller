"use client";
import React from "react";
import bills from "@/public/bills.svg";
import transactions from "@/public/transactions.svg";
import Image from "next/image";
import { TextField } from "@mui/material";


const page = () => {
  return (
    <div>
      <div className="flex justify-between flex-col lg:flex-row gap-4">
        <div className="bg-white flex px-8 py-4 pr-[18vw] rounded-xl ">
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
        <div className="bg-white flex px-8 py-4 pr-[18vw] rounded-xl">
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
      <div className="bg-white mt-6 py-8">
        <div className="text-center">
          <p className="text-xl font-semibold text-[#5C2D95]">Send Beans</p>
        </div>
        <div className="flex flex-col lg:mx-[20vw] mt-8">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" color="primary" />
        </div>
        <div className="lg:mx-[20vw] flex justify-center mt-12">
          <button className="lg:w-[20vw] bg-[#EE6093] px-[108px] py-2 rounded-lg text-white font-semibold">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
