import { IBookInfo } from "../utils/interface"

const ListBook = ({ book }: { book: IBookInfo }) => {
    return (
        <div
            className="flex gap-5 bg-white p-5 border border-gray-500 border-collapse"
            key={book.isbn}>
            <div className="w-[120px] h-[170px] bg-gray-200">

            </div>

            <div className="flex flex-col w-full">
                <p className="text-xl font-bold mb-2">{book.name}</p>
                <p>{book.publisher}</p>
                <p className="text-blue-600 italic">{book.authors[0]}</p>

                <div className="self-start md:self-end flex flex-col md:flex-row gap-2 md:gap-10 mt-auto">
                    <p><span className="text-gray-500">ISBN:</span> {book.isbn}</p>
                    <p><span className="text-gray-500">End Date:</span> {new Date(book.released).toDateString()}</p>
                </div>
            </div>
        </div>
    )
}

export default ListBook