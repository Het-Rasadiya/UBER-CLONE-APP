import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-bottom  bg-[url(https://us.123rf.com/450wm/glebdesign159/glebdesign1592409/glebdesign159240903026/235313227-vector-illustration-of-traffic-light.jpg?ver=6)] h-screen pt-8  w-full flex justify-between flex-col">
        <img
          className="w-16 ml-8"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="uber logo"
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
