import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { singInUser, passwordReset } = use(AuthContext);
  const emailRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

    if (!emailRegex.test(email)) return setError("Invalid email address");
    if (!passwordRegex.test(password)) {
      return setError("Invalid password format");
    }

    // reset error
    setError("");

    singInUser(email, password)
      .then((result) => {
        const user = result.user;

        e.target.reset();
        navigate(`${location.state ? location.state : "/"}`);

        if (!user.emailVerified) {
          toast.warning("verify your email address");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handlePasswordReset = () => {
    const email = emailRef.current.value;
    passwordReset(email)
      .then(() => {
        toast("Check your email and reset your password");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-semibold text-2xl text-center text-primary pb-5 mb-3 border-b border-gray-200">
            Login your account
          </h2>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email address</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="input"
                placeholder="Enter your email address"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Enter your password"
                  required
                />
                <button
                  onClick={handleTogglePasswordShow}
                  className="absolute top-[50%] translate-y-[-50%] right-8"
                >
                  {showPassword ? (
                    <FaEyeSlash size={22} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              </div>
              <div>
                <a onClick={handlePasswordReset} className="link link-hover">
                  Forgot password?
                </a>
              </div>
              {error && <p className="text-secondary ">{error}</p>}
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <p className="text-center mt-5 font-semibold">
                Dont’t Have An Account ?{" "}
                <Link
                  className="text-secondary hover:underline"
                  to="/auth/register"
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
