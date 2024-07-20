import React, { useState } from 'react';

export default function ItemForm() {
  const [formData, setFormData] = useState({
    jobName: '',
    companyName: '',
    salary: '',
    yearsOfExperience: '',
    modeOfWork: 'Onsite', // Default value
    technologyRequired: '',
    summary: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert comma-separated technologyRequired into an array
    const technologyArray = formData.technologyRequired
      .split(',')
      .map(tech => tech.trim())
      .filter(tech => tech !== ''); // Remove any empty entries

    const jobData = {
      ...formData,
      technologyRequired: technologyArray
    };

    try {
      const response = await fetch('http://localhost:5000/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Job posted:', data);
      alert("Job posted successfully!");
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-500 max-w-[500px] w-[40vw] min-w-[275px] p-5 flex flex-col justify-center rounded-lg"
      >
        <div className="w-full">
          <label
            className="font-serif text-sm md:text-base lg:text-lg text-white"
            htmlFor="jobName"
          >
            Job Name
          </label>
          <br />
          <input
            id="jobName"
            type="text"
            value={formData.jobName}
            onChange={handleChange}
            className="w-full rounded-lg font-serif px-3 h-7 md:h-8 mt-1"
          />
        </div>
        <br />
        <div className="w-full">
          <label
            className="font-serif text-sm md:text-base lg:text-lg text-white"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <br />
          <input
            id="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full rounded-lg font-serif px-3 h-7 md:h-8 mt-1"
          />
        </div>
        <br />
        <div className="w-full">
          <label
            className="font-serif text-sm md:text-base lg:text-lg text-white"
            htmlFor="salary"
          >
            Salary
          </label>
          <br />
          <input
            id="salary"
            type="number"
            value={formData.salary}
            onChange={handleChange}
            className="w-full rounded-lg font-serif px-3 h-7 md:h-8 mt-1"
          />
        </div>
        <br />
        <div className="w-full">
          <label
            className="font-serif text-sm md:text-base lg:text-lg text-white"
            htmlFor="yearsOfExperience"
          >
            Years of Experience
          </label>
          <br />
          <input
            id="yearsOfExperience"
            type="number"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            className="w-full rounded-lg font-serif px-3 h-7 md:h-8 mt-1"
          />
        </div>
        <br />
        <div className="w-full">
          <label
            className="font-serif text-sm md:text-base lg:text-lg text-white"
            htmlFor="modeOfWork"
          >
            Mode of Work
          </label>
          <br />
          <select
            id="modeOfWork"
            value={formData.modeOfWork}
            onChange={handleChange}
            className="w-full rounded-lg font-serif px-3 h-7 md:h-8 mt-1"
          >
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <br />
        <div className="w-full">
          <label
            className="font-serif text-sm md:text-base lg:text-lg text-white"
            htmlFor="technologyRequired"
          >
            Technology Required (comma separated)
          </label>
          <br />
          <input
            id="technologyRequired"
            type="text"
            value={formData.technologyRequired}
            onChange={handleChange}
            className="w-full rounded-lg font-serif px-3 h-7 md:h-8 mt-1"
          />
        </div>
        <br />
        <div className="w-full">
          <label
            className="font-serif text-sm md:text-base lg:text-lg text-white"
            htmlFor="summary"
          >
            Summary
          </label>
          <br />
          <input
            id="summary"
            type="text"
            value={formData.summary}
            onChange={handleChange}
            className="w-full rounded-lg font-serif px-3 h-7 md:h-8 mt-1"
          />
        </div>
        <br />
        <div className="w-full flex flex-col justify-center items-center">
          <input
            type="submit"
            className="bg-white px-3 py-2 rounded-lg hover:scale-[1.01] hover:shadow-md hover:shadow-gray-500 max-w-24 font-serif transition ease-in-out"
          />
        </div>
      </form>
    </div>
  );
}
