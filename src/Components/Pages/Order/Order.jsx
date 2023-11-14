import bacgroundImage from '../../../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import UseMenu from '../../../Hooks/UseMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import DataCategory from '../Home/Recommends/DataCategory';
import { useParams } from 'react-router-dom';

const Order = () => {
    const [menudata] = UseMenu()
    const categorires = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = categorires.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const deserts = menudata.filter(na => na.category === "dessert")
    const salad = menudata.filter(na => na.category === "salad")
    const drinks = menudata.filter(na => na.category === "drinks")
    const popular = menudata.filter(na => na.category === "popular")
    const pizza = menudata.filter(na => na.category === "pizza")
    const soup = menudata.filter(na => na.category === "soup")
    const offered = menudata.filter(na => na.category === "offered")
    console.log(category)

    return (
        <div>
            <Helmet><title>Bistro | Order</title></Helmet>
            <Cover bgImg={bacgroundImage} menuTitle='ORDER FOOD' menuDescription='Would you like to try a dish?'></Cover>
            {/* {
                menudata.map(na => <button className=' btn' key={na._id}>{na.category}</button>)
            } */}
            <Tabs className=' max-w-6xl mx-auto my-10' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-center border-0 font-bold'>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERT</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel className='mt-5'><DataCategory arrayDAta={salad}></DataCategory></TabPanel>
                <TabPanel className='mt-5'><DataCategory arrayDAta={pizza}></DataCategory></TabPanel>
                <TabPanel className='mt-5'><DataCategory arrayDAta={soup}></DataCategory></TabPanel>
                <TabPanel className='mt-5'><DataCategory arrayDAta={deserts}></DataCategory></TabPanel>
                <TabPanel className='mt-5'><DataCategory arrayDAta={drinks}></DataCategory></TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;