import React, { createContext, useContext, useState } from "react";


const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true);
    const [logout, setLogout] = useState(() => () => setToken(null));

    return (
        <userContext.Provider value={{ token, logout }}>
            {children}
        </userContext.Provider>
    );
};

// Hook para consumir el contexto
export const userUser = () => {
    return useContext(userContext);  // Esto obtiene el contexto
};
