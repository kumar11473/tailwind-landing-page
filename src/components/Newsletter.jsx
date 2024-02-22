import React from "react";

const Newsletter = ()=>{
    return (
        <div className="w-full text-white bg-black p-4 grid md:grid-cols-2 md:px-12">
            <div>
                <h1 className="font-bold text-2xl">Want tips & tricks to optimize your flow?</h1>
                <p>sign up to our newsletter and stay up to data</p>
            </div>
            <div className="mt-4  flex-col  grid md:grid-cols-2 ">
                
                <input  type="email" placeholder="Enter email" className="block text-black rounded-sm p-2"></input>
                <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-10 md:my-0 mx-auto p-3 ">Notify me</button>
                <p>We care about the protection of your data</p>
            </div>
        </div>
    )
}

export default Newsletter;