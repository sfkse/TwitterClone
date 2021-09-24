import React from 'react';
import { TwitterIcon, HomeIcon, ExploreIcon, NotifIcon, MessageIcon, BookmarkIcon, ListIcon, ProfileIcon, MoreIcon } from '../assets/icon'

const menuLinks = [
    {
        name: "Home",
        icon: HomeIcon
    },
    {
        name: "Explore",
        icon: ExploreIcon
    },
    {
        name: "Notifications",
        icon: NotifIcon
    },
    {
        name: "Messages",
        icon: MessageIcon
    },
    {
        name: "Bookmarks",
        icon: BookmarkIcon
    },
    {
        name: "Lists",
        icon: ListIcon
    },
    {
        name: "Profile",
        icon: ProfileIcon
    },
    {
        name: "More",
        icon: MoreIcon
    },
]
const Menu = () => {
    return (
        <div className="flex w-3/12 flex-col pb-3">
            <TwitterIcon width="140" height="40" color="#1da1f2" className="w-8 my-5 " />
            <ul className="group">
                {menuLinks.map(link =>
                    <MenuLinks Icon={link.icon} name={link.name} />
                )}
            </ul>
            <button className="text-white bg-blue-light hover:bg-blue-dark font-medium h-12 w-2/3 rounded-full" >
                <span > Tweet</span>
            </button>
        </div>
    )
}

const MenuLinks = ({ Icon, name }) => {
    return (
        <a href="#">
            <li key={name} className="flex w-max py-2 mb-2 px-3 group-hover:bg-gray-hover rounded-full ">
                <Icon width="40" height="25" color="#000" className="leading" />
                <span className="text-xl pb-1 ml-3"> {name}</span>
            </li>
        </a>
    )
}
export default Menu
