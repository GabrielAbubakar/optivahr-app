import { useEffect, useContext } from "react"
import axios from "axios"
import axiosInstance from "../utils/axiosInstance"
import SearchForm from "./SearchForm"
import ListBook from "./ListBook"
import LoadingBook from "./LoadingBook"
import { AppContext } from "../context/AppContext"
import { IBookInfo } from "../utils/interface"
import { parseLinkHeader } from "../utils/parseLinkHeader"



const MainSection = () => {

    const { search,
        filter,
        isLoading, setIsLoading,
        setBooks, books,
        nextLink, setNextLink
    } = useContext(AppContext)


    async function fetchMore() {
        try {
            setIsLoading(true)
            const res = await axios.get(nextLink as string)
            setBooks(res.data)

            const linkHeader = res.headers.link;
            const links = parseLinkHeader(linkHeader);

            if (links.next) {
                setNextLink(links.next)
            } else {
                setNextLink(false)
            }

            // console.log(links);
            // console.log(res.headers.link.split(',')[0]);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        async function getBooks() {
            try {
                setIsLoading(true)
                const res = await axiosInstance.get('/books')
                setBooks(res.data)
                // Get the pagination links string from linkHeader
                const linkHeader = res.headers.link;
                // pass links to a custom parsing function that arranges properties to values in an object
                const links = parseLinkHeader(linkHeader);

                if (links.next) {
                    setNextLink(links.next)
                } else {
                    setNextLink(false)
                }

                // console.log(links);
                // console.log(res.headers.link.split(',')[0]);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        }

        getBooks()
    }, [setBooks, setIsLoading, setNextLink])


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
                    )) : books.length !== 0 ? books?.map((book: IBookInfo) => (
                        <ListBook
                            key={book.isbn}
                            book={book}
                        />
                    )) : books.length == 0 ? (
                        <p>No books are available</p>
                    ) : ''
                }

                <div className="mt-20 text-center">
                    {nextLink ? (
                        <button
                            className="bg-blue-600 text-white px-4 py-2 transition-all hover:-translate-y-1 hover:shadow-md active:translate-y-0"
                            onClick={fetchMore}
                        >Next Page</button>
                    ) : (
                        <button
                            className="cursor-not-allowed bg-gray-300 text-white px-4 py-2 "
                            disabled
                        >No Next Page</button>
                    )

                    }
                </div>
            </div>
        </div>
    )
}

export default MainSection