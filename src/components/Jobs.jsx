import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    jobName: "",
    minSalary: "",
    modeOfWork: "",
    yearsOfExperience: ""
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async (filterParams = {}) => {
    try {
      const response = await axios.get("http://localhost:5000/api/jobs", {
        params: filterParams
      });
      setJobs(response.data);
    } catch (error) {
      console.error("There was an error fetching the jobs!", error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.id]: e.target.value
    });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchJobs(filters);
  };

  return (
    <div className="bg-white h-[calc(100vh_-_48px)]">
      <aside className="fixed top-12 left-0 hidden md:block md:w-44 lg:w-52 xl:w-60 h-full p-5 border-r border-black">
        <p className="md:text-lg lg:text-xl text-black font-serif">Filters</p>
        <form onSubmit={handleFilterSubmit} className="flex flex-col gap-3">
          <div>
            <label
              htmlFor="jobName"
              className="md:text-sm lg:text-base font-serif"
            >
              Job name
            </label>
            <input
              type="text"
              id="jobName"
              value={filters.jobName}
              onChange={handleFilterChange}
              className="h-7 w-full rounded-lg md:text-sm lg:text-base px-3 bg-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="minSalary"
              className="md:text-sm lg:text-base font-serif"
            >
              Minimum Salary
            </label>
            <input
              type="number"
              id="minSalary"
              value={filters.minSalary}
              onChange={handleFilterChange}
              className="h-7 w-full rounded-lg md:text-sm lg:text-base px-3 bg-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="modeOfWork"
              className="md:text-sm lg:text-base font-serif"
            >
              Job Type
            </label>
            <select
              id="modeOfWork"
              value={filters.modeOfWork}
              onChange={handleFilterChange}
              className="h-7 w-full rounded-lg md:text-sm lg:text-base px-3 bg-gray-300"
            >
              <option value="">Any</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="yearsOfExperience"
              className="md:text-sm lg:text-base font-serif"
            >
              Years of Experience
            </label>
            <input
              type="number"
              id="yearsOfExperience"
              value={filters.yearsOfExperience}
              onChange={handleFilterChange}
              className="h-7 w-full rounded-lg md:text-sm lg:text-base px-3 bg-gray-300"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 px-3 py-1 rounded-xl text-white font-serif hover:scale-[1.01] hover:shadow-sm hover:shadow-black text-center"
          >
            Apply Filters
          </button>
          <Link
            to="/itemForm"
            className="bg-blue-500 px-3 py-1 rounded-xl text-white font-serif hover:scale-[1.01] hover:shadow-sm hover:shadow-black text-center"
          >
            List a Job
          </Link>
        </form>
      </aside>
      <div className="flex flex-col md:ml-44 lg:ml-52 xl:ml-60 h-full p-5">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Link
              key={job._id}
              to="/apply"
              state={{ data: job }}
              className="border-black border px-3 py-2  hover:scale-[1.01] cursor-pointer group rounded-lg text-sm md:text-base hover:shadow-sm md:hover:shadow-md"
            >
              <div className="lg:group-hover:hidden grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-row flex-wrap md:flex-col justify-between">
                  <p className="font-serif text-sm md:text-base lg:text-lg">
                    Name: {job.jobName}
                  </p>
                  <p className="font-serif text-sm md:text-base lg:text-lg">
                    Company: {job.companyName}
                  </p>
                </div>
                <div className="flex flex-row flex-wrap md:flex-col justify-between">
                  <p className="font-serif text-sm md:text-base lg:text-lg">
                    Salary: {job.salary}k/month
                  </p>
                  <p className="font-serif text-sm md:text-base lg:text-lg">
                    Experience: {job.yearsOfExperience} years
                  </p>
                </div>
              </div>
              <div className="hidden lg:group-hover:block">
                <div className="flex flex-row gap-3">
                  <p className="font-serif text-sm md:text-base lg:text-lg">
                    Knowledge Required:
                  </p>
                  <ul className="flex flex-row flex-wrap gap-2">
                    {job.technologyRequired.map((tech) => (
                      <li
                        key={tech}
                        className="bg-gray-300 px-3 rounded-lg text-sm md:text-base lg:text-lg"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-serif text-sm md:text-base lg:text-lg">
                  {job.summary}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="font-serif text-sm md:text-base lg:text-lg">
            No jobs found
          </p>
        )}
      </div>
    </div>
  );
}
