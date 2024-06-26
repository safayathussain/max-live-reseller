"use client";
import React, { useState, useEffect, useRef } from "react";
import bills from "@/public/bills.svg";
import transactionsIcon from "@/public/transactions.svg";
import Image from "next/image";
import { TextField, ThemeProvider } from "@mui/material";
import { theme } from "@/utils/muiTheme";
import ConfirmModal from "@/components/ConfirmModal";
import TextInput from "@/components/TextInput";
import { FetchApi } from "@/utils/FetchApi";
import toast from "react-hot-toast";
import { useAuth } from "@/utils/functions";
import SelectInput from "@/components/SelectInput";


const Page = () => {
  // State for confirm modal
  const [confModalOpen, setConfModalOpen] = useState(false);
  const [confModalTitle, setConfModalTitle] = useState('');
  const [confNextFunc, setConfNextFunc] = useState(() => { });
  const [refetchTransaction, setRefetchTransaction] = useState(0)
  const { auth, refetchAuth } = useAuth();
  const date = new Date()
  const ref = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { recipientId, amount, CAmount } = e.target
    if(amount.value !== CAmount.value){
      return toast.error("Amount and the Confirmed amount don't match")
    }
    const body = {
      recipientId: recipientId.value,
      amount: Number(amount.value),
      resellerId: auth?._id,
      assetType: 'beans'
    }
    await FetchApi({
      url: `bean/send-assets-to-allusers`,
      method: 'patch',
      data: body,
      isToast: true,
      callback: () => {
        refetchAuth()
        setRefetchTransaction(Math.random())
      }
    });
    ref.current.recipientId.value = ''
    ref.current.amount.value = ''

  }
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [searchedUserId, setsearchedUserId] = useState('');
  const [allUsers, setallUsers] = useState([])
  const [transactions, setTransactions] = useState({})
  const selectUser = (user) => {
    ref.current.recipientId.value = user.maxId
  }
  useEffect(() => {
    const loadData = async () => {
      const { data } = await FetchApi({ url: `user/getAllUser` })
      setallUsers(data?.users?.users.filter(user => user.role !== 'BR' && user.role !== 'AD' && user.role !== 'MP'));
    }
    loadData()
  }, [])
  useEffect(() => {
    const loadData = async () => {
      const { data: transactions } = await FetchApi({ url: `bean/beans-sent?userId=${auth._id}&startDate=2024-01-01&endDate=${date.getUTCFullYear()}-${date.getMonth() + 1}-${date.getUTCDate() + 1}` })
      setTransactions(transactions)
    }
    loadData()

  }, [refetchTransaction])


  useEffect(() => {
    const arr = allUsers.filter(item => item.maxId?.includes(searchedUserId))
    setSearchedUsers(arr)
  }, [searchedUserId, allUsers.length])
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="flex justify-between flex-col md:flex-row gap-4">
          <div className="bg-white flex px-8 py-4 rounded-xl w-full">
            <div className="flex items-center mr-4">
              <Image className="size-12" src={bills} alt=""></Image>
            </div>
            <div>
              <p className="font-medium whitespace-nowrap text-[#5C2D95]">
                Available Bills
              </p>
              <p className="text-3xl font-semibold text-[#5C2D95]">{auth.beans}</p>
            </div>
          </div>
          <div className="bg-white flex px-8 py-4 rounded-xl w-full">
            <div className="flex items-center mr-4">
              <Image className="size-12" src={transactionsIcon} alt=""></Image>
            </div>
            <div>
              <p className="font-medium whitespace-nowrap text-[#5C2D95]">
                Total Transactions
              </p>
              <p className="text-3xl font-semibold text-[#5C2D95]">{transactions?.transactions?.length || 0}</p>
            </div>
          </div>
        </div>
        <section className="bg-gray-50 my-10  rounded-lg flex-col-reverse md:gap-10 md:flex-row flex justify-center items-center">
          <form ref={ref} onSubmit={handleSubmit} className=" py-20">
            <p className='text-xl text-center mb-5 text-primary font-semibold'>Transaction</p>
            <div className='min-w-[350px] mx-auto w-min flex flex-col gap-3'>
              <TextInput label={'User ID'} name={'recipientId'} />
              <TextInput label={'Asset Amount'} name={'amount'} />
              <TextInput label={'Confirm Asset Amount'} name={'CAmount'} />
              
              <button type='submit' className='py-2 rounded-md bg-primary w-full text-white font-medium '>
                Send
              </button>
            </div>

          </form>
          <div className=' w-[300px] mt-20 md:mt-0'>
            <TextInput label={'Search User By MaxID'} onChange={(e) => setsearchedUserId(e.target.value)} />
            <div className='max-h-[200px] overflow-y-scroll shadow-md mt-2'>
              {
                searchedUsers.map((user, i) => <div key={i} onClick={() => selectUser(user)}>
                  <p className='p-1 border rounded border-primary duration-100 hover:bg-primary hover:text-white'>
                    {user.firstName || user.agencyName|| 'No Name'}
                  </p>
                </div>)
              }
              {
                searchedUsers.length === 0 && <div>
                  <p className='p-2'>0 User Found</p>
                </div>
              }
            </div>
          </div>
        </section>
      </div>
      <ConfirmModal open={confModalOpen} setOpen={setConfModalOpen} title={confModalTitle} nextFunc={confNextFunc} />
    </ThemeProvider>
  );
};

export default Page;


