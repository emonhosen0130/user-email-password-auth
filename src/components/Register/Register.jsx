import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.cofig";

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
             console.log(result.user);
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
                    <input className="mb-4 w-3/4 py-2 px-4 " type="email" placeholder="Email Address" name="email" id="" />
                    <br />
                    <input className="mb-4 w-3/4 py-2 px-4" type="password" placeholder="Password" name="password" id="" />
                    <br />
                    <input className="btn btn-secondary mb-4 w-3/4 py-2 px-4" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;