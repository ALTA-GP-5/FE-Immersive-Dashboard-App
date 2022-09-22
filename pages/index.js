import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import axios from "axios";

import logo1 from "../assets/logo1.png";

export default function Home() {
  const route = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let newuser = { ...user };
    newuser[e.target.name] = e.target.value;
    setUser(newuser);
  };

  const handleLogin = () => {
    axios
      .post("https://immersiveapp.site/login", user)
      .then((response) => {
        setCookie("Token", response.data.data.token);
        console.log(response);
        route.push("/dashboard");
      })
      .catch((error) => console.log(error.response.data));
  };

  return (
    <>
      {/* Form Login */}
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <div className="text-center object-fill h-25 w-25 ">
                  <Image src={logo1} alt="qwerty" />
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      onChange={(e) => handleChange(e)}
                      autocomplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      for="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      onChange={(e) => handleChange(e)}
                      autocomplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      for="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      onClick={handleLogin}
                      className="bg-gray-500 text-white rounded-md px-2 py-1"
                    >
                      Login
                    </button>
                    <p className="text-center text-xs mt-4 font-bold ">
                      Success is no accident. It is hard work, perseverance,
                      learning, studying, sacrifice and most of all, love of
                      what you are doing or learning to do
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
