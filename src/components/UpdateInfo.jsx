import React from "react";

export default function UpdateInfo() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center overflow-auto p-5">
      <form
        action="post"
        className="bg-blue-500 max-w-[500px] w-[40vw] min-w-[275px] p-5 flex flex-col justify-center rounded-lg"
      >
        <div className="w-full">
          <label
            className="font-serif text-sm md:text-base lg:text-lg text-white"
            htmlFor="name"
          >
            Name
          </label>
          <br />
          <input
            id="name"
            type="text"
            className="w-full rounded-lg font-serif px-3 h-7 md:h-8 mt-1"
          />
        </div>
        <br />
        <div className="w-full">
          <label
            className="font-serif text-sm md:text-base lg:text-lg text-white"
            htmlFor="profession"
          >
            Profession
          </label>
          <br />
          <input
            id="profession"
            type="text"
            className="w-full rounded-lg font-serif px-3 h-7 md:h-8 mt-1"
          />
        </div>
        <br />
        <div className="w-full">
          <label
            className="font-serif text-sm md:text-base lg:text-lg text-white"
            htmlFor="organisation"
          >
            Organisation
          </label>
          <br />
          <input
            id="organisation"
            type="text"
            className="w-full rounded-lg font-serif px-3 h-7 md:h-8 mt-1"
          />
        </div>
        <br />
        <div className="w-full">
          <label
            className="font-serif text-sm md:text-base lg:text-lg text-white"
            htmlFor="email"
          >
            Email
          </label>
          <br />
          <input
            id="email"
            type="email"
            className="w-full rounded-lg font-serif px-3 h-7 md:h-8 mt-1"
          />
        </div>
        <br />
        <div className="w-full">
          <label
            className="font-serif text-sm md:text-base lg:text-lg text-white"
            htmlFor="experience"
          >
            Experience
          </label>
          <br />
          <input
            id="experience"
            type="number"
            className="w-full rounded-lg font-serif px-3 h-7 md:h-8 mt-1"
          />
        </div>
        <br />
        <div className="w-full">
          <label
            className="font-serif text-sm md:text-base lg:text-lg text-white"
            htmlFor="tech"
          >
            Technologies
          </label>
          <br />
          <input
            id="tech"
            type="text"
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
