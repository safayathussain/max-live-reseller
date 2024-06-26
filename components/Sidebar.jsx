'use client'
import { grayColor, primaryColor } from '@/constants/color'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import logo from '@/public/logo.svg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import '../app/globals.css'
import { logoutUser } from '@/utils/functions';
import { CgProfile } from "react-icons/cg";


const Sidebar = ({ open, setOpen }) => {

    const pathname = usePathname();

    const items = [
        {
            title: 'Dashboard',
            icon: <svg width="17" height="14" viewBox="0 0 17 14" fill='none' xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0999 14H10.5999C10.4009 14 10.1999 13.8 10.1009 13.599V10.3C10.1009 9.89699 9.70091 9.599 9.30091 9.599H8.00193C7.60193 9.599 7.30091 9.89699 7.20191 10.3V13.599C7.20191 13.798 7.00291 14 6.70191 14H4.2009C3.3019 14 2.60092 13.397 2.50092 12.498V8.29999H2.30192C2.00192 8.29999 1.60093 8.19697 1.40293 7.89697C0.90293 7.49797 0.803924 6.69702 1.30292 6.19702L1.40293 6.09802L7.70191 0.395996C8.30291 -0.104004 9.10291 -0.104004 9.70191 0.395996L16.0019 6.09802C16.5009 6.49702 16.6009 7.297 16.1019 7.797L16.0019 7.896C15.7019 8.098 15.4029 8.29901 15.0029 8.29901H14.8039V12.497C14.6999 13.399 13.9989 14 13.0999 14ZM8.00092 8.79999H9.40192C10.3009 8.79999 11.0019 9.399 11.1019 10.302V13.201H13.1019C13.5019 13.201 13.8029 12.901 13.9009 12.5V7.89899C13.9009 7.69899 14.1009 7.5 14.4009 7.5H14.9999C15.0999 7.5 15.2999 7.49997 15.3999 7.39697C15.5989 7.19897 15.5989 6.99797 15.3999 6.79797L9.09891 1.099C8.89991 0.898999 8.5989 0.898999 8.3989 1.099L2.09891 6.79797C1.99891 6.89897 1.8989 6.998 1.8989 7.099C1.8989 7.2 1.99891 7.29797 2.09891 7.39697C2.19791 7.49997 2.2989 7.5 2.4979 7.5H3.19892C3.40092 7.5 3.59892 7.69799 3.69892 7.89899V12.5C3.69892 12.901 4.0989 13.201 4.4979 13.201H6.4979V10.302C6.4009 9.399 7.09992 8.69999 8.00092 8.79999Z" fill='#626262' />
            </svg>,
            link: '/dashboard'
        },
        {
            title: 'Leaderboard',
            icon: <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.19995 13.5C4.19995 13.8 3.90095 14.101 3.60095 14H2.30194C1.00294 14 0.00195312 13 0.00195312 11.8V2.20001C0.00195312 1.00001 1.00094 0 2.30194 0H9.30295C10.5029 0 11.601 1.00001 11.601 2.20001V5.5C11.601 5.8 11.303 6 11.002 6C10.701 6 10.502 5.698 10.502 5.5V2.20001C10.502 1.60101 10.0019 1.10101 9.40094 1.10101H2.39993C1.80093 1.10101 1.29895 1.60101 1.29895 2.20001V11.801C1.29895 12.4 1.79893 12.9 2.39993 12.9H3.69995C3.89895 12.899 4.19995 13.101 4.19995 13.5Z" fill="#626262" />
                <path d="M7.79999 3.79999C7.79999 3.59999 7.59899 3.397 7.39999 3.397H3.39999C3.19799 3.397 3 3.59799 3 3.79999C3 4.00199 3.19899 4.19901 3.39999 4.19901H7.39999C7.59899 4.10101 7.79999 3.99999 7.79999 3.79999Z" fill="#626262" />
                <path d="M5.79999 6C5.79999 5.802 5.59899 5.60101 5.39999 5.60101H2.89999C2.69899 5.60101 2.5 5.801 2.5 6C2.5 6.201 2.69999 6.401 2.89999 6.401H5.39999C5.59899 6.399 5.79999 6.2 5.79999 6Z" fill="#626262" />
                <path d="M2.80087 7.79999C2.59887 7.79999 2.40088 8.00001 2.40088 8.19901C2.40088 8.40001 2.59987 8.60199 2.80087 8.60199H4.40088C4.59988 8.60199 4.80087 8.40001 4.80087 8.19901C4.80087 7.99701 4.59888 7.79999 4.40088 7.79999H2.80087Z" fill="#626262" />
                <path d="M12.4009 13.7C12.3009 13.9 12.0009 14 11.8019 14H8.00095C7.60095 14 7.20093 13.601 7.20093 13.201C7.20093 13.1 7.20093 13.1 7.20093 13.002C7.40193 12.103 8.00093 11.401 8.70093 11.103C8.50193 10.802 8.30093 10.502 8.30093 10.104C8.30093 9.304 9.00194 8.604 9.90094 8.604C10.7009 8.604 11.4019 9.304 11.4019 10.104C11.4019 10.503 11.302 10.804 11.002 11.103C11.802 11.504 12.301 12.202 12.502 13.002C12.6 13.3 12.5999 13.5 12.4009 13.7Z" fill="#626262" />
            </svg>,
            link: '/dashboard/leaderboard'
        },
        {
            title: 'History',
            icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.499873 15C0.400873 15 0.199887 14.8989 0.100887 14.7999C0.000886597 14.6989 0.000880491 14.5 0.000880491 14.301L0.899867 11.501C-1.00013 8.10197 0.198873 3.89996 3.49987 1.89996C6.79887 -0.100044 11.0999 1.10197 13.0999 4.50097C15.0999 7.89997 13.8999 12.102 10.4999 14.102C8.30087 15.301 5.70087 15.301 3.49987 14.102L0.699886 15.001C0.699886 15 0.599873 15 0.499873 15ZM3.59887 12.8989C3.69887 12.8989 3.79986 12.899 3.89886 13C6.69886 14.7 10.2989 13.899 11.9989 11.101C13.6989 8.30297 12.8979 4.69996 10.0989 2.99996C7.29887 1.29996 3.69887 2.10095 1.99887 4.89895C0.798866 6.79795 0.798866 9.19895 1.99887 11.098C2.09887 11.199 2.09887 11.397 2.09887 11.598L1.49987 13.598L3.59887 12.8989C3.49987 12.8989 3.49987 12.8989 3.59887 12.8989Z" fill="#626262" />
                <path d="M7.5 7.99997C7.5 8.30197 7.3 8.49997 7 8.49997C6.7 8.49997 6.5 8.30197 6.5 7.99997C6.5 7.69997 6.7 7.50198 7 7.50198C7.3 7.50198 7.5 7.69997 7.5 7.99997Z" fill="#626262" />
                <path d="M10.2988 7.99998C10.2988 8.30198 10.0988 8.49998 9.7998 8.49998C9.5988 8.49998 9.2998 8.30198 9.2998 7.99998C9.2998 7.69998 9.4998 7.502 9.7998 7.502C10.1008 7.5 10.2988 7.69998 10.2988 7.99998Z" fill="#626262" />
                <path d="M4.69995 7.99998C4.69995 8.30198 4.49995 8.49998 4.19995 8.49998C3.90095 8.49998 3.70093 8.30198 3.70093 7.99998C3.70093 7.69998 3.90095 7.502 4.19995 7.502C4.49995 7.5 4.69995 7.69998 4.69995 7.99998Z" fill="#626262" />
            </svg>,
            link: '/dashboard/history'
        },
        {
            title: "Profile",
            icon: (
              <CgProfile />
            ),
            link: "/dashboard/profile",
          }

    ]
    return (
        <div className=''>
            <div className=''>
                <button type="button" onClick={() => {
                    setOpen(true)
                }} className="p-2 sm:pl-5 lg:hidden bg-primary" >
                    <HiMenu size={22} color={'white'} />
                </button>
            </div>
            <div className={`hs-overlay bg-gradiantBg ${open ? 'ml-0' : '-ml-64 lg:ml-0'} transition-all duration-300 transform  fixed top-0 start-0 bottom-0 z-[60] w-64 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 overflow-y-hidden`}>
                <div className="px-6 flex justify-center">
                    <a className="flex-none font-semibold " href="/" >
                        <Image src={logo} alt=''></Image>
                    </a>
                </div>
                <nav className="hs-accordion-group py-6 w-full mt-5 flex flex-col flex-wrap" >
                    <ul className="space-y-0.5">
                        {
                            items.map((item, i) => <li key={i}>
                                <Link  onClick={() => setOpen(false)} className={pathname === item.link ? 'flex items-center gap-x-3.5 py-2 px-8 duration-100 text-white bg-primary' : 'flex items-center gap-x-3.5 py-2 px-8 duration-100 text-grayColor hover:bg-gray-100'} href={item.link}>
                                    <span className={pathname === item.link ? 'active-icon' : 'pending-icon'} >{item.icon}</span>
                                    {item.title}
                                </Link>
                            </li>)
                        }
                    </ul>
                    <div className=''>
                        <div className="w-full flex justify-center ">
                            <button onClick={logoutUser} className='rounded-md block lg:hidden bg-white border border-error text-error w-full mx-5 py-2 text-sm whitespace-nowrap  font-medium mt-4'>
                                Log Out
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar