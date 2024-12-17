import React, { createContext, useState} from 'react'
import { use } from 'react'
export const ContextApi=createContext(null)
export const ContextApiProvider = ({children}) => {
    const [isLoading,setIsloading]=useState(false)

    const value={
        isLoading,
        setIsloading
    }

  return (
    <ContextApi.Provider value={value}>{children}</ContextApi.Provider>
  )
}

export default ContextApi
