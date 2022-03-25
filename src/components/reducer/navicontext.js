import React, { useReducer } from "react";

export const NaviContext = React.createContext();

const initialState = "HOME";

const reducer = (navi, action) => {
    switch(action.type) {
        case "HOME":
            return navi = "HOME";
        case "SEND":
            return navi = "SEND";
        case "PLUS":
            return navi = "PLUS";
        case "FIND":
            return navi = "FIND";
        case "HEART":
            return navi = "HEART";
        case "PROFILE":
            return navi = "PROFILE";
        default:
            return navi;
    }
}

const NaviProvider = ({ children }) => {
    const [navi, dispatch] = useReducer(reducer, initialState);
    
    return (
        <NaviContext.Provider value={{ navi, dispatch }}>
            {children}
        </NaviContext.Provider>
    );
}

export default NaviProvider;