import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.cofig";
import { Result } from "postcss";
import { useRef, useState } from "react";

const Login = () => {
    const emailRef = useRef(null);


    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setRegisterError('');
        setSuccess('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                if(result.user.emailVerified){
                    setSuccess('Successfully')

                }
                else{
                    alert('please varify your email address')
                }
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);

            })

    }
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        console.log(emailRef.current.value);
        if (!email) {
            console.log(emailRef.current.value)
            return;
        }
        else if (!/\s|^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            console.log('please write a valid email')
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('please check your email')
        })
        .catch(error =>{
            console.log(error)
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    ref={emailRef}
                                    placeholder="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a onClick={handleForgetPassword} href="#"
                                        className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-500">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-600 font-extrabold text-center">{success}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;