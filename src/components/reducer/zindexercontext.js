import React, { useReducer } from "react";

export const ZindexerContext = React.createContext();

const initialState = 30;

const reducer = (zindexer, action) => {
    switch(action.type) {
        case "PLUS":
            return zindexer + 2;
        case "MINUS":
            return zindexer - 2;
        default:
            return zindexer;
    }
}

const ZindexerProvider = ({ children }) => {
    const [zindexer, dispatch] = useReducer(reducer, initialState);
    
    return (
        <ZindexerContext.Provider value={{ zindexer, dispatch }}>
            {children}
        </ZindexerContext.Provider>
    );
}

export default ZindexerProvider;