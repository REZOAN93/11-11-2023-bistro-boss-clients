import React from 'react';
import img1 from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className=' relative max-w-6xl mx-auto my-10'>
            <img src={img1} alt="" />
            <div className=' absolute top-10 mx-auto '>
               <div className=' w-10/12 h-10/12 px-10 py-24 text-center mx-auto bg-white space-y-5'>
               <p className=' text-4xl'>Bistro Boss</p>
                <p className=' text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
               </div>
            </div>
        </div>
    );
};

export default BistroBoss;