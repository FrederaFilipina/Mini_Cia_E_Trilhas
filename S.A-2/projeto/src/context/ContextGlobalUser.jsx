import { createContext,useState } from "react"


export const Mycontext = createContext()




export const  ContextGlobalUser = ({children})=> {


    const [user, setUser] = useState(false)
  return (

    <Mycontext.Provider value={{user,setUser}}>
        {children}
    </Mycontext.Provider>

  )
}
