import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const SearchForm = () => {
    const { search, setSearch, filter, setFilter } = useContext(AppContext)


    return (
        <form className="flex flex-col items-center mb-40">
            <div className="flex mb-5">
                <input
                    required
                    placeholder="Search term"
                    type="text"
                    value={search}
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-gray-100 py-2 px-5 w-full md:w-[500px] placeholder:italic border border-gray-600" />

                <button className="bg-gray-700 text-white px-3  md:px-10 border border-gray-600">Search</button>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-5">

                <div className="flex items-center gap-1 cursor-pointer">
                    <input
                        onChange={(e) => setFilter(e.target.value)}
                        checked={filter === 'none'}
                        value='none'
                        type="radio" name="filter" id="none" />
                    <label htmlFor="none">None</label>
                </div>


                <div className="flex items-center gap-1 cursor-pointer">
                    <input
                        onChange={(e) => setFilter(e.target.value)}
                        checked={filter === 'book-name'}
                        value='book-name'
                        type="radio" name="filter" id="book-name" />
                    <label htmlFor="book-name">Book Name</label>
                </div>
                <div className="flex items-center gap-1 cursor-pointer">
                    <input
                        onChange={(e) => setFilter(e.target.value)}
                        checked={filter === 'character-name'}
                        value='character-name'
                        type="radio" name="filter" id="character-name" />
                    <label htmlFor="character-name">Character Name</label>
                </div>
                <div className="flex items-center gap-1 cursor-pointer">
                    <input
                        onChange={(e) => setFilter(e.target.value)}
                        checked={filter === 'character-culture'}
                        value='character-culture'
                        type="radio" name="filter" id="character-culture" />
                    <label htmlFor="character-culture">Character Culture</label>
                </div>
            </div>
        </form>
    )
}

export default SearchForm