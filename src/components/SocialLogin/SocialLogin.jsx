import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })
                // navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="flex justify-center items-center gap-8 mt-2">
            <button className="text-xl border border-[#444444] text-[#444444] p-2 rounded-full"><FaFacebookF></FaFacebookF></button>
            <button onClick={handleGoogleLogin} className="text-xl border border-[#444444] text-[#444444] p-2 rounded-full"><FaGoogle></FaGoogle></button>
            <button className="text-xl border border-[#444444] text-[#444444] p-2 rounded-full"><FaGithub></FaGithub></button>
        </div>
    );
};

export default SocialLogin;