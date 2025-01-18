import { createContext } from "react";

interface IContext {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext<IContext | null>(null)

