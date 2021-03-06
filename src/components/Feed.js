/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Follow from './Follow'
import Search from './Search'
import Trends from './Trends'

const Feed = ({ feeds, follow }) => {

    return (
        <div className="hidden md:flex flex-col gap-3 w-350 mt-1">
            <Search />
            <Trends feeds={feeds} />
            <Follow follow={follow} />
        </div>
    )
}

export default Feed
