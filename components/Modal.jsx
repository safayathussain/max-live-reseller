'use client'
import React, { useEffect, useRef, useState } from 'react'

const Modal = ({ open, children }) => {

    return (
        <div >
            {
                open &&
                <>
                    <div className='absolute top-0  z-50 left-0 w-full min-h-[calc(100vh-104px)]  bg-primary opacity-30 blur-2xl'>
                    </div>
                    <div className=" fixed h-screen top-0 left-0 flex z-[999999] w-full items-center justify-center">
                        {children}
                    </div>
                </>
            }
        </div>
    )
}

export default Modal