import React from 'react';

const DataFood = ({ data }) => {
    const { name, recipe, image, price, category } = data
    return (
        <div className=" bg-[#F3F3F3] flex flex-col">
       <div className=' relative'>
       <figure className=' w-full'><img className=' w-full' src={image} alt="Shoes" /></figure>
        <p className=' bg-black text-white px-4 py-1 font-semibold absolute top-0 right-0 mt-2 mr-2'>$ {price}</p>
       </div>
        <div className=" text-center px-5 pt-5 flex-grow">
            <h2 className=" font-bold text-base mb-2">{name}</h2>
            <p className=' text-sm '>{recipe}</p>
        </div>
        <div className=" text-center pb-3">
            <button style={{ borderBottom: '3px solid #BB8506', borderRadius: '8px' }} className=' bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937] mt-5 px-4 py-2'>ADD TO CART</button>
        </div>
    </div>
    );
};

export default DataFood;