import React, { ReactNode, useState } from "react"
import { AppContext } from "./AppContext"
import { IBookInfo } from "../utils/interface"

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [nextLink, setNextLink] = useState<string | false>('')
    const [search, setSearch] = useState<string>('')
    const [filter, setFilter] = useState<string>('')
    const [books, setBooks] = useState<IBookInfo[]>([])
    const [isLoading, setIsLoading] = useState(true)

    return (
        <AppContext.Provider value={{ search, setSearch, filter, setFilter, books, setBooks, isLoading, setIsLoading, nextLink, setNextLink }}>
            {children}
        </AppContext.Provider>
    )
}