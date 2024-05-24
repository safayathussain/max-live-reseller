'use client'
import Image from 'next/image';
import logo from '@/public/logo.svg'
import Link from 'next/link';
import { useState } from 'react';
import '@/styles/prime-react.css'
import { PrimeReactProvider } from 'primereact/api';
import { FileUpload } from 'primereact/fileupload';

const page = () => {
  const [showUploadField, setShowUploadField] = useState(false)
  setTimeout(() => {
    setShowUploadField(true)
    return
  }, 2000)
  return (
    <PrimeReactProvider>
      <div className="bg-white w-full min-h-[calc(100vh-200px)] flex items-center justify-center rounded-lg ">
        <div className='flex justify-center px-8 py-4 text-center'>
          <div className='flex flex-col items-center gap-4'>
            <p className='text-xl text-grayColor'>Your Profile</p>
            <div className='relative w-max text-white'>
              <Image src={logo} alt='' className='rounded-full'></Image>
              <button className='bg-error rounded-full flex justify-center items-center size-7 absolute right-2 top-[70%]'>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2336 10.6827C13.2336 10.9866 13.1128 11.278 12.898 11.4929C12.6831 11.7078 12.3916 11.8285 12.0877 11.8285H1.77912C1.47523 11.8285 1.18379 11.7078 0.968904 11.4929C0.754021 11.278 0.633301 10.9866 0.633301 10.6827V4.38183C0.6337 4.0782 0.754596 3.78715 0.969436 3.57259C1.18428 3.35803 1.47549 3.23752 1.77912 3.23752H4.07001L5.21507 1.51917H8.65178L9.7976 3.23752H12.0885C12.392 3.23772 12.683 3.35832 12.8977 3.57285C13.1124 3.78739 13.2332 4.07833 13.2336 4.38183V10.6827Z" fill="#EE6093" stroke="white" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.22435 7.24624C9.22435 7.69933 9.09 8.14225 8.83827 8.51899C8.58654 8.89572 8.22876 9.18935 7.81015 9.36274C7.39155 9.53613 6.93092 9.5815 6.48654 9.49311C6.04215 9.40471 5.63395 9.18653 5.31356 8.86614C4.99318 8.54575 4.77499 8.13756 4.6866 7.69317C4.5982 7.24878 4.64357 6.78816 4.81696 6.36955C4.99035 5.95095 5.28398 5.59316 5.66072 5.34144C6.03745 5.08971 6.48037 4.95535 6.93347 4.95535C7.54105 4.95535 8.12374 5.19671 8.55337 5.62634C8.98299 6.05596 9.22435 6.63866 9.22435 7.24624Z" fill="#EE6093" stroke="white" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="card">
                {
                  showUploadField && <FileUpload mode='basic' name="demo[]" url={'/api/upload'} accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                }
              </div>
            </div>
            <div>
              <div className="flex flex-col  sm:min-w-[350px] w-full mt-4 gap-4">
                <div className="relative w-full">
                  <input
                    type="email"
                    id="useridField"
                    className="block font-medium focus:border-lightGray text-black pb-2.5 pt-4 w-full bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="useridField"
                    className="text-sm absolute text-lightGray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Your Email
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type="email"
                    id="useridField"
                    className="block font-medium focus:border-lightGray text-black pb-2.5 pt-4 w-full bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="useridField"
                    className="text-sm absolute text-lightGray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type="email"
                    id="useridField"
                    className="block font-medium focus:border-lightGray text-black pb-2.5 pt-4 w-full bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="useridField"
                    className="text-sm absolute text-lightGray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Your Id
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type="email"
                    id="useridField"
                    className="block font-medium focus:border-lightGray text-black pb-2.5 pt-4 w-full bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="useridField"
                    className="text-sm absolute text-lightGray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Your Validity
                  </label>
                </div>
              </div>
              <div className="mt-3 max-w-[350px] w-full flex justify-start">
                <button className=" whitespace-nowrap bg-primary px-5 py-2 rounded-lg text-white font-semibold">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrimeReactProvider>
  );
};

export default page;
