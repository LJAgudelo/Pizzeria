import React, { createContext, useContext, useState } from "react";

// Crear el contexto con un valor predeterminado
const userContext = createContext();

// Proveedor de contexto
export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true);  // Inicializa el estado de token
    const [logout, setLogout] = useState(() => () => setToken(null));  // Función de logout

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
