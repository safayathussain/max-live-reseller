"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import useClickOutside from "@/hooks/useClickOutside";
import Modal from "@/components/Modal";
import { FetchApi } from "@/utils/FetchApi";
import TextInput from "@/components/TextInput";

export default function HistoryTable() {

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [open, setOpen] = useState(false);

    const ref = useRef(null);
    useClickOutside(ref, () => {
        setOpen(false);
    });
    const loadData = async () => {
        const { data } = await FetchApi({ url: `user/getAllUser` })
        setUsers(data?.users.users)
    }
    useEffect(() => {
        loadData()
    }, [])
    let searchedUsers = users.filter((user) =>
        user._id.includes(searchTerm)
    );

    // Function to handle sorting
    const handleSort = (key) => {
        if (key === sortBy) {
            // Toggle sorting order if clicking on the same key
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            // Set new sorting key
            setSortBy(key);
            setSortOrder("asc");
        }
    };

    if (sortBy) {
        searchedUsers = searchedUsers.sort((a, b) => {
            const compareA = a[sortBy];
            const compareB = b[sortBy];
            if (compareA < compareB) {
                return sortOrder === "asc" ? -1 : 1;
            }
            if (compareA > compareB) {
                return sortOrder === "asc" ? 1 : -1;
            }
            return 0;
        })
    }

    // Pagination
    const showingText = `Showing ${(currentPage - 1) * itemsPerPage + 1} to ${((currentPage - 1) * itemsPerPage) < Math.ceil(searchedUsers.length / itemsPerPage) ? (currentPage * itemsPerPage) : searchedUsers.length} of ${searchedUsers.length}`;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = searchedUsers.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    return (
        <div className=" overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between  pb-4">
                <div className="w-full md:w-1/2 py-1">
                    <form className="flex items-center">
                        <div className="relative w-full">
                            <TextInput onChange={(e) => setSearchTerm(e.target.value)} placeholder={'Search By Id'} name={'Search'} id={'idSearch'} />

                        </div>
                    </form>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-lightGray uppercase  bg-white">
                        <tr>
                            <th className="px-4 py-3 cursor-pointer ">
                                <span className=" flex items-center font-medium">
                                    Sl
                                </span>
                            </th>
                            <th className="px-4 py-3 cursor-pointer ">
                                <span className=" flex items-center font-medium">
                                    Full Name
                                </span>
                            </th>
                            <th className="px-4 py-3 cursor-pointer">
                                <span className=" flex items-center font-medium">
                                    Email Address
                                </span>
                            </th>
                            <th className="px-4 py-3 cursor-pointer">
                                <span className=" flex items-center font-medium">
                                    Date
                                </span>
                            </th>
                            <th className="px-4 py-3 cursor-pointer">
                                <span className=" flex items-center font-medium">
                                    Beans
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user, i) => (
                            <tr key={user._id} className="border-b whitespace-nowrap">
                                <td className="px-4 py-4">{i + 1}</td>
                                <td onClick={() => setOpen(true)} className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap cursor-pointer">
                                    {user.firstName}
                                </td>
                                <td className="px-4 py-4">{user.email}</td>
                                <td className="px-4 py-4">{user.date}</td>
                                <td className="px-4 py-4">{user.beans}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                {
                    currentUsers.length === 0 && <div className="w-full my-12 text-lightGray flex items-center justify-center">
                        <p className="text-xl font-medium text-center">No Data Found</p>
                    </div>
                }
            </div>
            {/* page footer */}
            {
                currentUsers.length !== 0 &&
                <div className="flex flex-col gap-3 md:flex-row justify-between my-10 md:px-5">
                    {/* page number */}

                    <div className="flex justify-start items-center font-semibold">
                        {showingText}
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-start md:justify-end items-center">
                        <nav aria-label="Pagination">
                            <ul className="inline-flex border rounded-sm">
                                <li>
                                    <button
                                        className="py-2 px-4 text-gray-700 bg-gray-100 text-xs sm:text-sm focus:outline-none"
                                        onClick={() => paginate(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        &#x2190;
                                    </button>
                                </li>
                                <li>
                                    {
                                        currentPage !== 1 &&
                                        <button
                                            onClick={() => paginate(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className={`py-2 px-4  bg-white text-gray-700 text-xs sm:text-sm hover:!bg-gray-50 focus:outline-none `}
                                        >
                                            {currentPage - 1}
                                        </button>
                                    }
                                    <button
                                        className={`py-2 px-4 text-gray-700 bg-gray-100 text-xs sm:text-sm focus:outline-none`}
                                    >
                                        {currentPage}
                                    </button>
                                    {
                                        currentPage !== Math.ceil(searchedUsers.length / itemsPerPage) &&
                                        <button
                                            disabled={
                                                currentPage === Math.ceil(searchedUsers.length / itemsPerPage)
                                            }
                                            onClick={() => paginate(currentPage + 1)}
                                            className={`py-2 px-4  bg-white text-gray-700 text-xs sm:text-sm hover:!bg-gray-50 focus:outline-none `}
                                        >
                                            {currentPage + 1}
                                        </button>
                                    }
                                    <span
                                        className={`py-2 px-4  bg-white text-gray-700 text-xs sm:text-sm hover:bg-gray-100 focus:outline-none cursor-not-allowed`}
                                    >
                                        ...
                                    </span>
                                    <button
                                        className={`py-2 px-4  bg-white text-gray-700 text-xs sm:text-sm hover:bg-gray-100 focus:outline-none `}
                                    >
                                        {Math.ceil(searchedUsers.length / itemsPerPage)}
                                    </button>
                                    <button
                                        className="py-2 px-4 text-gray-700 bg-gray-100 text-xs sm:text-sm focus:outline-none"
                                        onClick={() => paginate(currentPage + 1)}
                                        disabled={
                                            currentPage === Math.ceil(searchedUsers.length / itemsPerPage)
                                        }
                                    >
                                        &#x2192;
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>


                </div>
            }
            <Modal open={open} >
                <form ref={ref} className=''>
                    <div className="px-7 py-9 bg-white rounded-md  max-w-[400px] w-full  border-4 border-primary">
                        <div className="">
                            <p className="text-xl font-bold text-[#5C2D95]">Reseller Details</p>
                            <div className='grid grid-cols-2 w-full mt-5 gap-4'>
                                <div className='p-4 bg-silver hover:bg-lightPink duration-200 hover:text-white cursor-pointer w-full rounded-md text-secondary'>
                                    <p className='text-sm'>Daily earnings</p>
                                    <p className='text-xl font-bold'>31,321</p>
                                </div>
                                <div className='p-4 bg-silver hover:bg-lightPink duration-200 hover:text-white cursor-pointer w-full rounded-md text-secondary'>
                                    <p className='text-sm'>Daily earnings</p>
                                    <p className='text-xl font-bold'>31,321</p>
                                </div>
                                <div className='p-4 bg-silver hover:bg-lightPink duration-200 hover:text-white cursor-pointer w-full rounded-md text-secondary'>
                                    <p className='text-sm'>Daily earnings</p>
                                    <p className='text-xl font-bold'>31,321</p>
                                </div>
                                <div className='p-4 bg-silver hover:bg-lightPink duration-200 hover:text-white cursor-pointer w-full rounded-md  text-secondary'>
                                    <p className='text-sm'>Current earnings</p>
                                    <p className='text-xl font-bold'>31,321</p>
                                </div>
                            </div>
                            <div className='bg-silver border border-primary p-4 mt-4'>
                                <p className="text-xl font-bold text-[#5C2D95]">Reseller Details</p>
                                <div className='mt-2 flex flex-col gap-1 text-sm'>
                                    <p>Agancy ID: Safayat Hussain</p>
                                    <p>Agency Name :: Safayat Hussain</p>
                                    <p>Total Host Salary : 12231</p>
                                    <p>Agancy ID: Safayat Hussain</p>
                                    <p>Agancy ID: Safayat Hussain</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </Modal>
        </div >

    );
}


