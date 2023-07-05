import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div
        className="h-screen relative flex flex-col items-center"
        style={{
          background: "url('/images/lee-campbell-DtDlVpy-vvQ-unsplash.jpg')",
          backgroundSize: "cover",
        }}
      >
        <Navbar />

        <div className=" text-center text-white h-full flex items-center abosulte">
          <div>
            <div>
              <h1 className="text-6xl">Hi, it&apos;s me Ryad</h1>
            </div>
            <div>
              <h2 className="text-3xl">
                I am a professional freelancer in New York City
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
