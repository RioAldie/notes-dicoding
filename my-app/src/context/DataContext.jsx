import { createContext, useState } from "react"
import { getInitialData } from "../utils/db"

const DataDefaultValue = getInitialData()

const DataCtxValue = {
    data: DataDefaultValue,
    setData: state => {}
}

export const DataCtx = createContext(DataCtxValue);
export default function DataCtxProvider({children}){
    const [data, setData] = useState(DataCtxValue.data);
    return(
       <DataCtx.Provider value={{data, setData}}>
           {children}
       </DataCtx.Provider>
    )
}