import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import { Outlet } from "react-router";
import RightAside from "../Components/HomeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header className="mt-14">
        <Header></Header>
        <section className="w-11/12 mx-auto my-5">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-5">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto mt-20 mb-10 grid grid-cols-12 gap-5 ">
        {/* Left side category */}
        <aside className="col-span-3 h-fit sticky top-5">
          <LeftAside></LeftAside>
        </aside>
        {/* dynamic Pages */}
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        {/* Right side */}
        <aside className="col-span-3 h-fit sticky top-5">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
