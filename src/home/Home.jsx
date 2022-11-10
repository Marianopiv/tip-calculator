import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar/NavBar";
import { numbers, grayStyle } from "../config/config";
import icon from "../assets/icon.png";
import Result from "../components/result/Result";
import useCalculate from "../hook/useCalculate";

const Home = () => {
  const [
    handleChange,
    bill,
    percentage,
    people,
    total,
    getPercentage,
    handleCustom,
    custom,
    handleBlur,
    errors,
    calculate,
    formulario,
    reset
  ] = useCalculate();

  const handleSubmit = (e) => {
    e.preventDefault()
    calculate()
  }

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}ref={formulario} className="p-4 rounded-full">
        <h3 className={grayStyle}>Bill</h3>
        <div className="flex justify-around rounded-sm bg-pink-50 py-1">
          <p className="text-gray-500">$</p>
          <div className="">
            <input
              className={`text-custom-950 text-lg font-bold focus:ring  focus:outline-none rounded-md focus:ring-green2-950 ${
                errors.bill ? "border-red-500 border-2" : ""
              }`}
              onChange={handleChange}
              type="number"
              onBlur={(e) => handleBlur(e, "Bill can't be 0")}
              name="bill"
              id=""
            />
            <p className="text-center text-xs text-red-500">
              {errors.bill && <p>{errors.bill}</p>}
            </p>
          </div>
        </div>
        <div className="flex flex-col my-5 gap-4">
          <h3 className={grayStyle}>Select Tip %</h3>
          <div className="flex flex-wrap items-center gap-2">
            {numbers.map((item, index) => (
              <div key={index} className="flex flex-col justify-center pb-2">
                <button
                  type="button"
                  disabled={bill === 0}
                  onClick={() => getPercentage(item)}
                  name={"percentage"}
                  key={index}
                  className={`w-28 h-10 bg-custom-950 font-bold text-md tracking-widest active:bg-green2-950 text-white ${
                    percentage === Number(item) ? "bg-green2-950" : ""
                  }${bill === 0 ? "cursor-not-allowed" : ""}`}
                >
                  {item}%
                </button>
              </div>
            ))}
            <div className="flex flex-col justify-center pb-2">
              {custom ? (
                <input
                  onChange={handleChange}
                  className=" w-28 h-10 bg-pink-50 focus:ring  focus:outline-none rounded-md focus:ring-green2-950"
                  type="number"
                  name="percentage"
                  id=""
                  max={bill}
                  maxLength={bill}
                />
              ) : (
                <button
                  onClick={handleCustom}
                  className="w-28 h-10 bg-pink-50 text-green-1000 font-bold text-md tracking-widest"
                >
                  Custom
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <h3 className={`${grayStyle} mb-2`}>Number of People</h3>
          <div className="bg-pink-50 p-2 flex justify-around items-center">
            <img className="w-6 h-4 rounded-full" src={icon} alt="" />
            <input
              className={`text-custom-950 text-lg font-bold focus:ring  focus:outline-none rounded-md focus:ring-green2-950 ${
                errors.people ? "border-red-500 border-2" : ""
              }`}
              onChange={handleChange}
              type="number"
              name="people"
              id=""
              onBlur={(e) => handleBlur(e, "Number of people can't be 0")}
            />
          </div>
          <p className="text-center text-xs text-red-500">
            {errors.people && <p>{errors.people}</p>}
          </p>
        </div>
        <div className="flex items-center justify-center my-3">
          <button
            type="submit"
            className={`bg-custom-950 text-white hover:bg-green2-950 hover:text-custom-950 font-bold w-60 h-2 pb-8 ${
              bill === 0 ? "cursor-not-allowed" : ""
            }`}
          >
            Calculate
          </button>
        </div>
        <Result people={people} calculus={total} reset={reset} />
      </form>
    </>
  );
};

export default Home;
