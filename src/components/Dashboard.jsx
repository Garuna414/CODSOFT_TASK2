import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [position, setPosition] = useState("Candidate");
  //   const [position, setPosition] = useState("Employer");
  const [name, setName] = useState("Anurag Nakar");
  const [profession, setProfession] = useState("Full Stack Developer");
  const [org, setOrg] = useState("XYZ");
  const [email, setEmail] = useState("anuragemail@gmail.com");
  const [exp, setExp] = useState(5);
  const [summary, setSummary] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur provident eos rem, magni corrupti. Adipisci molestias corrupti quam modi, ullam incidunt magni, qui accusamus tempore optio vel similique? Iure exercitationem aliquid in, natus necessitatibus, earum laborum, corrupti deserunt quam hic perferendis distinctio minima explicabo. Ullam quaerat quasi facere magni!"
  );
  const techStack = [
    "React",
    "TailWindCSS",
    "ExpressJS",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
    "C/C++",
    "Python",
  ];
  return (
    <div className="w-full h-[calc(100vh_-_48px) flex flex-col justify-start items-start] p-5">
      {position && position === "Candidate" && (
        <div className="border border-black rounded-xl p-5 flex flex-col gap-2 items-start justify-start font-serif">
          <b className="text-2xl md:text-3xl">{name}</b>
          <div className="flex flex-col md:flex-row flex-wrap gap-3">
            <b className="text-xl md:text-2xl">Profession:</b>
            <h2 className="text-xl md:text-2xl">{profession}</h2>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-3">
            <b className="text-xl md:text-2xl">Organisation:</b>
            <h2 className="text-xl md:text-2xl">{org}</h2>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-3">
            <b className="text-base md:text-lg">Email:</b>
            <p className="text-base md:text-lg">{email}</p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-3">
            <b className="text-base md:text-lg">Experience:</b> {exp} Years
            <p className="text-base md:text-lg"></p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-3">
            <b className="text-base md:text-lg">Position:</b> {position}
            <p className="text-base md:text-lg"></p>
          </div>
          <div className="flex flex-col flex-wrap w-full">
            <b className="text-base md:text-lg">Tech Stack:</b>
            <ul className="flex flex-row flex-wrap gap-2">
              {techStack &&
                techStack.map((tech) => (
                  <li className="bg-gray-300 px-3 py-1 rounded-lg text-sm md:text-base lg:text-lg">
                    {tech}
                  </li>
                ))}
            </ul>
          </div>
          <p className="text-base md:text-lg">
            <b>Summary</b>: <br /> {summary}
          </p>
        </div>
      )}
      {position && position === "Employer" && (
        <div className="border border-black rounded-xl p-5 flex flex-col gap-2 items-start justify-start font-serif">
          <b className="text-2xl md:text-3xl">{name}</b>
          <div className="flex flex-col md:flex-row flex-wrap gap-3">
            <b className="text-xl md:text-2xl">Profession:</b>
            <h2 className="text-xl md:text-2xl">{profession}</h2>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-3">
            <b className="text-xl md:text-2xl">Organisation:</b>
            <h2 className="text-xl md:text-2xl">{org}</h2>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-3">
            <b className="text-base md:text-lg">Email:</b>
            <p className="text-base md:text-lg">{email}</p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-3">
            <b className="text-base md:text-lg">Experience:</b> {exp} Years
            <p className="text-base md:text-lg"></p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-3">
            <b className="text-base md:text-lg">Position:</b> {position}
            <p className="text-base md:text-lg"></p>
          </div>
          <p className="text-base md:text-lg">
            <b>Summary</b>: <br /> {summary}
          </p>
        </div>
      )}
      <br />
      <Link to="/update" className="bg-blue-500 w-32 px-3 py-2 rounded-xl font-serif text-wite hover:scale-[1.01] hover:shadow-md hover:shadow-gray-500 text-white text-center">
        Update Data
      </Link>
    </div>
  );
}
