import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { FaCartPlus } from "react-icons/fa";
import useCards from '../../Hooks/useCards';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const [cart] = useCards()

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                // Sign-out successful.
                navigate('/')
            }).catch((error) => {
                // An error happened.
            });
    }

    const navData = <>
        <div className=' flex gap-5 text-base font-bold'>
            <NavLink to={'/'}>HOME</NavLink>
            <NavLink to={'/'}>CONTACT US</NavLink>
            <NavLink to={'/'}>DASHBOARD</NavLink>
            <NavLink to={'/ourmenue'}>OUR MENU</NavLink>
            <NavLink to={'/order/salad'}>ORDER FOOD</NavLink>
            {
                user ? <>
                    <NavLink to={'/profile'}>PROFILE</NavLink>
                    <NavLink to={'/dashboard/cart'}>
                        <button className=' flex'>
                            CART
                            <FaCartPlus className=' text-3xl' />
                            <div className="badge badge-secondary ml-1">+{cart.length}</div>
                        </button>
                    </NavLink>
                </>
                    : ''
            }
        </div>
    </>
    return (
        <div className="navbar fixed z-30 bg-black bg-opacity-40 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navData}
                    </ul>
                </div>
                <div className='flex flex-col ml-6'>
                    <p className=' text-lg font-bold'>BISTRO BOSS</p>
                    <p className=' text-base font-semibold'>RESTAURANT</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navData}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user ? <>
                        <Link className='btn bg-zinc-100 hover:bg-black btn-outline mr-5' to={'/login'}>Login</Link>
                        <Link className='btn bg-zinc-100 hover:bg-black btn-outline' to={'/register'}>Register</Link>
                    </> : <>
                        <img className=' border-2 p-1 rounded-full w-12 h-12 mr-3' src={user.photoURL} alt="" />
                        <button className='btn' onClick={handleSignOut}>SignOut</button>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;