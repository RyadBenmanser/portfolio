import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <div>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Contact
      </h2>
      <h1 className="text-3xl text-center">Got a problem to solve?</h1>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Get your space suit ready and tell me your ideas to develop your dream
        website.
        <br />
        <span className="text-black">
          <Link href={"mailto:ryadbenmanser@gmail.com"}>
            <svg
              aria-hidden="true"
              className="h-5 inline w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
            </svg>
            ryadbenmanser@gmail.com
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Info;
