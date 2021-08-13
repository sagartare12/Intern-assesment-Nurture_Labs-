import React from 'react'
import {AiOutlineSearch } from "react-icons/ai";

const Searchbox = () => {
    return (
        <div>
        <div className="main">
            <span className="content">Add another keyword</span>
            <span className="content sub">1/3</span>
            <span className="sub2">UPGRADE</span>
        </div>
        <div className="main_box">
        <div className="searchbox">
            <AiOutlineSearch />
            <input placeholder="Enter your filters here" type="text" />
            <button>SAVE FILTERS</button>
        </div>
        </div>
        </div>
    )
}

export default Searchbox
