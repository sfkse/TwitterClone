/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { tweetBoxIcons, Attach } from '../assets/icon';

const Tweets = ({ tweets, logo }) => {

    return (
        <div className="flex border-b-2 border-gray-50 p-3">
            <div className="flex rounded-full">
                <img
                    className="inline object-cover w-12 h-12 mr-2 rounded-full"
                    src={logo}
                    alt="Profile image" />
            </div>
            <div className="flex-col flex-1 justify-start">
                <div className="flex">
                    <span className="font-semibold" >{tweets.author}</span>
                    <span className="font-extralight ml-1">{tweets.username}</span>
                </div>
                <div>
                    <span>{tweets.content}</span>
                </div>
                <div className="flex justify-around py-2 mt-2">
                    {tweetBoxIcons.map(icons => <Icon Icon={icons.icon} color={icons.hoverColor} bgColor={icons.hoverBackground} />)}
                    <span className="hover:bg-blue-iconHover hover:text-blue-dark transition-all rounded-full p-2"><Attach /></span>
                </div>

            </div>
        </div>
    )
}

const Icon = ({ Icon, color, bgColor }) => {
    return (
        <div className="flex">
            <a href="" className={`hover:text-${color} text-gray-500 flex items-center gap-1 `}>
                <span className={`hover:${bgColor} transition-all  rounded-full p-2`} > <Icon /></span>
                <span className="text-sm">16</span>
            </a>

        </div>
    )
}

export default Tweets
