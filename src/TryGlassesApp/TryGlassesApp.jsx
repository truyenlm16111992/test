import React, { useState } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ListItem from './ListItem';
import listGlasses from "../data/data.json"
const TryGlassesApp = () => {
    const [glasses, setGlasses] = useState("");
    const { name, price, url, desc } = glasses;
    return (
        <div className='flex flex-col bg-[url("../public/glassesImage/background.jpg")] bg-cover w-full min-h-screen'>
            <div className='backdrop-sepia-0 bg-black/70 h-[50px] flex items-center justify-center'>
                <h1 className='text-white text-3xl font-black'>TRY GLASSES APP ONLINE</h1>
            </div>
            <div className='relative flex-1 flex flex-col'>
                <div className='absolute h-full w-full backdrop-sepia-0 bg-black/20'></div>
                <div className='mx-auto flex py-3 space-x-3'>
                    <div className='relative w-[300px] h-[400px] bg-[url("../public/glassesImage/model.jpg")] bg-cover rounded-md shadow-md'>
                        <img className='opacity-[0.85] absolute scale-50 -translate-y-1/4 -translate-x-1/4 top-[calc(25%+6px)] left-[calc(25%+15px)]' src={url ? url : ""} alt="" />
                    </div>
                    <div className='backdrop-sepia-0  rounded-md shadow-md bg-white/90 w-[300px] p-3'>
                        <div className='relative border-2 border-gray-300 rounded-lg h-full block'>
                            <span className='absolute top-0 left-0 translate-x-1/4 -translate-y-1/2 bg-white font-semibold text-blue-500'>Product Info</span>
                            <div className='text-left py-3 px-3 grid grid-cols-3'>
                                <span className='font-bold'>Name</span>
                                <span className='col-span-2'>{url ? name : ""}</span>
                                <span className='font-bold'>Price</span>
                                <span className='col-span-2 text-red-500'>{price ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price) : ""}</span>
                                <span className='font-bold col-span-3'>Description</span>
                                <span className='col-span-3'>{desc ? desc : ""}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 pb-3 flex">
                    <ListItem setGlasses={setGlasses} list={listGlasses} />
                </div>

            </div>
        </div>
    )
}
export default TryGlassesApp