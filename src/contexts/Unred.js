import React, { useState, createContext } from 'react';

export const UnredContext = createContext({})


function UnreadProvider({ children }) {

    const [unred, setUnred] = useState(true)
    return (
        < UnredContext.Provider value={{
            unred,
            setUnred
        }
        }>
            {children}
        </UnredContext.Provider >
    )

}

export default UnreadProvider