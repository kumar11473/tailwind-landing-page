import React from "react";
import { ReactTyped } from "react-typed";
const Hero = ()=>{
    return (
        <div className="text-white " >
            <div className=" max-w-[800px] h-screen mx-auto mt-[-96px] w-full flex flex-col justify-center text-center space-y-2 ">
                <p className="text-[#00df9a]">GROWING WITH DATA ANALYTICS</p>
                <h1 className="text-3xl font-bold ">Grow with data.</h1>
                <div className="space-y-2 ">
                    <p className="inline">Fast, Flexible financing for </p>
                    <ReactTyped className="text-gray-500"
                    strings={['SaaS','Paas','IaaS']} typeSpeed={60} backSpeed={60} loop>
                    </ReactTyped>
                    <p className="text-gray-500">Lorem ipsusectetur adipisicing tatum dolore rerum. Non, ipsum dolorem.</p>
                    <button className="text-black bg-[#00df9a] rounded-sm p-2">Get started</button>
                </div>
                
            </div>
            
        </div>
    )
}
export default Hero;

/*
h-screen => height = viewport
*/