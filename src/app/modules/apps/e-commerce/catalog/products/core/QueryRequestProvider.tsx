import { FC,useState, createContext, useContext } from "react";
import {
    QueryState, 
    QueryRequestContextProps, 
    initialQueryRequest,
    WithChildren,

} from "../../../../../../../_metronic/helpers";
import { stat } from "fs";

const QueryRequestContext = createContext<QueryRequestContextProps>(initialQueryRequest)
const QueryRequestProvider: FC<WithChildren> = ({children}) => {
    const [state, setState] = useState<QueryState>(initialQueryRequest.state)
    const updateState = (updates: Partial<QueryState>) => {
        const updatedState = {...state, ...updates} as QueryState
        setState(updatedState)
    }
    // console.log('reuqyest is---',state);
    return(
        <QueryRequestContext.Provider value={{state, updateState}}>
            {children}
        </QueryRequestContext.Provider>
    )
}
const useQueryRequest = () => useContext(QueryRequestContext)
export {QueryRequestProvider, useQueryRequest}