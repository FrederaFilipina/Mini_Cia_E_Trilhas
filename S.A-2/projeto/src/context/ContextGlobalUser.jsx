import { createContext, useEffect, useState } from "react"

export const Mycontext = createContext()

export const  ContextGlobalUser = ({children})=> {
  
  const [regTrilhas, setRegiao] = useState('Regiões')
  const [barraPesq, setBarraPesq] = useState('')
  const [user, setUser] = useState(false)
  const [isActive, setIsActive] = useState(false);
  const [modalLogin, setModalLogin] = useState(false)
  const [modalPerfil, setModalPerfil] = useState(false)
  const [meusDados, setMeusDados] = useState(false)
  const [infouser, setInfouser] = useState({})


  useEffect(() => {
      const localStorege = localStorage.getItem('user')
  
      if (localStorege) {
        setUser(JSON.parse(localStorege));
      }
    }, []);

  return (

    <Mycontext.Provider value={{regTrilhas, setRegiao, barraPesq, setBarraPesq, user,setUser, modalLogin, setModalLogin, isActive, setIsActive, modalPerfil,meusDados, setMeusDados, setModalPerfil, infouser, setInfouser}}>
        {children}
    </Mycontext.Provider>

  )
}
