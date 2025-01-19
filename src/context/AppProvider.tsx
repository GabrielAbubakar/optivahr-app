import React, { ReactNode, useState } from "react"
import { AppContext } from "./AppContext"
import { IBookInfo } from "../utils/interface"

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [search, setSearch] = useState<string>('')
    const [filter, setFilter] = useState<string>('none')
    const [books, setBooks] = useState<IBookInfo[]>([])
    const [isLoading, setIsLoading] = useState(true)

    return (
        <AppContext.Provider value={{ search, setSearch, filter, setFilter, books, setBooks, isLoading, setIsLoading }}>
            {children}
        </AppContext.Provider>
    )
}