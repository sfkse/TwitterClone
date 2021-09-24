/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { TopTweetIcon, PrivacyIcon, PollIcon, ImageIcon, GifIcon, Link, Like } from '../assets/icon';

const Main = () => {
    return (
        <div className="flex flex-col w-6/12 border-l-2">
            <div className="flex justify-between my-4">
                <h1 className="text-xl font-bold">Home</h1>
                <TopTweetIcon className="" />
            </div>
            <div className="flex  border-t-2 p-3">
                <div className="flex rounded-full">
                    <img
                        className="inline object-cover w-12 h-12 mr-2 rounded-full"
                        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt="Profile image"
                    />

                </div>
                <div className="flex flex-col border-b-2 w-full">
                    <input
                        className="p-4 outline-none w-full text-lg placeholder-grey-900"
                        placeholder="What's happening?"
                    />
                    <a
                        className="text-blue-light ml-4 mb-2 px-2 hover:bg-gray-hoverLight rounded-full w-max"
                        href="#" >
                        <PrivacyIcon width="15" height="15" color="#1D9BF2" />
                        <span className="ml-1 text-sm font-bold">Everyone can reply</span>
                    </a>
                </div>

            </div>
            <div className="flex">
                <GifIcon color="#1D9BF2" />
                <ImageIcon color="#1D9BF2" />
                <PollIcon color="#1D9BF2" />
                <Link color="#1D9BF2" />
                <Like color="#1D9BF2" />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Main
