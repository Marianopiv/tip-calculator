import React, { useEffect } from "react";
import config from "./config.json";
const Result = ({ calculus, people, reset }) => {
  useEffect(() => {}, [calculus]); 

  return (
    <>
      {" "}
      <div className="bg-custom-950 px-3 py-2 mx-3 rounded-lg mt-8 text-white flex flex-col gap-4 md:mx-0 md:w-full md:px-0 md:justify-evenly">
        <div className="md:flex justify-around">
          <div className="md:w-14">
            <h3 className="text-xs tracking-widest ">Total tip Amount</h3>
            <p className="text-gray-400 text-xs">/</p>
          </div>
          <div className="flex justify-items-end">
            <p className="text-3xl font-bold text-green2-950">
              $ {calculus != 0 && calculus}
            </p>
          </div>
        </div>
        <div className="md:flex justify-around">
          <div className="md:w-14">
            <h3 className="text-xs tracking-widest">Tip amount</h3>
            <p className="text-gray-400 text-xs">/per person</p>
          </div>
          <div className="flex justify-items-end">
            <p className="text-3xl font-bold text-green2-950">
              $ {calculus != 0 && calculus / people}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={reset}
            className="bg-green2-950 text-custom-950 font-bold w-full md:w-52 h-2 pb-8"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;
