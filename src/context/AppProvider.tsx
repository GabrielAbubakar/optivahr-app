import { AppContext } from "./AppContext"
import React, { ReactNode, useState } from "react"

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [search, setSearch] = useState<string>('asdasd')

    return (
        <AppContext.Provider value={{ search, setSearch }}>
            {children}
        </AppContext.Provider>
    )
}