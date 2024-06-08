"use client";
import React, { useState, useEffect } from "react";
import bills from "@/public/bills.svg";
import transactions from "@/public/transactions.svg";
import Image from "next/image";
import { TextField, ThemeProvider } from "@mui/material";
import { theme } from "@/utils/muiTheme";
import ConfirmModal from "@/components/ConfirmModal";
import TextInput from "@/components/TextInput";
import { FetchApi } from "@/utils/FetchApi";
import toast from "react-hot-toast";
import { getAuth } from "@/utils/functions";
import SelectInput from "@/components/SelectInput";


const Page = () => {
  // State for confirm modal
  const [confModalOpen, setConfModalOpen] = useState(false);
  const [confModalTitle, setConfModalTitle] = useState('');
  const [confNextFunc, setConfNextFunc] = useState(() => { });

  const auth = getAuth();



  const handleSend = async (e) => {
    e.preventDefault()
    const { recipientId, amount, type } = e.target
    const body = {
      recipientId: recipientId.value,
      amount: Number(amount.value),
      resellerId: auth?._id,
      assetType: type.value
    }
    await FetchApi({
      url: `bean/send-assets-to-allusers`,
      method: 'patch',
      data: body,
      isToast: true,
    });
  }

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
              <p className="text-3xl font-semibold text-[#5C2D95]">26,750</p>
            </div>
          </div>
          <div className="bg-white flex px-8 py-4 rounded-xl w-full">
            <div className="flex items-center mr-4">
              <Image className="size-12" src={transactions} alt=""></Image>
            </div>
            <div>
              <p className="font-medium whitespace-nowrap text-[#5C2D95]">
                Total Transactions
              </p>
              <p className="text-3xl font-semibold text-[#5C2D95]">81</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSend} className="bg-white mt-6 py-8 px-5 rounded-xl flex flex-col items-center">
          <div className="text-center">
            <p className="text-xl font-semibold text-[#5C2D95]">Transaction</p>
          </div>
          <div className="flex flex-col max-w-[350px] w-full mt-8 gap-3">
            {/* userid */}
            <div className="relative w-full">
              <TextInput label={'Recipient ID'} name={'recipientId'} id={'recipientId'} />
            </div>
            {/* amount */}
            <div className="relative w-full">
              <TextInput
                type="number"
                label={'Amount'}
                name={'amount'}
                id={'amount'}
              />
            </div>
            <SelectInput label={'Type'} name={'type'} options={[
              {
                name: 'Bean',
                value: 'beans'
              },
              {
                name: 'Coin',
                value: 'coins'
              },
              {
                name: 'Diamond',
                value: 'diamonds'
              },
              {
                name: 'Star',
                value: 'stars'
              },
            ]} />

            <div className=" max-w-[350px] w-full">
              <button
                type="submit"
                className={`bg-[#EE6093] w-full py-2 rounded-lg text-white font-semibold`}>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
      <ConfirmModal open={confModalOpen} setOpen={setConfModalOpen} title={confModalTitle} nextFunc={confNextFunc} />
    </ThemeProvider>
  );
};

export default Page;


