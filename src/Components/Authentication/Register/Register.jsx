import img1 from '../../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import imgfacebook from '../../../assets/others/facebook.png'
import imggithub from '../../../assets/others/github.png'
import imgGoogle from '../../../assets/others/google.png'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogin from '../SocialLogin';


const Register = () => {
    const axiosPublic = useAxiosPublic()
    const { createUserEmail, userSignOut, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUserEmail(data.email, data.password)
            .then((userCredential) => {
                // Signed up 
                const userInfo = {
                    name: data.name,
                    email: data.email,
                }
                // save user in the dataBase
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data?.insertedId) {
                            userSignOut()
                            handleUpdateUser(data.name, data.photoURl);
                            navigate('/login')
                        }
                    })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const handleUpdateUser = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo,
        };
        updateUser(profile)
            .then(() => {
                // Profile updated!
                // ...
            })
            .catch((error) => {
                // An error occurred
                // ...
            });
    };

    return (
        <div className="loginContainer max-h-full px-32 pt-10 pb-32">
            <div className="loginpage grid grid-cols-2 items-center border shadow-2xl py-10">

                <div className="w-9/12 mx-auto">
                    <p className=' font-bold text-3xl text-center'>Sign Up</p>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name", { required: true })} name='name' className="input input-bordered" />
                            {errors.name && <span className=' text-red-600'>This name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email" {...register("email", { required: true })} name='email' className="input input-bordered" />
                            {errors.email && <span className=' text-red-600'> This email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="photoURl" {...register("photoURl", { required: true })} name='photoURl' className="input input-bordered" />
                            {errors.photoURl && <span className=' text-red-600'> This photoURl is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" {...register("password", { required: true }, { pattern: /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/ })} name='password' className="input input-bordered" />
                            {errors.password && <span className=' text-red-600'>This password is required</span>}
                            {errors.password?.type === 'pattern' && <span className=' text-red-600'>The password must have one upper case</span>}
                        </div>
                        {/* <div className="form-control">
                            <select {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                        </div> */}

                        <div className="form-control  mt-5">
                            <button className="btn capitalize hover:bg-[#D1A054]  text-white bg-orange-300 border-none">Sign Up</button>
                        </div>
                    </form>
                        <div className="mt-2 text-center">
                            <p className=' text-[#D1A054]'>Already registered? <Link to={'/login'} className=' font-bold'>Go to log in</Link></p>
                            <p className='mt-1'>Or sign up with</p>
                            <div className=' flex items-center justify-center gap-3'>
                                <img className=' btn border rounded-full p-3' src={imgfacebook} alt="" />
                                <img className=' btn border rounded-full p-3' src={imggithub} alt="" />
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                </div>
                <div className="text-center lg:text-left p-5">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;