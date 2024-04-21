import React from 'react'
import ToastContainer from 'react-hot-toast'

const ToastProvider = ({children}) => {
  return (
    <>
        {children}
        <ToastContainer />
    </>
  )
}

export default ToastProvider
