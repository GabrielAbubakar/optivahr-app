import { useEffect, useContext } from "react"
import { AppContext } from "../context/AppContext"
import axiosInstance from "../utils/axiosInstance"
import SearchForm from "./SearchForm"
import ListBook from "./ListBook"
import { IBookInfo } from "../utils/interface"
import LoadingBook from "./LoadingBook"



const MainSection = () => {
    const { search,
        filter,
        isLoading, setIsLoading,
        setBooks, books } = useContext(AppContext)

    useEffect(() => {
        async function getBooks() {
            try {
                setIsLoading(true)
                const res = await axiosInstance.get('/books')
                setBooks(res.data)

                console.log(res.headers.link.split(',')[0]);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        }

        getBooks()
    }, [setBooks, setIsLoading])


    return (
        <div className="px-5 md:px-10 py-40 bg-gray-50 min-h-screen">

            <h1 className="text-4xl text-center font-bold mb-20">
                A Bookstore of <span className="text-[#F15D5D]">Fire</span> and <span className="text-[#59BDEB]">Ice</span>
            </h1>

            <SearchForm />

            <div className="mb-20 text-center underline">
                {
                    filter == 'none' ? (
                        <p>All Categories</p>
                    ) : filter == 'book-name' ? (
                        <p>Books with the name "{search}"</p>
                    ) : filter == 'character-name' ? (
                        <p>Books with the character name "{search}"</p>
                    ) : filter == 'character-culture' ? (
                        <p>Books with the character culture "{search}"</p>
                    ) : ''
                }
            </div>

            <div className="flex flex-col flex-wrap lg:w-[70%] mx-auto">
                {
                    isLoading == true ? [1, 2, 3, 4, 5].map((item: number) => (
                        <LoadingBook
                            key={item}
                        />
                    )) : books?.map((book: IBookInfo) => (
                        <ListBook
                            key={book.isbn}
                            book={book}
                        />
                    ))
                }

                <div></div>
            </div>
        </div>
    )
}

export default MainSection