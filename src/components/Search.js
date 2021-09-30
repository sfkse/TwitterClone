import React from 'react'

const Search = () => {
    return (
        <form method="#">
            <div class="relative flex text-gray-600 focus-within:text-gray-400">
                <span class="absolute inset-y-0 left-0 flex items-center px-4">
                    <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                        <svg width="6px" height="6px" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </span>
                <input type="search" className="py-3 text-sm text-gray-500 bg-gray-100 flex-1  rounded-full pl-12 focus:bg-white focus:border-blue-light" placeholder="Search Twitter" />
            </div>
        </form>
    )
}

export default Search
