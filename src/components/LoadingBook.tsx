


const LoadingBook = () => {
    return (
        <div
            className="bg-gray-200 w-full h-[200px] animate-pulse  border border-gray-300 border-collapse p-5 flex gap-4"
        >
            <div className="w-[120px] bg-gray-500 animate-pulse h-[170px]"></div>
            <div className="w-full flex flex-col gap-5 justify-between">
                <div className="flex flex-col gap-5">
                    <div className="w-[70%] bg-gray-500 animate-pulse h-3"></div>
                    <div className="w-[40%] bg-gray-500 animate-pulse h-3"></div>
                </div>

                <div className="flex gap-3 lg:gap-5 justify-end">
                    <div className="w-[30%] lg:w-[20%] bg-gray-500 animate-pulse h-3"></div>
                    <div className="w-[30%] lg:w-[20%] bg-gray-500 animate-pulse h-3"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingBook