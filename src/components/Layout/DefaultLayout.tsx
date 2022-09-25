import React, { createContext, useState } from 'react'
import Footer from './Footer'
import Header from './Header'

export const Rcontext = createContext({login:{},getData:(res:any)=>{}})

const DefaultLayout = ({children}:any) => {
  const [login,setLogin] = useState({})
  const getData =(res:any)=>{
    console.log(res)
    setLogin(res)
  }

  return (
    <>
      <Rcontext.Provider value={{login:login,getData:getData}}>

         <Header />
        <main style={{height: '100vh',background: "#E7E7E7"}}>{children}</main>
         <Footer />
      </Rcontext.Provider>
    </>
  )
}

export default DefaultLayout