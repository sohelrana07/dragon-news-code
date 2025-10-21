import React, { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { sendEmailVerification } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    // Validation Regular Expressions
    const nameRegex = /^[A-Za-z.\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

    // 🔍 Input Validation
    if (!nameRegex.test(name)) return setError("Invalid name format");
    if (!emailRegex.test(email)) return setError("Invalid email address");
    if (!passwordRegex.test(password))
      return setError(
        "Password must be at least 6 characters and include uppercase, lowercase, and a special character."
      );

    // reset error
    setError("");

    if (!terms) {
      setError("Accept our Terms and Conditions");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        e.target.reset();
        setSuccess("Register successful");

        // updata profile
        const profile = {
          displayName: name,
          photoURL: photo,
        };

        updateUser(profile)
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            console.log(error);
          });

        // email verification
        sendEmailVerification(user).then(() => {
          toast.warning("verify your email address");
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-semibold text-2xl text-center text-primary pb-5 mb-3 border-b border-gray-200">
            Register your account
          </h2>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Your Name */}
              <label className="label">Your Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter your name"
                required
              />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email address"
                required
              />

              {/* Password */}
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
                <label className="label">
                  <input type="checkbox" name="terms" className="checkbox" />
                  Accept Term & Conditions
                </label>
              </div>
              {error && <p className="font-semibold text-error">{error}</p>}
              {success && (
                <p className="font-semibold text-green-500">{success}</p>
              )}
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="text-center mt-5 font-semibold">
                Already Have An Account ?{" "}
                <Link
                  className="text-secondary hover:underline"
                  to="/auth/login"
                >
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
