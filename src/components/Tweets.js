import React from 'react';
import { tweetBoxIcons, Attach } from '../assets/icon';

const Tweets = ({ tweets, listTweet }) => {

    return (
        <div className="flex border-b-2 border-gray-50 p-3">
            <div className="flex rounded-full">
                <img
                    className="inline object-cover w-12 h-12 mr-2 rounded-full"
                    src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
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
                    <Attach color="#1D9BF2" className="hover:bg-blue-iconHover rounded-full p-2" />
                </div>

            </div>
        </div>
    )
}

const Icon = ({ Icon, color, bgColor }) => {
    return (
        <div className="flex">
            <a href="" className={`hover:${bgColor} rounded-full p-1`}>
                <Icon color={color} />
            </a>
            <span className="text-gray-400 text-sm">16</span>
        </div>
    )
}

export default Tweets
