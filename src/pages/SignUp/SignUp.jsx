import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const SignUp = () => {

    const { createUser, updateProfiles } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photo = form.photo.value
        console.log(email, password, name);

        createUser(email, password)
            .then(() => {
                console.log('user created');
                updateProfiles(name, photo)
                    .then(() => {
                        const userInfo = {
                            name,
                            email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "User Created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    form.reset()
                                }
                            })

                        navigate('/')
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="w-full min-h-screen login-page relative px-4 sm:px-[7%]">

                <div className="lg:w-[86%] w-full mx-auto lg:mx-0 lg:absolute login-form flex flex-col items-center gap-5 top-1/2 lg:flex-row-reverse left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 py-14 lg:px-[5%] sm:px-10 px-4">
                    <img className="lg:w-1/2 w-full" src="../../../src/assets/others/authentication2.png" />

                    <div className="lg:w-1/2 w-full">
                        <h3 className="text-center font-inter font-bold text-4xl text-[#151515]">Sign Up</h3>

                        <form onSubmit={handleSignUp} className="mt-5 font-inter space-y-5">

                            <Input name="name" type="text" placeholder="Type your name" required={true} title="Name"></Input>

                            <Input name="photo" type="text" placeholder="Type your photo URL" required={true} title="Photo URL"></Input>

                            <Input name="email" type="email" placeholder="Type your email" required={true} title="Email"></Input>


                            <Input name="password" type="password" placeholder="Type your password" required={true} title="Password"></Input>

                            <div className="">
                                <button className={`w-full py-2 px-4 rounded-md text-lg text-white font-semibold bg-[#D1A054B3]`}>Sign Up</button>
                            </div>
                        </form>
                        <div className="mt-5 space-y-3 ">
                            <p className="text-lg font-inter text-center text-[#D1A054]">Already registered? <Link className="font-semibold" to='/login' >Go to log in</Link></p>
                            <p className="text-[#444444] font-inter font-medium text-center">Or sign in with</p>

                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SignUp;