import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import MenuItem from '../../../MenuItem/MenuItem';


const Menu = () => {
    const [menudata, setMenuData] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(na => na.category == 'popular')
                setMenuData(popular)
            })
    }, [])
    return (
        <div className=' mb-10'>
            <SectionTitle
                heading={'Check it out'}
                subheading={'FROM OUR MENU'}
            ></SectionTitle>
            <section className=' grid grid-cols-2 gap-10 justify-between max-w-6xl mx-auto'>
                {
                    menudata.map(na => <MenuItem items={na} key={na._id}></MenuItem>)
                }
            </section>
            <div className=' flex justify-center my-5 text-[#1F2937]'>
                <p className=' w-[150px] text-center border-b-2 rounded-lg'>View Full  Menu</p>
            </div>
        </div>
    );
};

export default Menu;