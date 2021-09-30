/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Follow from './Follow'
import Search from './Search'
import Trends from './Trends'

const Feed = ({ feeds }) => {

    return (
        <div className="flex flex-col gap-3 w-350 mt-1">
            <Search />
            <Trends feeds={feeds} />
            <Follow />
        </div>
    )
}

export default Feed
