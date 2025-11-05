import { createContext,useState } from "react"


export const Mycontext = createContext()




export const  ContextGlobalUser = ({children})=> {


    const [user, setUser] = useState("oie")
  return (

    <Mycontext.Provider value={{user}}>
        {children}
    </Mycontext.Provider>

  )
}
