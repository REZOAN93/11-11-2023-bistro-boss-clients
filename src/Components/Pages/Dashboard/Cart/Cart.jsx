import { FaCross, FaRemoveFormat } from 'react-icons/fa';
import useCards from '../../../Hooks/useCards';
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
    const [cart] = useCards()
    const totalPrice = cart.reduce((total, items) => total + items.price, 0)
    console.log(cart, totalPrice)
    const handleDelete = (id) => {
        console.log(id)
    }
    return (
        <div>
            <div className=' p-8 flex justify-evenly'>
                <p className=' text-5xl'>Total Orders: {cart.length}</p>
                <p className=' text-5xl'>Total Price:{totalPrice}</p>
                <button className='btn btn-primary'>Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((na, index) => <>
                                <tr>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={na.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{na.name}</div>
                                                <div className="text-sm opacity-50">{na.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $ {na.price}
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button onClick={() => handleDelete(na._id)} className="btn btn-ghost text-xl text-red-600"><RiDeleteBin5Line /></button>
                                    </th>
                                </tr>
                            </>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Cart;