const Analytics = ()=>{
    return (
        <div className="w-full bg-white py-16 px-4 ">
        <div className="max-w-[1250px] mx-auto grid md:grid-cols-2" >
            <img className="mx-auto w-[500px] " src='/assets/laptop.jpg'></img>
            <div className="flex flex-col justify-center my-3  ">
                <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl">Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptates pariatur possimus ratione temporibu
                     minima voluptatibus ea magni, debitis 
                     voluptas.</p>
                <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  py-3 " >Get started</button>
            </div>
        </div>
        </div>
    )
}
export default Analytics;
/*
mx-0 also align the item in centre if parent div is flex flex-col

 <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
*/