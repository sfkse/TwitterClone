/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FeedDots, SettingsIcon } from '../assets/icon';

const Trends = ({ feeds }) => {
    // console.log(feeds)
    return (
        <div className="flex-col bg-gray-100 rounded-xl">
            <div className="flex justify-between items-center p-4">
                <h2 className="text-xl font-bold">Trends for you</h2>
                <span className="p-1 hover:bg-gray-hover rounded-full transition-all">
                    <SettingsIcon />
                </span>
            </div>
            <ul >
                {feeds.feeds.map(feed => <Feeds feeds={feed} />)}

                <li className="hover:bg-gray-200 py-3 px-4 rounded-br-xl rounded-bl-xl flex-col transition-all ">
                    <a href="#" className="text-blue-light  text-sm">Show More</a>
                </li>


            </ul>
        </div>
    )
}

const Feeds = ({ feeds }) => {
    return (
        <li className="hover:bg-gray-200 py-3 px-4 flex-col transition-all ">
            <div className="flex justify-between items-center">
                <p className="text-xs text-gray-500">Trending in {feeds.location}</p>
                <span className="p-1 hover:bg-blue-iconHover hover:text-blue-500 rounded-full" >
                    <FeedDots />
                </span>
            </div>
            <p className="font-bold">{feeds.headline}</p>
            <p className="text-xs text-gray-500">{feeds.count} Tweets</p>

        </li>
    )
}

export default Trends
