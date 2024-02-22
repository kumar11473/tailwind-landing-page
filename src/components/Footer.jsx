import React from "react";
import { FaFacebookSquare ,FaInstagramSquare,FaLinkedin  } from "react-icons/fa";
import { FaSquareXTwitter,FaHeart ,FaRegCopyright } from "react-icons/fa6";

const Footer = ()=>{
    return(
        <div className="w-full bg-black ">
            <div className="grid md:grid-cols-2 ">
                <div className="text-white p-8">
                    <h1 className="text-[#00df9a] font-bold text-2xl">REACT.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde assumenda quam est ius minus sunt.</p>
                    <div className="flex gap-2 mt-2">
                    <FaFacebookSquare size={30} />
                    <FaInstagramSquare size={30} />
                    <FaSquareXTwitter size={30} />
                    <FaLinkedin size={30} />
                    </div>
                </div>
                <div className="text-white  grid grid-cols-3 p-8">
                    <div className="">
                        <h1 className="font-bold text-xl">Solutions</h1>
                        <ul classname="mt-2">
                            <li>Analytics</li>
                            <li>Marketing</li>
                            <li>Commerce</li>
                            <li>Insight</li>

                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl" >Support</h1>
                        <ul classname="mt-2 ">
                            <li>Pricing</li>
                            <li>Docs</li>
                            <li>Guides</li>
                            <li>Analytics</li>

                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl " >Company</h1>
                        <ul classname="mt-2">
                            <li>About</li>
                            <li>Jobs</li>
                            <li>Conatact us</li>
                            <li>Partners</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className=" flex justify-center">
            <h1 className="text-white  ">Build with <FaHeart className="inline " color="red" /> by team kumar6744<FaRegCopyright className="inline mb-3" size={9}/> </h1>
            </div>
        </div>
    )}
    export default Footer;