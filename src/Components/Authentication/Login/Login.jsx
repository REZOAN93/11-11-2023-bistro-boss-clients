import './Login.css'
import img1 from '../../../assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import imgfacebook from '../../../assets/others/facebook.png'
import imggithub from '../../../assets/others/github.png'
import imgGoogle from '../../../assets/others/google.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { replace } from 'formik';

const Login = () => {
    const { signinUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [disabled, setDisable] = useState(true)
    const [error, setError] = useState('')
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signinUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    const handlecaptachcheck = (e) => {
        const captaValue = e.target.value;
        if (validateCaptcha(captaValue) == true) {
            setDisable(false)
        }
        else {
            alert('capcha does not match Please type correctly')
            setDisable(true)
        }
    }



    return (
        <div className="loginContainer min-h-screen  px-32 pt-10 pb-10">
            <div className="loginpage grid grid-cols-2 items-center border shadow-2xl py-5">
                <div className="text-center lg:text-left p-5">
                    <img src={img1} alt="" />
                </div>
                <div className="w-9/12 mx-auto">
                    <p className=' font-bold text-3xl text-center'>Login</p>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-5 grid grid-cols-2 gap-6">
                            <LoadCanvasTemplate />
                            <input onBlur={handlecaptachcheck} type="text" placeholder="Type Here" name='captcha' className="input input-bordered" />

                        </div>
                        <div className="form-control mt-2">
                        </div>
                        <div className="form-control  mt-5">
                            <p>{error}</p>
                            <button disabled={disabled} className="btn capitalize hover:bg-[#D1A054]  text-white bg-orange-300 border-none">Sign In</button>
                        </div>
                        <div className="form-control  mt-2 text-center">
                            <p className=' text-[#D1A054]'>New here? <Link to={'/register'} className=' font-bold'>Create a New Account</Link></p>
                            <p className='mt-1'>Or sign in with</p>
                            <div className=' flex items-center justify-center gap-3'>
                                <img className=' btn border rounded-full p-3' src={imgfacebook} alt="" />
                                <img className=' btn border rounded-full p-3' src={imggithub} alt="" />
                                <img className=' btn border rounded-full p-3' src={imgGoogle} alt="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;