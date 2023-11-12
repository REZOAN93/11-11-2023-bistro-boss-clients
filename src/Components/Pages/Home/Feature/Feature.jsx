import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import img1 from '../../../../assets/home/featured.jpg'
import './Feature.css'

const Feature = () => {
    return (
        <div className=' text-white feature-style max-w-6xl mx-auto pt-10 mb-20'>
            <SectionTitle
                heading={'Check it out'}
                subheading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className=' grid grid-cols-2 gap-5 px-20 pb-20'>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className=' p-10'>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <div className=' text-white my-5'>
                        <p className=' btn btn-outline text-white border-0 py-2 px-5 text-center border-b-2 rounded-lg'>Read More</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Feature;