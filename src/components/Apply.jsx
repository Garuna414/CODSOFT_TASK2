import React from "react";
import { useLocation } from "react-router-dom";

export default function Apply(data) {
  let { state } = useLocation();
  return (
    <div className="w-full h-[calc(100vh_-_48px)] p-5">
      <div className="border border-black rounded-xl p-5 flex flex-col gap-2 items-start justify-start font-serif">
        <b className="text-2xl md:text-3xl">{state.data.jobName}</b>
        <div className="flex flex-col md:flex-row flex-wrap gap-3">
          <b className="text-xl md:text-2xl">Organisation:</b>
          <h2 className="text-xl md:text-2xl">{state.data.companyName}</h2>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-3">
          <b className="text-xl md:text-2xl">Salary:</b>
          <h2 className="text-xl md:text-2xl">{state.data.salary}k/month</h2>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-3">
          <b className="text-base md:text-lg">Experience:</b> {state.data.yearsOfExperience}
          Years
          <p className="text-base md:text-lg"></p>
        </div>
        <div className="flex flex-col flex-wrap w-full">
          <b className="text-base md:text-lg">Tech Stack:</b>
          <ul className="flex flex-row flex-wrap gap-2">
            {state.data.technologyRequired &&
              state.data.technologyRequired.map((tech) => (
                <li className="bg-gray-300 px-3 py-1 rounded-lg text-sm md:text-base lg:text-lg">
                  {tech}
                </li>
              ))}
          </ul>
        </div>
        <p className="text-base md:text-lg">
          <b>Responsibilities</b>: <br /> {state.data.summary}
        </p>
      </div>
      <br />
      <button className="bg-blue-500 w-32 px-3 py-2 rounded-xl font-serif text-wite hover:scale-[1.01] hover:shadow-md hover:shadow-gray-500 text-white text-center">Apply</button>
    </div>
  );
}


/*

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [name, setName] = useState("Software Engineer");
  const [org, setOrg] = useState("ABCD");
  const [salary, setSalary] = useState(10);
  const [exp, setExp] = useState(3);
  const techStack = ["C", "C++", "AWS", "Agile techniques"];
  const [req, setReq] = useState(
    "Candidate has to work along with team to develop software using agile techniques and perform various tests on it as well."
  );
  const data = {
    name: "Software Engineer",
    org: "ABCD",
    salary: 10,
    exp: 3,
    tech: ["C", "C++", "AWS", "Agile techniques"],
    req: "Candidate has to work along with team to develop software using agile techniques and perform various tests on it as well.",
  };

  return (
    <div className="bg-white h-[calc(100vh_-_48px)]">
      <aside className="fixed top-12 left-0 hidden md:block md:w-44 lg:w-52 xl:w-60 h-full p-5 border-r border-black">
        <p className="md:text-lg lg:text-xl text-black font-serif">Filters</p>
        <div className="flex flex-col gap-3">
          <div>
            <label
              htmlFor="name"
              className="md:text-sm lg:text-base font-serif"
            >
              Job name
            </label>
            <input
              type="text"
              id="name"
              className="h-7 w-full rounded-lg md:text-sm lg:text-base px-3 bg-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="salary"
              className="md:text-sm lg:text-base font-serif"
            >
              Minimum Salary
            </label>
            <input
              type="number"
              id="salary"
              className="h-7 w-full rounded-lg md:text-sm lg:text-base px-3 bg-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="type"
              className="md:text-sm lg:text-base font-serif"
            >
              Job Type
            </label>
            <select
              type="dropdown"
              id="type"
              className="h-7 w-full rounded-lg md:text-sm lg:text-base px-3 bg-gray-300"
            >
              <option value="remote">Remote</option>
              <option value="onsite">On Site</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label htmlFor="exp" className="md:text-sm lg:text-base font-serif">
              Years of Experience
            </label>
            <input
              type="number"
              id="exp"
              className="h-7 w-full rounded-lg md:text-sm lg:text-base px-3 bg-gray-300"
            />
          </div>
          <Link
            to="/itemForm"
            className="bg-blue-500 px-3 py-1 rounded-xl text-white font-serif hover:scale-[1.01] hover:shadow-sm hover:shadow-black text-center"
          >
            List a Job
          </Link>
        </div>
      </aside>
      <div className="flex flex-col md:ml-44 lg:ml-52 xl:ml-60 h-full p-5">
        {console.log(data)}
        <Link
          to="/apply"
          state={{ data: data }}
          className="border-black border px-3 py-2  hover:scale-[1.01] cursor-pointer group rounded-lg text-sm md:text-base hover:shadow-sm md:hover:shadow-md"
        >
          <div className="lg:group-hover:hidden grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-row flex-wrap md:flex-col justify-between">
              <p className="font-serif text-sm md:text-base lg:text-lg">
                Name: {name}
              </p>
              <p className="font-serif text-sm md:text-base lg:text-lg">
                Company: {org}
              </p>
            </div>
            <div className="flex flex-row flex-wrap md:flex-col justify-between">
              <p className="font-serif text-sm md:text-base lg:text-lg">
                Salary: {salary}k/month
              </p>
              <p className="font-serif text-sm md:text-base lg:text-lg">
                Experience: {exp} years
              </p>
            </div>
          </div>
          <div className="hidden lg:group-hover:block">
            <div className="flex flex-row gap-3">
              <p className="font-serif text-sm md:text-base lg:text-lg">
                Knowledge Required:
              </p>
              <ul className="flex flex-row flex-wrap gap-2">
                {techStack &&
                  techStack.map((tech) => (
                    <li
                      key={tech}
                      className="bg-gray-300 px-3 rounded-lg text-sm md:text-base lg:text-lg"
                    >
                      {tech}
                    </li>
                  ))}
              </ul>
            </div>
            <p className="font-serif text-sm md:text-base lg:text-lg">{req}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}


*/