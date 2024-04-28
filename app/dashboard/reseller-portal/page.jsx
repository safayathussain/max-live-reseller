'use client'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <p className="text-xl text-[#5C2D95] font-bold">
          User Reseller Portal
        </p>
      </div>
      <div className="bg-white rounded-lg w-full py-16 flex justify-center items-center mt-6 ">
        <div className='sm:border-[#D5ADF6] sm:border-[2px] md:border-[4px] rounded-lg p-8 max-w-[350px] w-full'>
          <div>
            <p className='text-md font-semibold text-[#5C2D95]'>User Id</p>
          </div>
          <div>
            <div className="flex flex-col  w-full mt-8 gap-4">
              {/* userid */}
              <div class="relative w-full">
                <input type="text" id="useridField" className="block font-medium focus:border-lightGray text-black px-2.5 pb-2.5 pt-4 w-full bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 peer" placeholder=" " />
                <label for="useridField" className=" text-sm absolute text-lightGray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">USER ID</label>
              </div>
              {/* username */}
              <div class="relative w-full">
                <input type="text" id="username" className="block font-medium focus:border-lightGray text-black px-2.5 pb-2.5 pt-4 w-full bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 peer" placeholder=" " />
                <label for="username" className=" text-sm absolute text-lightGray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">USERNAME</label>
              </div>
              {/* password */}
              <div class="relative w-full">
                <input type="password" id="password" className="block font-medium focus:border-lightGray text-black px-2.5 pb-2.5 pt-4 w-full bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 peer" placeholder=" " />
                <label for="password" className=" text-sm absolute text-lightGray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">PASSWORD</label>
              </div>
            </div>
            <div className=" mt-24 max-w-[350px] w-full ">
              <button className=" bg-[#EE6093]  w-full py-2 rounded-lg text-white font-semibold">
                Add Reseller
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;




