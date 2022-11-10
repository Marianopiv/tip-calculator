import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar/NavBar";
import { numbers, grayStyle } from "../config/config";
import icon from "../assets/icon.png";
import Result from "../components/result/Result";

const Home = () => {
  const [bill, setBill] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [people, setPeople] = useState(0);
  const [calculus, setCalculus] = useState(0);
  const [custom, setCustom] = useState(false);
  const [validation, setValidation] = useState([]);
  const [validation2, setValidation2] = useState([]);

  const handleBill = (e) => {
    setBill(e);
    console.log(bill);
  };

  const tip = (item) => {
    if (bill != 0) {
      setPercentage(item);
    }
    console.log(percentage);
  };

  const getPeople = (num) => {
    if (num > 0) {
      setPeople(num);
    }
    console.log(people);
  };

  const calculate = () => {
    if (bill=== 0 && people === 0) {
      setValidation([...validation, "Bill can't be 0"]);
      setValidation2([...validation2, "Number of people can't be 0"]);
    } else {
      setCalculus((bill * percentage) / 100);
    }

    console.log(calculus);
  };

  useEffect(() => {
    console.log(validation, validation2);
  }, [validation, validation2]);

  return (
    <>
      <NavBar />
      <div className="p-4 rounded-full">
        <h3 className={grayStyle}>Bill</h3>
        <div className="flex justify-around rounded-sm bg-pink-50 py-1">
          <p className="text-gray-500">$</p>
          <div className="">
            <input
              className={`text-custom-950 text-lg font-bold focus:ring  focus:outline-none rounded-md focus:ring-green2-950 ${
                validation.length > 0 ? "border-red-500 border-2" : ""
              }`}
              onChange={(e) => handleBill(e.target.value)}
              type="number"
              onBlur={
                bill === 0 || bill === ""
                  ? () => setValidation([...validation, "Bill can't be 0"])
                  : () => setValidation("")
              }
              name=""
              id=""
            />
            <p className="text-center text-xs text-red-500">
              {validation.length > 0 &&
                validation.find((item) => (
                  <p>{item.includes("Bill can't be 0")}</p>
                ))}
            </p>
          </div>
        </div>
        <div className="flex flex-col my-5 gap-4">
          <h3 className={grayStyle}>Select Tip %</h3>
          <div className="flex flex-wrap items-center gap-2">
            {numbers.map((item, index) => (
              <div key={index} className="flex flex-col justify-center pb-2">
                <button
                  disabled={bill === 0}
                  onClick={() => tip(item)}
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
                  onChange={(e) => tip(e.target.value)}
                  className=" w-28 h-10 bg-pink-50 focus:ring  focus:outline-none rounded-md focus:ring-green2-950"
                  type="number"
                  name=""
                  id=""
                  max={bill}
                  maxLength={bill}
                />
              ) : (
                <button
                  onClick={() => setCustom(!custom)}
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
                validation2.length > 0 ? "border-red-500 border-2" : ""
              }`}
              onChange={(e) => getPeople(e.target.value)}
              type="number"
              name=""
              id=""
              onBlur={
                people === 0 || people === ""
                  ? () =>
                      setValidation2([
                        ...validation2,
                        "Number of people can't be 0",
                      ])
                  : () => setValidation2("")
              }
            />
          </div>
          <p className="text-center text-xs text-red-500">
            {validation2.length > 0 &&
              validation2.find((item) => (
                <p>{item.includes("Number of people can't be 0")}</p>
              ))}
          </p>
        </div>
        <div className="flex items-center justify-center my-3">
          <button
            onClick={calculate}
            className={`bg-custom-950 text-white hover:bg-green2-950 hover:text-custom-950 font-bold w-60 h-2 pb-8 ${
              bill === 0 ? "cursor-not-allowed" : ""
            }`}
          >
            Calculate
          </button>
        </div>
        <Result people={people} calculus={calculus} />
      </div>
    </>
  );
};

export default Home;