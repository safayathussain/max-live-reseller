'use client'
import Image from "next/image";
import logo from "@/public/logo.svg";
import { useEffect, useState } from "react";
import { FetchApi } from "@/utils/FetchApi";

const Page = () => {
  const [resellerData, setresellerData] = useState([])
 useEffect(() => {
  const loadData = async() => {
    const {data} =await FetchApi({url: 'user/getAllUser'})
    setresellerData(data.users.users.filter(user => user.role === 'BR'))

  }
  loadData()
 }, [])
 

  return (
    <div>
      <div>
        <p className="text-xl text-[#5C2D95] font-bold">This Month Ranking</p>
      </div>
      <div className="bg-white p-4 mt-6 rounded-lg">
        {resellerData.map((item, index) => (
          <div key={index} className="flex p-1 sm:p-5 bg-[#EEF0F6] rounded-md border-[#5C2D95] border border-opacity-50 items-center justify-between mb-2">
            <div className='flex items-center'>
              <p className="font-medium text-lg mr-5">{index + 1}.</p>
              <div className="ml-2 text-[#5C2D95]">
                <p className=" sm:text-base">Reseller Name: <span className="font-medium">{item.firstName + ' ' + item.lastName}</span></p>
                <p className="text-xs">ID: <span className="font-medium">{item.maxId}</span></p>
              </div>
            </div>
            <div>
              <p className="text-[#5C2D95] font-bold text-lg mr-2">{item.beansSent || 0}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
