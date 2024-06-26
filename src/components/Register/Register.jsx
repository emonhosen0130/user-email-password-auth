import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebase.cofig";
import { useState } from "react";

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password);

        if (password.length < 6) {
            setRegisterError('password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters.')
            return;
        }
        else if (!accepted) {
            setRegisterError('Accept our terms and conditions!')
            return;
        }
        setRegisterError('');
        setSuccess('');
        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Successfully')
                sendEmailVerification(result.user)
                    .then(()=> {
                        alert('please check your email and verify your account')
                    })
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-8">please Register</h2>
                <form onSubmit={handleRegister} >
                    <input className="mb-4 w-3/4 py-2 px-4 " type="email" placeholder="Email Address" name="email" id="" required />
                    <br />
                    <input
                        className="mb-4 w-3/4 py-2 px-4"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        name="password" id=""
                        required />
                    <span onClick={() => setShowPassword(!showPassword)}> Show</span>
                    <br />
                    <input type="checkbox" name="terms" id="terms" />
                    <label className="ml-2" htmlFor="terms">Accept our Terms and conditions</label>
                    <br />
                    <input className="btn btn-secondary mb-4 w-3/4 py-2 px-4" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-500">{registerError}</p>
                }
                {
                    success && <p className="text-green-600 font-extrabold text-center">{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;