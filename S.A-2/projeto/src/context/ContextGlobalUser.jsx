import { createContext, useState } from "react"

export const Mycontext = createContext()

export const  ContextGlobalUser = ({children})=> {
  
  const [user, setUser] = useState(false)
  const [regTrilhas, setRegiao] = useState('Regiões')

  return (

    <Mycontext.Provider value={{user,setUser, regTrilhas, setRegiao}}>
        {children}
    </Mycontext.Provider>

  )
}
