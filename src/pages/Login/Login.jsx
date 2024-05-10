import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Shared/providers/AuthProvider";


const Login = () => {

    const { login } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        // console.log(e.currentTarget);

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email, password);

        login(email, password)

        // navigate after login
        navigate(location?.state ? location.state : '/')
        // form('')
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl my-10">Login</h2>

            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center mt-4">Do not have an account? please <Link to='/register' className="font-bold">Register</Link>
            </p>
        </div>
    );
};

export default Login;