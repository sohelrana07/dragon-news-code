import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { MdOutlineMailLock } from "react-icons/md";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("LogOut successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="font-bold flex items-center gap-2 text-green-600">
        {user ? <MdOutlineMailLock size={25} color="green" /> : ""}
        {user && user.email}
      </div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-5">
        <img className="w-14 h-14 rounded-full" src={user ? user.photoURL : userIcon} alt=""/>
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
