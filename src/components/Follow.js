/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Follow = ({ follow }) => {
    return (
        <div className="flex-col bg-gray-100 rounded-xl sticky top-0">
            <div className="flex justify-between items-center p-4">
                <h2 className="text-xl font-bold">Who to follow</h2>
            </div>
            <ul>
                {follow.follow.map(follow => <FollowList follow={follow} />)}
                <li className="hover:bg-gray-200 py-3 px-4 rounded-br-xl rounded-bl-xl flex-col transition-all ">
                    <a href="#" className="text-blue-light  text-sm">Show More</a>
                </li>
            </ul>
        </div>
    )
}

const FollowList = ({ follow }) => {

    return (
        <li className="hover:bg-gray-200 py-3 px-4 flex justify-between  transition-all ">
            <div className="flex">
                <img
                    className="inline object-cover w-12 h-12 mr-2 rounded-full"
                    src={follow.logo}
                    alt="Profile image" />
                <div className="flex-col">
                    <p className="font-bold">{follow.name}</p>
                    <p className="text-xs text-gray-500 flex-1">{follow.username}</p>
                </div>
            </div>
            <button className=" bg-black rounded-3xl text-white font-bold px-2 text-xs leading-none  ">FOLLOW</button>
        </li>
    )
}
export default Follow
