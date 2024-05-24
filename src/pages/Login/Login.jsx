import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div className="w-full min-h-screen login-page relative px-[10%]">

            <div className="w-[80%] fixed login-form flex items-center gap-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-14 px-24">
                <img className="w-1/2" src="../../../src/assets/others/authentication2.png" />

                <div className="w-1/2">
                    <h3 className="text-center font-inter font-bold text-4xl text-[#151515]">Login</h3>

                    <form className="mt-5 font-inter space-y-5">

                        <Input type="email" placeholder="Type your email" required={true} title="Email"></Input>
                        <Input type="password" placeholder="Type your password" required={true} title="Password"></Input>
                        <Input type="text" placeholder="type here re-captcha" required={true} title=""></Input>
                        <div className="">
                            <button className="bg-[#D1A054B3] w-full py-2 px-4 rounded-md text-lg text-white font-semibold">Login</button>
                        </div>
                    </form>
                    <div className="mt-5 space-y-3 ">
                        <p className="text-lg font-inter text-center text-[#D1A054]">New here? <Link className="font-semibold">Create a New Account</Link></p>
                        <p className="text-[#444444] font-inter font-medium text-center">Or sign in with</p>
                        <div className="flex justify-center items-center gap-8 mt-2">
                            <button className="text-xl border border-[#444444] text-[#444444] p-2 rounded-full"><FaFacebookF></FaFacebookF></button>
                            <button className="text-xl border border-[#444444] text-[#444444] p-2 rounded-full"><FaGoogle></FaGoogle></button>
                            <button className="text-xl border border-[#444444] text-[#444444] p-2 rounded-full"><FaGithub></FaGithub></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;