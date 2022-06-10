import { createContext, useEffect, useState } from "react";


const ChangeCtxValue = {
    isChange: false,
}

export const ChangeCtx = createContext(ChangeCtxValue);
export default function ChangeCtxProvider({children}){
    const [datachange, setDatachange] = useState(ChangeCtxValue.isChange);
    useEffect(()=>{
        setDatachange(datachange);
    },[datachange])
    return(
       <ChangeCtx.Provider value={{datachange, setDatachange}}>
           {children}
       </ChangeCtx.Provider>
    )
}