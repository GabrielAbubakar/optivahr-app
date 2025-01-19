import { createContext } from "react";
import { IBookInfo } from "../utils/interface";

interface IContext {
    search: string,
    filter: string,
    isLoading: boolean,
    books: IBookInfo[],
    nextLink: string | false,
    setBooks: React.Dispatch<React.SetStateAction<IBookInfo[]>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    setFilter: React.Dispatch<React.SetStateAction<string>>,
    setNextLink: React.Dispatch<React.SetStateAction<string | false>>,
}

export const AppContext = createContext<IContext>({
    // Default values for context
    books: [],
    filter: '',
    isLoading: true,
    search: '',
    nextLink: '',
    setBooks: () => { },
    setFilter: () => { },
    setIsLoading: () => { },
    setSearch: () => { },
    setNextLink: () => { }
})

