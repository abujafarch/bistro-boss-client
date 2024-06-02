import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {

    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)
    const { signIn } = useContext(AuthContext)
    // const location = useLocation()
    const from = useLocation().state?.from.pathname
    const navigate = useNavigate()

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value
        console.log(user_captcha_value);

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
            captchaRef.current.value = ''
        }

        else {
            alert('Captcha Does Not Match');
            captchaRef.current.value = ''
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
            .then(() => {
                console.log('logged in successfully');
                form.reset()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged in successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                // navigate(from, { replace: true })
                navigate(from || '/')
            })
            .catch(error => {
                console.log(error);
            })
    }



    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="w-full min-h-screen login-page relative px-4 sm:px-[7%]">

                <div className="lg:w-[86%] w-full mx-auto lg:mx-0 lg:absolute login-form flex flex-col lg:flex-row items-center gap-5 top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 py-14 lg:px-[5%] sm:px-10 px-4">
                    <img className="lg:w-1/2 w-full" src="../../../src/assets/others/authentication2.png" />

                    <div className="lg:w-1/2 w-full">
                        <h3 className="text-center font-inter font-bold text-4xl text-[#151515]">Login</h3>

                        <form onSubmit={handleLogin} className="mt-5 font-inter space-y-5">

                            <Input name="email" type="email" placeholder="Type your email" required={true} title="Email"></Input>

                            <Input name="password" type="password" placeholder="Type your password" required={true} title="Password"></Input>

                            <div className="">
                                <LoadCanvasTemplate />
                            </div>

                            {/* <Input type="text" ref={captchaRef} placeholder="type here re-captcha" required={true} title=""></Input> */}

                            <div className="w-full">
                                <input type="text" placeholder="type here re-captcha" className="outline-none w-full px-4 py-3 rounded-md border border-[#D0D0D0]" ref={captchaRef} />
                            </div>

                            <p onClick={handleValidateCaptcha} className="px-5 py-3 w-max rounded-md cursor-pointer bg-green-600 text-white font-semibold">Validate</p>

                            <div className="">
                                <button disabled={disabled} className={`w-full py-2 px-4 rounded-md text-lg text-white font-semibold ${disabled ? 'cursor-not-allowed bg-gray-500' : 'bg-[#D1A054B3]'}`}>Login</button>
                            </div>
                        </form>
                        <div className="mt-5 space-y-3 ">
                            <p className="text-lg font-inter text-center text-[#D1A054]">New here? <Link className="font-semibold" to='/signup' >Create a New Account</Link></p>
                            <p className="text-[#444444] font-inter font-medium text-center">Or sign in with</p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;