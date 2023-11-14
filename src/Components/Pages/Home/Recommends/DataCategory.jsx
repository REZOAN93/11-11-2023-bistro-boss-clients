import { useEffect, useState } from "react";
import RecommendFood from "./RecommendFood";
import DataFood from "./DataFood";
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const DataCategory = ({ arrayDAta }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div>
            <section >

            </section>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div className=' grid grid-cols-4 gap-10 justify-between max-w-6xl mx-auto'>
                        {arrayDAta.map(na => <DataFood data={na} key={na._id}></DataFood>)}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default DataCategory;