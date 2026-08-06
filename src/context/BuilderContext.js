import {
    createContext,
    useReducer,
} from "react";

import { builderReducer }
    from "./BuilderReducer";

import { initialState }
    from "./initialState";

export const BuilderContext =
    createContext();

export function BuilderProvider({
                                    children
                                }){

    const [state,dispatch]=useReducer(

        builderReducer,

        initialState

    );

    return(

        <BuilderContext.Provider

            value={{

                fields:state.fields,

                dispatch

            }}

        >

            {children}

        </BuilderContext.Provider>

    );

}