import React from 'react'
import '../cs.css'
import { MdHome} from "react-icons/md";
import {FcTrademark} from "react-icons/fc";
import {BsPeopleFill} from "react-icons/bs";
import {GoCreditCard} from "react-icons/go";
import {AiFillStar} from "react-icons/ai";



const Sidebar = () => {
    const SIDEBAR_ITEMS = [
        {
            icon : <MdHome />,
            name : "Home"
        },
         {
            icon :<BsPeopleFill/>,
            name : "Matches"
        },
         {
            icon : <GoCreditCard />,
            name : "Mongo Services"
        },
         {
            icon :<GoCreditCard/>,
            name : "Integration"
        },
         {
            icon : <GoCreditCard />,
            name : "Alerts"
        },
         {
            icon : <AiFillStar />,
            name : "Settings"
        },
    ]
    return (
        <div className="sidebar">
            <div className="logo">
               
                <div><span className="icon"><FcTrademark /></span></div>
                <div><span className="name">TermMonitor</span></div>
               
            
            </div>
            {
                SIDEBAR_ITEMS.map(el => (
                    <div className="sidebar_items">
                        <div><span className="el_icon">{el.icon}</span></div>
                        <div><span className="el_name">{el.name}</span></div>
                    </div>
                ))
            }
            <div className="billings"><span>Billings</span></div>
        </div>
    )
}

export default Sidebar
