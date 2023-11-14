import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import bacgroundImage from '../../../assets/menu/banner3.jpg'
import bacgroundImage1 from '../../../assets/menu/pizza-bg.jpg'
import bacgroundImage2 from '../../../assets/menu/salad-bg.jpg'
import bacgroundImage3 from '../../../assets/menu/dessert-bg.jpeg'
import bacgroundImage4 from '../../../assets/menu/soup-bg.jpg'
import Menu from '../Home/Menu/Menu';
import UseMenu from '../../../Hooks/UseMenu';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';
import SectionTitle from '../../SectionTitle/SectionTitle';

const MenuPage = () => {
    const [menudata] = UseMenu()
    const dessert = menudata.filter(na => na.category === "dessert")
    const salad = menudata.filter(na => na.category === "salad")
    const drinks = menudata.filter(na => na.category === "drinks")
    const popular = menudata.filter(na => na.category === "popular")
    const pizza = menudata.filter(na => na.category === "pizza")
    const soup = menudata.filter(na => na.category === "soup")
    const offered = menudata.filter(na => na.category === "offered")
    return (
        <div className=' space-y-10'>
            <Helmet><title>Bistro | Menu</title></Helmet>
            <Cover bgImg={bacgroundImage} menuTitle='OUR MENU' menuDescription='Would you like to try a dish?'></Cover>
            <SectionTitle heading="Don't miss" subheading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory arrayDAta={offered} title={"offered"}></MenuCategory>
            <Cover bgImg={bacgroundImage3} menuTitle='DESSERTS' menuDescription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            <MenuCategory arrayDAta={dessert} title={"dessert"}></MenuCategory>
            <Cover bgImg={bacgroundImage1} menuTitle='PIZZA' menuDescription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            <MenuCategory arrayDAta={pizza} title={"pizza"}></MenuCategory>
            <Cover bgImg={bacgroundImage2} menuTitle='SALADS' menuDescription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            <MenuCategory arrayDAta={salad} title={"salad"}></MenuCategory>
            <Cover bgImg={bacgroundImage4} menuTitle='SOUPS' menuDescription='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
            <MenuCategory arrayDAta={soup} title={"soup"}></MenuCategory>
        </div>
    );
};

export default MenuPage;