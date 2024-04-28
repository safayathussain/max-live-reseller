const page = () => {
  return (
    <div>
      <div>
        <p className="text-xl text-[#5C2D95] font-bold">
          User Reseller Portal
        </p>
      </div>
      <div className="bg-white rounded-lg w-full py-16 flex justify-center items-center mt-6">
        <div className='lg:border-[#D5ADF6] sm:border lg:border-[4px] rounded-lg p-8'>
          <div>
            <p className='text-md font-semibold text-[#5C2D95]'>User Id</p>
          </div>
          <div>
            <div className="mx-auto mt-8">
              <input
                type="text"
                className="w-full lg:w-[20vw] rounded-lg py-2 px-4 border-[1px] border-[#A7A7A7] outline-none"
              />
              <p className="relative bottom-[48px] left-4 text-gray-400 bg-white w-20 font-semibold pl-1 text-[9px]">
                User ID
              </p>
              <div className="mx-auto mt-2">
                <input
                  type="text"
                  className="w-full lg:w-[20vw] rounded-lg py-2 px-4 border-[1px] border-[#A7A7A7] outline-none"
                />
                <p className="relative bottom-[48px] left-4 text-gray-400 bg-white w-20 font-semibold pl-1 text-[9px]">
                  User Name
                </p>
              </div>
              <div className="mx-auto mt-2">
                <input
                  type="text"
                  className="w-full lg:w-[20vw] rounded-lg py-2 px-4 border-[1px] border-[#A7A7A7] outline-none"
                />
                <p className="relative bottom-[48px] left-4 text-gray-400 bg-white w-20 font-semibold pl-1 text-[9px]">
                  Password
                </p>
              </div>
              <div className='mt-44'>
                <button className='lg:w-[20vw] bg-[#EE6093] px-[108px] py-2 rounded-lg text-[9px] whitespace-nowrap text-white font-semibold mx-auto'><span>Add Reseller</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
