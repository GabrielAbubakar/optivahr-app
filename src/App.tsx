import { useState, useEffect, useContext } from "react"
import axiosInstance from "./utils/axiosInstance"
import { IBookInfo } from "./utils/interface"
import { AppContext } from "./context/AppContext"

const App = () => {

    const [books, setBooks] = useState<IBookInfo[]>()
    const [page, setPage] = useState()
    const { search, setSearch } = useContext(AppContext)

    useEffect(() => {
        async function getBooks() {
            try {
                const res = await axiosInstance.get('/books')
                setBooks(res.data)

                console.log(res.headers.link.split(',')[0]);
            } catch (error) {
                console.log(error);
            }
        }

        getBooks()
    }, [])


    return (
        <div className="px-10 py-20 font-geist">
            <h1 className="text-2xl text-center font-bold mb-20">
                A BookStore of Fire and Ice
            </h1>

            <p>{search}</p>

            <div className="flex gap-20 flex-wrap w-[70%] mx-auto">
                {
                    books?.map(book => (
                        <div key={book.isbn}>
                            <h3>Book</h3>

                            <p>Publisher: {book.publisher}</p>
                            <p>Name: {book.name}</p>
                            <p>ISBN: {book.isbn}</p>
                            <p>Authors: {book.authors[0]}</p>
                            <p>Characters: {book.characters[1]}</p>
                            <p>End Date: {book.released}</p>
                        </div>
                    ))
                }

                <div></div>
            </div>

            <div>
                s
            </div>
        </div>
    )
}

export default App