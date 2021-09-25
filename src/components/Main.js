/* eslint-disable jsx-a11y/img-redundant-alt */
import { TopTweetIcon, PrivacyIcon, tweetEmoji } from '../assets/icon';
import Tweets from './Tweets';


const Main = (props) => {


    return (
        <div className="w-6/12 border-l-2 border-gray-50">
            <div className="flex justify-between  m-4">
                <h1 className="text-xl font-bold">Home</h1>
                <TopTweetIcon className="" />
            </div>
            <div className="flex border-b-2 border-gray-50 border-t-2 p-3">
                <div className="flex rounded-full">
                    <img
                        className="inline object-cover w-12 h-12 mr-2 rounded-full"
                        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt="Profile image" />
                </div>
                <div className="flex flex-col flex-1 justify-around">
                    <input className="p-4 outline-none w-full text-lg placeholder-grey-900" placeholder="What's happening?"
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
                        <button className="text-white bg-blue-light hover:bg-blue-dark font-medium px-5 rounded-full" >
                            <span > Tweet</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex border-b-2 border-gray-50 p-3">
                <Tweets listTweet={props.listTWeet} tweets={props.tweets} />
            </div>
        </div>
    )
}

const TweetIcon = ({ Icon, name }) => {
    // console.log(Icon)
    return (
        <a href="#">
            <li key={name} className="hover:bg-gray-hover mt-5 p-2 rounded-full w-max" >
                <Icon color="#1D9BF2" />
            </li>
        </a>

    )
}

export default (Main)
