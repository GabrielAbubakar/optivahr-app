import React, { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import axiosInstance from "../utils/axiosInstance"
import axios from "axios"
import { parseLinkHeader } from "../utils/parseLinkHeader"

const SearchForm = () => {
    const { search, setSearch,
        filter, setFilter,
        setIsLoading,
        setBooks,
        setNextLink
    } = useContext(AppContext)

    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (filter == 'book-name') {
            setIsLoading(true)

            const res = await axiosInstance.get(`/books?name=${search}`)

            setBooks(res.data)
            setIsLoading(false)
        }

        if (filter == 'character-name') {
            setIsLoading(true)
            // Get the character with that name
            const res = await axiosInstance.get(`/characters?name=${search}`)
            // Get the links of all books with that character
            const requests = res.data[0].books.map((url: string) => axios.get(url))
            // Make an api call with all of the links
            const responses = await Promise.all(requests)
            const data = responses.map(res => res.data)
            // Set the books array to the fetched details
            setBooks(data)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        async function getFilterNone() {
            if (filter === 'none') {
                setIsLoading(true)

                const res = await axiosInstance.get(`/books`)

                const linkHeader = res.headers.link;
                const links = parseLinkHeader(linkHeader);

                if (links.next) {
                    setNextLink(links.next)
                } else {
                    setNextLink(false)
                }

                setBooks(res.data)
                setIsLoading(false)
            }
        }

        getFilterNone()
    }, [filter, setIsLoading, setBooks, setNextLink])


    return (
        <form
            onSubmit={(e) => submitForm(e)}
            className="flex flex-col items-center mb-20">
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
                {/* <div className="flex items-center gap-1 cursor-pointer">
                    <input
                        onChange={(e) => setFilter(e.target.value)}
                        checked={filter === 'character-culture'}
                        value='character-culture'
                        type="radio" name="filter" id="character-culture" />
                    <label htmlFor="character-culture">Character Culture</label>
                </div> */}
            </div>
        </form>
    )
}

export default SearchForm