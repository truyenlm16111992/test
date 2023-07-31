import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
const GlassesItem = (props) => {
  const { item, setGlasses, idSelected, setIdSeleted } = props;
  return (
    <SwiperSlide className="py-2" >
      <div className='flex h-full items-center'>
        <div className='relative bg-white rounded-lg shadow-lg min-h-[250px] max-h-[300px] p-3'>
          <span className={`absolute flex items-center text-xl text-lime-500 bg-white rounded-full${+item.id === idSelected ? "" : " hidden"}`}><i class="fa fa-check-circle"></i></span>
          <img className='w-full' src={item.url} alt="" />
          <h2 className="font-bold">{item.name}</h2>
          <h3 className="text-red-500">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(item.price)}</h3>
          <button type="button" className="bg-blue-600 px-5 py-1 rounded-full text-sm text-white" onClick={() => {
            setGlasses(item);
            setIdSeleted(item.id);
          }}>Try item</button>
          <p className="text-gray-400">
            {`${item.desc.substring(0, 50)}...`}
          </p>
        </div>
      </div>
    </SwiperSlide>

  )
}

export default GlassesItem