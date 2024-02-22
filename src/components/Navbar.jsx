import React, { useState } from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = ()=>{

    const [nav,setNav]=useState(true);
    const navHandler =()=>{
        setNav(!nav);
    }
    return (
        <div className="flex items-center justify-between h-24 max-w-[1240px] mx-auto px-4  text-white " >
            <h1 className="w-full text-[#00df9a] font-bold text-3xl" >React.</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">contact</li>
            </ul>
            <div onClick={navHandler} className="block md:hidden">
                {
                    (!nav)?<AiOutlineClose size={20}  />: <AiOutlineMenu size={20}  />
                }
                
            </div>

            <div className={!nav?'fixed left-0 top-0 w-[60%] h-full border-r border-gray-700 bg-[#000300] ease-in-out duration-500':'fixed left-[-100%]'} >
            <h1 className=" text-[#00df9a] font-bold text-3xl m-4" >React.</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-700">Home</li>
                    <li className="p-4 border-b border-gray-700">Company</li>
                    <li className="p-4 border-b border-gray-700">Resources</li>
                    <li className="p-4 border-b border-gray-700">About</li>
                    <li className="p-4 border-b border-gray-700">contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;

/*
    add below in setting.json for suggestion of tailwind classes
"editor.quickSuggestions": {
    "strings": true
},
"css.validate": false,
"editor.inlineSuggest.enabled": true

item-centre -> across cross-axis
justify-between / justify-around/ justify-even => across main-axis
*/