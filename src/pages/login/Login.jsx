import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Location in the log in page", location);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-gray-200 w-full p-10 pb-44 text-center flex flex-col justify-center items-center">
      <Navbar></Navbar>

      <form
        onSubmit={handleLogin}
        className="mt-20 w-3/4 flex flex-col items-center shadow-md py-20 rounded-xl bg-white"
      >
        <h2 className="text-4xl font-bold pb-12">Login your account</h2>
        <div className="form-control w-3/4 border-t-2 pt-12 mb-6">
          <label className="label mb-3">
            <span className="label-text text-xl font-bold">Email address</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="input bg-[#F3F3F3]"
            required
          />
        </div>
        <div className="form-control w-3/4">
          <label className="label mb-3">
            <span className="label-text text-xl font-bold">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="input bg-[#F3F3F3]"
            required
          />
        </div>
        <div className="form-control mt-10 w-3/4">
          <button className="btn text-white hover:text-black bg-[#403F3F]">
            Login
          </button>
        </div>
        <span className="mt-8 font-semibold flex">
          <p className="text-[#706F6F] ">Do not Have An Account ? </p>{" "}
          <Link to="/register" className="text-[#FF8C47]">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
