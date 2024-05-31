'use client'
import TextInput from '@/components/TextInput';
import React from 'react'


const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const userid = e.target.userid.value
    const username = e.target.username.value
    const password = e.target.password.value
    console.log(userid, username, password)
  }

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
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col  w-full mt-5 gap-4">
                {/* userid */}
                <div className="relative w-full">
                <TextInput label={'User ID'} name={'UserID'} id={'userid'} />
                </div>
                {/* username */}
                <div className="relative w-full">
                <TextInput label={'User Name'} name={'UserName'} id={'username'} />
                </div>
                {/* password */}
                <div className="relative w-full">
                <TextInput label={'Password'} name={'Password'} id={'userpass'} />
                </div>
              </div>
              <div className=" mt-24 max-w-[350px] w-full ">
                <button className=" bg-[#EE6093]  w-full py-2 rounded-lg text-white font-semibold" type="submit">
                  Add Reseller
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;


