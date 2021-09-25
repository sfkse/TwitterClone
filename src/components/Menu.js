import React from 'react';
import { TwitterIcon, menuLinks } from '../assets/icon'


const Menu = () => {
    return (
        <div className="flex w-3/12 flex-col py-3">
            <TwitterIcon width="140" height="40" color="#1da1f2" className="w-8 my-5 " />
            <ul className=" mt-5">
                {menuLinks.map(link => {
                    return (<MenuLinks Icon={link.icon} name={link.name} />)
                })}
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
            <li key={name} className="flex w-max py-1 mb-2 px-3 hover:bg-gray-hover rounded-full ">
                <Icon width="40" height="25" color="#000" className="leading" />
                <span className="text-xl pb-1 ml-2"> {name}</span>
            </li>
        </a>
    )
}
export default Menu
