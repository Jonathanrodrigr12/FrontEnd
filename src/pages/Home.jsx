import React from "react";
import { Hero } from "../components";
import "./login.css"

const Home = () => {
  return (
    <div>
      <div className="w-full bg-primary h-[100vh] z-0 ">
        <div className="flex flex-col justify-center items-center">
          <Hero/>
        </div>
      </div>
    </div>
  );
};

export default Home;
