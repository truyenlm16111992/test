import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import GlassesItem from './GlassesItem';

const ListItem = (props) => {
  const { list, setGlasses } = props;
  const [idSelected, setIdSeleted] = useState(-1);
  return (
    <Swiper
      slidesPerView={5}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="bg-white/30 w-full"
    >
      {list.map(e => (
        <SwiperSlide className="py-2" key={e.id}>
          <GlassesItem item={e} setGlasses={setGlasses} idSelected={idSelected} setIdSeleted={setIdSeleted} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ListItem