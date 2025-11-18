import { createContext, useEffect, useState } from "react"

export const Mycontext = createContext()

export const  ContextGlobalUser = ({children})=> {
  
  const [user, setUser] = useState(false)
  const [regTrilhas, setRegiao] = useState('Regiões')
  const [isActive, setIsActive] = useState(false);
  const [modalLogin, setModalLogin] = useState(false)
  const [modalPerfil, setModalPerfil] = useState(false)
  const [meusDados, setMeusDados] = useState(false)

  useEffect(() => {
      const localStorege = localStorage.getItem('user')
  
      if (localStorege) {
        setUser(JSON.parse(localStorege));
      }
    }, []);

  return (

    <Mycontext.Provider value={{user,setUser, regTrilhas, setRegiao, modalLogin, setModalLogin, isActive, setIsActive, modalPerfil,meusDados, setMeusDados, setModalPerfil}}>
        {children}
    </Mycontext.Provider>

  )
}
