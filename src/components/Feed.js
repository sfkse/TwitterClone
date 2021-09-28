/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { SettingsIcon, FeedDots } from '../assets/icon'

const Feed = () => {
    return (
        <div className="flex flex-col gap-3 w-350 mt-1">
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
            <div className="flex-col bg-gray-100 rounded-xl">
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-bold">Trends for you</h2>
                    <span className="p-1 hover:bg-gray-hover rounded-full transition-all">
                        <SettingsIcon />
                    </span>
                </div>
                <div >
                    <ul >
                        <li className="hover:bg-gray-200 py-3 px-4 flex-col transition-all ">
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-gray-500">Trending in Sweden</p>
                                <span className="p-1 hover:bg-blue-iconHover hover:text-blue-500 rounded-full" > <FeedDots /></span>
                            </div>
                            <p className="font-bold">Goteborg</p>
                            <p className="text-xs text-gray-500">25.5K Tweets</p>

                        </li>
                        <li className="hover:bg-gray-200 py-3 px-4 rounded-br-xl rounded-bl-xl flex-col transition-all ">
                            <a href="#" className="text-blue-light  text-sm">Show More</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Feed
