'use client'
import { persistor, store } from '@/redux/store'
import { theme } from '@/utils/muiTheme'
import { ThemeProvider } from '@mui/material'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const Providers = ({ children }) => {
    return (
        <div>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ThemeProvider theme={theme}>
                        {children}
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </div>
    )
}

export default Providers