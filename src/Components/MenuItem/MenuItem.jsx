import React from 'react';

const MenuItem = ({ items }) => {
    const { name, recipe, image, price, category } = items
    return (
        <div className=' grid grid-cols-5 gap-3 justify-center'>
            <img className=' rounded-b-full rounded-r-full w-[200px] h-[100px]' src={image} alt="" />
            <div className=' col-span-3 text-[#737373]'>
                <p className=' uppercase font-bold'>{name} ----------------</p>
                <p>{recipe}</p>
            </div>
            <p className=' font-bold text-[#BB8506]'>$ {price}</p>
        </div>
    );
};

export default MenuItem;