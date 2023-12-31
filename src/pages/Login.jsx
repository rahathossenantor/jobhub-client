import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const [isShow, setIsShow] = useState(false);
    const [errorStatus, setErrorStatus] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const {
        setProfileAvatar,
        signInUserWithGoogle,
        signInUserWithEmailAndPass
    } = useAuth();

    const handleEmailPassLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const pass = event.target.password.value;

        // reset error status
        setErrorStatus("");

        if (pass.length < 6) {
            setErrorStatus("Invalid password!");
            return;
        }

        // login user account with email and password
        signInUserWithEmailAndPass(email, pass)
            .then(res => {
                event.target.reset();
                Swal.fire({
                    title: "Success!",
                    text: "Login successful!",
                    icon: "success",
                    confirmButtonText: "Close"
                });
                setProfileAvatar(res.user.photoURL);
            })
            .catch(err => setErrorStatus(err.message));
    };

    // login user with google
    const handleGoogleSignIn = () => {
        signInUserWithGoogle()
            .then(res => {
                Swal.fire({
                    title: "Success!",
                    text: "Login successful!",
                    icon: "success",
                    confirmButtonText: "Close"
                });
                setProfileAvatar(res.user.photoURL);
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => setErrorStatus(err.message));
    };

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-14">
            <div className="flex flex-col lg:flex-row-reverse xl:flex-row-reverse">
                <div className="w-full lg:w-1/2 xl:w-1/2 flex justify-center items-center">
                    <img src={bgImage} alt="bg-image" className="w-10/12 inline-block" />
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center">
                    <form onSubmit={handleEmailPassLogin} className="flex max-w-md flex-col gap-4 border p-6 w-[350px] md:w-[390px] lg:w-[380px] xl:w-[400px] bg-base-100 shadow-2xl">
                        <div className="text-center">
                            <h2 className="text-4xl font-medium">Sign In Now!</h2>
                        </div>
                        <div>
                            <div className="block">
                                <Label htmlFor="email2" value="Your email " /><span className="text-red-500">*</span>
                            </div>
                            <TextInput id="email2" name="email" type="email" placeholder="name@email.com" required shadow />
                        </div>
                        <div>
                            <div className="block">
                                <Label htmlFor="password2" value="Your password " /><span className="text-red-500">*</span>
                            </div>
                            <div className="relative">
                                <TextInput id="password2" name="password" type={isShow ? "text" : "password"} placeholder="Type your password" required shadow />
                                <span onClick={() => setIsShow(!isShow)} className="absolute h-full flex items-center top-0 right-3 cursor-pointer">{isShow ? <FaEye className="text-xl"></FaEye> : <FaEyeSlash className="text-xl"></FaEyeSlash>}</span>
                            </div>
                        </div>
                        <p>Don&apos;t have an acount? <Link className="text-blue-700 underline font-medium" to="/register">Register</Link></p>
                        <Button type="submit">Sign in</Button>
                        <div className="text-center">
                            <p className="text-xl mb-2">-------------or-------------</p>
                            <div className="w-full border rounded-lg flex items-center justify-center p-2">
                                <a onClick={handleGoogleSignIn}><img src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/slider/logo/google.svg" className="w-20 cursor-pointer" alt="Google" /></a>
                            </div>
                        </div>
                    </form>

                    {errorStatus && <div>
                        <p className="text-red-500 text-lg font-medium">{errorStatus}</p>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Login;
