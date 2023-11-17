import React from 'react';
import { FaBookmark, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className=' w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4 space-y-3'>
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/paymentinfo"><FaCalendar></FaCalendar> Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                    <li><NavLink to="/dashboard/review"><FaCalendar></FaCalendar> Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/review"><FaList></FaList> My Booking</NavLink></li>
                    <div className=' divider'></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/order/salad"><FaSearch></FaSearch>Menu</NavLink></li>
                </ul>
            </div>
            <div className=' flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;