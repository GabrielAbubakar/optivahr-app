import { createContext } from "react";
import { IBookInfo } from "../utils/interface";

interface IContext {
    search: string,
    filter: string,
    isLoading: boolean,
    books: IBookInfo[],
    setBooks: React.Dispatch<React.SetStateAction<IBookInfo[]>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext<IContext | null>(null)

