"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ sendStateOfSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [sending, setSending] = useState(true);

  const handleClick = async (data) => {
    sendStateOfSubmit(false);
    await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    sendStateOfSubmit(true);

    reset();
  };
  return (
    <>
      {sending ? (
        <form
          action="#"
          className="space-y-8 flex flex-col"
          onSubmit={handleSubmit(handleClick)}
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Votre Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
              placeholder="exemple@gmail.com"
              {...register("email", {
                required: "Email requis",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Adresse email invalide",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Votre demande
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Expliquez-nous comment nous pouvons vous aider"
              {...register("subject", {
                required: "Demande requise",
              })}
            />
            {errors.subject && (
              <p role="alert" className="text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Laissez-nous votre message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Écrivez votre message..."
              defaultValue={""}
              {...register("message", {
                required: "Message requis",
              })}
            />
            {errors.message && (
              <p role="alert" className="text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-700 sm:w-fit hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 self-end"
          >
            Envoyez votre message
          </button>
        </form>
      ) : (
        <Image
          src={"/images/paper-planner.gif"}
          width={200}
          height={200}
          alt=""
        />
      )}
    </>
  );
};

export default Form;
