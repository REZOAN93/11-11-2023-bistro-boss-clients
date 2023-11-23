import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import RecommendFood from './RecommendFood';

const Recommends = () => {
    const [menudata, setMenuData] = useState([])
    useEffect(() => {
        fetch('https://11-11-2023-bistro-boss-server.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(na => na.category == 'salad')
                setMenuData(popular)
            })
    }, [])
    return (
        <div>
            <SectionTitle
                heading={'Should Try'}
                subheading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <section className=' grid grid-cols-3 gap-10 mb-10 max-w-6xl mx-auto'>
                {
                    menudata.map(na => <RecommendFood key={na._id} data={na}></RecommendFood>)
                }
            </section>
        </div>
    );
};

export default Recommends;