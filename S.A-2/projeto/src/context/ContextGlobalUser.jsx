import { createContext, useState } from "react"

export const Mycontext = createContext()

export const  ContextGlobalUser = ({children})=> {
  
  const [user, setUser] = useState(false)
  const [regTrilhas, setRegiao] = useState('Regiões')
  const [isActive, setIsActive] = useState(false);
  const [modalLogin, setModalLogin] = useState(false)

  return (

    <Mycontext.Provider value={{user,setUser, regTrilhas, setRegiao, modalLogin, setModalLogin, isActive, setIsActive}}>
        {children}
    </Mycontext.Provider>

  )
}
