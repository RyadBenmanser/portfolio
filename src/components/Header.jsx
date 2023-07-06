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
        {/* <Navbar /> */}

        <div className=" text-center text-white h-full flex items-center abosulte">
          <div className="bg-black opacity-80 rounded-md px-4">
            <div className="my-4">
              <h1 className="text-6xl">Salut, c&apos;est moi Ryad.</h1>
            </div>
            <div>
              <h2 className="text-3xl">Je suis un freelance Rabat.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
