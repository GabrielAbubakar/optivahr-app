import { useEffect, useContext } from "react"
import axios from "axios"
import axiosInstance from "../utils/axiosInstance"
import SearchForm from "./SearchForm"
import { AppContext } from "../context/AppContext"
import { parseLinkHeader } from "../utils/parseLinkHeader"
import NextButton from "./NextButton"
import BookList from "./BookList"
import CategoryDisplay from "./CategoryDisplay"
import Header from "./Header"



const MainSection = () => {

    const { search,
        filter,
        setIsLoading,
        setBooks,
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

            <Header />

            {/* Search Feature */}
            <SearchForm />

            {/* Result category display */}
            <CategoryDisplay filter={filter} search={search} />

            {/* Book List */}
            <BookList />

            <NextButton fetchMore={fetchMore} />
        </div>
    )
}

export default MainSection;