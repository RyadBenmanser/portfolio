"use client";
import Link from "next/link";
import React from "react";
import Info from "./Info";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleClick = async (data) => {
    await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <section className="bg-white ">
      <div className=" px-4 mx-auto max-w-screen-md">
        <Info />
        <form
          action="#"
          className="space-y-8 flex flex-col"
          onSubmit={handleSubmit(handleClick)}
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
              placeholder="example@gmail.com"
              {...register("email", { required: "email required" })}
            />
            {errors.email && (
              <p className="text-red-500 ">{errors.email?.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 "
              placeholder="Let me know how we can help you"
              {...register("subject", { required: "subject is required" })}
            />
            {errors.subject && (
              <p role="alert" className="text-red-500">
                {errors.subject?.message}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-purple-500 focus:border-purple-500 "
              placeholder="Leave your message..."
              defaultValue={""}
              {...register("message", {
                required: "message is required",
              })}
            />
            {errors.message && (
              <p role="alert" className="text-red-500">
                {errors.message?.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-700 sm:w-fit hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 self-end"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
