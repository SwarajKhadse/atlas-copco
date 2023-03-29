import React, { useState } from "react";
import "./calculator.css";
function Calculator() {
  const [input, setInput] = useState();
  const [result, setResult] = useState(0);
  const [inputType, setInputType] = useState("km");
  const [resultType, setResultType] = useState("km");

  function calculate() {
    let ans = input;
    if (inputType === "km") ans = ans * 1000;
    else if (inputType === "cm") ans = ans * 0.01;
    else if (inputType === "mm") ans = ans * 0.001;
    else if (inputType === "mcr") ans = ans * 0.000001;
    else if (inputType === "nm") ans = ans * 0.000000001;
    else if (inputType === "ft") ans = ans * 0.3048;
    else if (inputType === "yd") ans = ans * 0.9144;
    else if (inputType === "m") ans = ans;

    if (resultType === "km") setResult(ans * 0.001);
    else if (resultType === "cm") setResult(ans * 100);
    else if (resultType === "mm") setResult(ans * 1000);
    else if (resultType === "mcr") setResult(ans * 1000000);
    else if (resultType === "nm") setResult(ans * 1000000000);
    else if (resultType === "ft") setResult(ans * 3.28084);
    else if (resultType === "yd") setResult(ans * 1.09361);
    else if (resultType === "m") setResult(ans * 1);
  }

  return (
    <>
      <div className="calculatorDiv"
      >
        
        <div>
          <input
            type="number"
            placeholder="Enter the no"
            className="inputValue  p-3 me-3"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <i class="fa-solid fa-equals equalSign" ></i>
           <input
            type="number"
            placeholder={result}
            className="inputValue  p-3 ms-3"
            
          />
        </div>
        <select
          className="selectInput me-3 "
          onChange={(e) => {
            setInputType(e.target.value);
          }}
        >
          <option value="km">Kilometer</option>
          <option value="cm">Centimeter</option>
          <option value="mm">Millimeter</option>
          <option value="mcr">Micrometer</option>
          <option value="nm">Nanometer</option>
          <option value="ft">Foot</option>
          <option value="yd">yard</option>
          <option value="m">meter</option>
        </select>
        <select
          name=""
          id=""
          className="selectInput resultSelect"
          onChange={(e) => {
            setResultType(e.target.value);
          }}
        >
          <option value="km">Kilometer</option>
          <option value="cm">Centimeter</option>
          <option value="mm">Millimeter</option>
          <option value="mcr">Micrometer</option>
          <option value="nm">Nanometer</option>
          <option value="ft">Foot</option>
          <option value="yd">yard</option>
          <option value="m">meter</option>
        </select>

        <div></div>

        <button type="submit" className="submitButton" onClick={calculate}>
          convert
        </button>
      </div>
    </>
  );
}

export default Calculator;
