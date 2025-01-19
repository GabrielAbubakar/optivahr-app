import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const NextButton = ({ fetchMore }: { fetchMore: () => void }) => {
    const { nextLink } = useContext(AppContext)

    return (
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
            )}
        </div>
    )
}

export default NextButton