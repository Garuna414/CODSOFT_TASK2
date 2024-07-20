import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    role: "Candidate", // default role
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the /api/signup endpoint
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Error occurred while creating user:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-white p-5 flex flex-col items-center justify-center align-middle h-full overflow-y-auto">
      <div className="bg-blue-500 rounded-lg w-full md:w-[50vw] grid grid-cols-1 justify-center items-center px-3 py-2">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 items-center p-3 text-white text-sm md:text-lg md:gap-3 lg:gap-5"
        >
          <div className="items-center justify-center">
            <label className="font-serif text-sm lg:text-lg" htmlFor="username">
              Username
            </label>
            <br />
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="h-7 text-sm md:text-md lg:h-8 rounded-lg mt-0 md:mt-1 mb-5 px-3 w-full text-black"
            />
            <br />
            <label className="font-serif text-sm lg:text-lg" htmlFor="email">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="h-7 text-sm md:text-md lg:h-8 rounded-lg mt-0 md:mt-1 mb-5 px-3 w-full text-black"
            />
            <br />
            <label className="font-serif text-sm lg:text-lg" htmlFor="password">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="h-7 text-sm md:text-md lg:h-8 rounded-lg mt-0 md:mt-1 mb-5 px-3 w-full text-black"
            />
            <br />
            <label className="font-serif text-sm lg:text-lg" htmlFor="phone">
              Phone
            </label>
            <br />
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="h-7 text-sm md:text-md lg:h-8 rounded-lg mt-0 md:mt-1 mb-5 px-3 w-full text-black"
            />
            <br />
            <label htmlFor="role" className="font-serif text-sm lg:text-lg">
              Profession
            </label>
            <br />
            <div className="flex flex-row flex-wrap justify-between gap-2">
              <div className="w-auto flex flex-col font-serif h-full">
                <select
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="text-black px-3 py-[5px] rounded-lg h-full text-sm md:text-md lg:text-lg"
                >
                  <option value="Candidate">Candidate</option>
                  <option value="Employer">Employer</option>
                </select>
              </div>
              <div className="w-auto flex flex-col justify-center items-center">
                <button
                  type="submit"
                  className="bg-white text-black font-serif px-3 py-[2px] md:py-[4px] lg:py-[2px] rounded-lg hover:scale-105 hover:shadow-md hover:shadow-gray-500 md:text-md lg:text-lg text-sm"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-2 mt-5 flex-wrap">
              <p className="font-serif">Already have an account?</p>
              <Link to="/login" className="font-serif hover:underline">
                Login
              </Link>
            </div>
          </div>
          <hr className="block md:hidden" />
          <div className="flex flex-col justify-center items-center font-serif w-full mt-5 md:mt-0">
            <p className="text-md md:text-lg m-auto">Sign in with Google</p>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-2xl mt-2 hover:scale-105 hover:shadow-md hover:shadow-gray-500 m-auto">
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
