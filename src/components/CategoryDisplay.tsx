

const CategoryDisplay = ({ filter, search }: { filter: string, search: string }) => {
    return (
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
    )
}

export default CategoryDisplay