'use client'
import React from 'react'

const Providers = ({ children }) => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </div>
    )
}

export default Providers