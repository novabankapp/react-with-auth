export const SearchBar = () => {
    return (
        <div className="relative w-full max-w-md sm:-ml-2">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
            <input type="text" role="search" placeholder="Search..." className="py-2 pl-10 pr-4 w-full border-2 border-primary-600 border-opacity-10 placeholder-gray-400 focus:bg-gray rounded-lg" />
        </div>
    )
}