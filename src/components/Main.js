/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useRef } from 'react';
import { TopTweetIcon, PrivacyIcon, tweetEmoji } from '../assets/icon';
import Tweets from './Tweets';
import Logo from '../assets/profile-logo.jfif'


const Main = ({ tweets, postTweet, addInteraction }) => {
    const tweetContent = useRef();
    console.log(tweets)
    const handleTweet = (e) => {
        e.preventDefault();
        postTweet(tweetContent.current.value)
        tweetContent.current.value = ""
        // setTweetValue("")
    }
    return (
        <div className="md:w-600 border-l-2 border-gray-50">
            <div className="flex justify-between items-center sticky top-0 bg-white p-4">
                <h1 className="text-xl font-bold">Home</h1>
                <TopTweetIcon />
            </div>
            <div className="flex border-b-2 border-gray-50 border-t-2 p-3">
                <div className="flex rounded-full">
                    <img
                        className="inline object-cover w-12 h-12 mr-2 rounded-full"
                        src={Logo}
                        alt="Profile image" />
                </div>
                <div className="flex flex-col flex-1 justify-around">
                    <form onSubmit={handleTweet}>
                        <input
                            className="p-4 outline-none w-full text-lg placeholder-grey-900"
                            placeholder="What's happening?"
                            ref={tweetContent}
                        />
                        <a className="text-blue-light ml-4 mb-2 px-2 hover:bg-gray-hoverLight rounded-full w-max" href="#" >
                            <PrivacyIcon width="15" height="15" color="#1D9BF2" />
                            <span className="ml-1 text-sm font-bold">Everyone can reply</span>
                        </a>
                        <div className="flex justify-between border-t-2 border-gray-50 pt-2 ml-5">
                            <ul className="flex gap-3 ">
                                {tweetEmoji.map(emj =>
                                    <TweetIcon Icon={emj.icon} name={emj.name} />
                                )}
                            </ul>
                            <button className="text-white bg-blue-light hover:bg-blue-dark font-sm px-5 rounded-full" >
                                <span> Tweet</span>
                            </button>

                        </div>
                    </form>
                </div>
            </div>
            <div >
                {tweets?.tweets.map(tw => <Tweets addInteraction={addInteraction} tweets={tw} logo={Logo} />)}

            </div>
        </div>
    )
}

const TweetIcon = ({ Icon, name }) => {
    // console.log(Icon)
    return (
        <a href="#">
            <li key={name} className="hover:bg-gray-hover transition-all mt-5 p-2 rounded-full w-max" >
                <Icon color="#1D9BF2" />
            </li>
        </a>

    )
}

export default (Main)
