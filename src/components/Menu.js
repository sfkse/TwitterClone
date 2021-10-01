/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { TwitterIcon, menuLinks } from '../assets/icon'


const Menu = () => {
    return (
        <div className="flex lg:w-275 sticky top-0">
            <div className="flex  flex-col py-3 ">
                <TwitterIcon width="140" height="40" color="#1da1f2" className="w-8 my-5 " />
                <ul className=" mt-5">
                    {menuLinks.map(link => <MenuLinks Icon={link.icon} name={link.name} />)}
                </ul>
                <button className="text-white bg-blue-light hover:bg-blue-dark font-medium h-12 w-2/3 rounded-full" >
                    <span > Tweet</span>
                </button>
            </div>
        </div>

    )
}

const MenuLinks = ({ Icon, name }) => {
    return (
        <a href="#">
            <li key={name} className="flex w-max py-1 mb-2 items-center hover:bg-gray-hover rounded-full ">
                <Icon width="40" height="25" color="#000" className="leading" />
                <span className=" hidden lg:flex text-xl pb-1 ml-2"> {name}</span>
            </li>
        </a>
    )
}
export default Menu
