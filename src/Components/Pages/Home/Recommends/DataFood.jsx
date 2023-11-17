import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const DataFood = ({ data }) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const { name, recipe, image, price, category } = data

    const handleAddToCart = (food) => {
        if (user && user.email) {
            // send cart item to the data base
            const cartItem = {
                menuId: food._id,
                email: user.email,
                name, recipe, image, price, category
            }
            console.log(cartItem)
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res?.data?.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to the cart successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Login!",
                text: "Please login to add to cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                    // Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    // });
                }
            });
        }
    }


    return (
        <div className=" bg-[#F3F3F3] flex flex-col">
            <div className=' relative'>
                <figure className=' w-full'><img className=' w-full' src={image} alt="Shoes" /></figure>
                <p className=' bg-black text-white px-4 py-1 font-semibold absolute top-0 right-0 mt-2 mr-2'>$ {price}</p>
            </div>
            <div className=" text-center px-5 pt-5 flex-grow">
                <h2 className=" font-bold text-base mb-2">{name}</h2>
                <p className=' text-sm '>{recipe}</p>
            </div>
            <div className=" text-center pb-3">
                <button onClick={() => handleAddToCart(data)} style={{ borderBottom: '3px solid #BB8506', borderRadius: '8px' }} className=' bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937] mt-5 px-4 py-2'>ADD TO CART</button>
            </div>
        </div>
    );
};

export default DataFood;