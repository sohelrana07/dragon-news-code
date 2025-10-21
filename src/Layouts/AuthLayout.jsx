import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <div className="bg-base-200  min-h-screen">
      <header className="w-11/12 mx-auto py-5">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto ">
        <Outlet></Outlet>
      </main>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default AuthLayout;
