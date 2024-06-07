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


const Page = () => {
  // State for confirm modal
  const [confModalOpen, setConfModalOpen] = useState(false);
  const [confModalTitle, setConfModalTitle] = useState('');
  const [confNextFunc, setConfNextFunc] = useState(() => { });

 const auth = getAuth();

  // State for form fields
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState('');
  const [confirmAmount, setConfirmAmount] = useState('');

  // State for button disabled status
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Disable the button if amount and confirm amount do not match or if both fields are empty
    setIsButtonDisabled(amount !== confirmAmount || amount === '' || confirmAmount === '');
  }, [amount, confirmAmount]);

  const body = {
    recipientId: userId,
    amount: amount,
    resellerId: auth?._id
  }

      const handleSend = async () => {
          const response = await FetchApi({
            url: `/bean/send-beans-to-allusers`,
            method: 'post',
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
            <div className="bg-white mt-6 py-8 px-5 rounded-xl flex flex-col items-center">
              <div className="text-center">
                <p className="text-xl font-semibold text-[#5C2D95]">Send Beans</p>
              </div>
              <div className="flex flex-col max-w-[350px] w-full mt-8 gap-4">
                {/* userid */}
                <div className="relative w-full">
                <TextInput value={userId}
                    onChange={(e) => setUserId(e.target.value)} label={'Recipient ID'} name={'Recipient ID'} id={'recipientId'} />
                </div>
                {/* amount */}
                <div className="relative w-full">
                  <TextInput
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    label={'Amount'}
                    name={'Amount'}
                    id={'amount'}
                  />
                </div>
                {/* confirm amount */}
                <div className="relative w-full">
                  <TextInput
                    type="number"
                    value={confirmAmount}
                    onChange={(e) => setConfirmAmount(e.target.value)}
                    label={'Confirm Amount'}
                    name={'Confirm Amount'}
                    id={'confirmAmount'}
                  />
                </div>

              </div>
              <div className="mt-7 max-w-[350px] w-full">
                <button
                  onClick={() => {
                    setConfNextFunc(() => handleSend);
                    setConfModalTitle('Are you sure to send beans?');
                    setConfModalOpen(true);
                  }}
                  className={`bg-[#EE6093] w-full py-2 rounded-lg text-white font-semibold ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isButtonDisabled}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          <ConfirmModal open={confModalOpen} setOpen={setConfModalOpen} title={confModalTitle} nextFunc={confNextFunc} />
        </ThemeProvider>
      );
    };

    export default Page;


