import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { IBookInfo } from "../utils/interface"
import LoadingBook from "./LoadingBook"
import BookCard from "./BookCard"

const BookList = () => {
    const { isLoading, books } = useContext(AppContext)

    return (
        <div className="flex flex-col flex-wrap lg:w-[70%] mx-auto">
            {
                isLoading == true ? [1, 2, 3, 4, 5].map((item: number) => (
                    <LoadingBook
                        key={item}
                    />
                )) : books.length !== 0 ? books?.map((book: IBookInfo) => (
                    <BookCard
                        key={book.isbn}
                        book={book}
                    />
                )) : books.length == 0 ? (
                    <p>No books are available</p>
                ) : ''
            }
        </div>
    )
}

export default BookList