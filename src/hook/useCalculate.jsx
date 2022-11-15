import React, { useRef, useState } from "react";

const useCalculate = () => {

  const [state, setState] = useState({
    bill: 0,
    percentage: 0,
    people: 0,
    total: 0,
  });

  const formulario = useRef(null);

  const [custom, setCustom] = useState(false);

  const [errors, setErrors] = useState({});
  const { bill, percentage, people, total } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value > 0) {
      setState({ ...state, [name]: value });
    }
  };

  const getPercentage = (item) => setState({ ...state, percentage: item });

  const handleCustom = () => setCustom(true);

  const calculate = () => {
    const copyState = { ...state };

    delete copyState["total"];

    if (Object.values(copyState).every((item) => item !== 0)) {
      setState({ ...state, total: (bill * percentage) / 100 });
    }
  };

  const handleBlur = (e, text) => {
    const { name, value } = e.target;
    if (!value || value === 0) {
      setErrors({ ...errors, [name]: text });
    } else {
      setErrors((current) => {
        // 👇️ create copy of state object
        const copy = { ...current };

        // 👇️ remove salary key from object
        delete copy[name];

        return copy;
      });
    }
  };

  const reset = () => {

    const copy = { ...state };
    Object.keys(copy).forEach((key) => {
      copy[key] = 0;
    });

    setState(copy)

    formulario.current.reset();
  };

  return [
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
    reset,
  ];
};

export default useCalculate;
