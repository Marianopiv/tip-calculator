import React, { useEffect } from "react";

const Result = ({ calculus,people,reset}) => {

  useEffect(() => {

  }, [calculus])
  

  return (
    <>
      {" "}
      <div className="bg-custom-950 px-3 py-2 mx-3 rounded-lg mt-8 text-white flex flex-col gap-4">
        <div className="">
          <h3 className="text-xs tracking-widest">Total tip Amount</h3>
          <p className="text-gray-400 text-xs">/</p>
          <p>{calculus != 0 && calculus}</p>
        </div>
        <div className="">
          <h3 className="text-xs tracking-widest">Tip amount</h3>
          <p className="text-gray-400 text-xs">/per person</p>
          <p>{calculus != 0 && calculus/people}</p>
        </div>
        <div className="flex items-center">
          <button
            onClick={reset}
            className="bg-green2-950 text-custom-950 font-bold w-full h-2 pb-8"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;
