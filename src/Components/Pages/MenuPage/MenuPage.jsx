import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import bacgroundImage from '../../../assets/menu/banner3.jpg'

const MenuPage = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover
                bgImg={bacgroundImage}
                menuTitle='OUR MENU'
                menuDescription='Would you like to try a dish?'
            >
            </Cover>
            <h1>This is Menu page</h1>

        </div>
    );
};

export default MenuPage;