import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const PrevButton = ({ fetchMore }: { fetchMore: () => void }) => {
    const { prevLink } = useContext(AppContext)

    return (
        <div>
            {prevLink ? (
                <button
                    className="bg-blue-600 text-white px-4 py-2 transition-all hover:-translate-y-1 hover:shadow-md active:translate-y-0"
                    onClick={fetchMore}
                >Previous Page</button>
            ) : (
                <button
                    className="cursor-not-allowed bg-gray-300 text-white px-4 py-2 "
                    disabled
                >No Previous Page</button>
            )}
        </div>
    )
}

export default PrevButton