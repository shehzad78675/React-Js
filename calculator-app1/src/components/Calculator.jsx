import React, { useState } from "react";

function Calculator() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState("");

  const clear = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation("");
  };

  const backSpace = () => {
    if (currentOperand !== "") {
      setCurrentOperand(currentOperand.toString().slice(0, -1));
      return;
    }
    if (operation !== "") {
      setOperation(operation.slice(0, -1));
      setCurrentOperand(previousOperand);
      setPreviousOperand("");
    }
  };

  const appendNumber = (number) => {
    console.log("key");
    if (number === "." && currentOperand.includes(".")) {
      return;
    }
    setCurrentOperand(currentOperand.toString() + number.toString());
  };

  function compute() {
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(curr)) {
      return;
    }

    const computation = result();

    setCurrentOperand(computation);
    setOperation("");
    setPreviousOperand("");
  }

  function result() {
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(curr)) {
      return;
    }

    switch (operation) {
      case "+":
        return prev + curr;
      case "-":
        return prev - curr;
      case "/":
        return prev / curr;
      case "x":
        return prev * curr;
      case "%":
        return prev % curr;

      default:
        return;
    }
  }

  const chooseOperation = (newOperation) => {
    if (currentOperand === "") {
      return;
    }

    if (previousOperand !== "") {
      const computation = result();

      setOperation(newOperation);
      setPreviousOperand(computation);
      setCurrentOperand("");
      return;
    }

    setOperation(newOperation);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  };

  const runOnChange = (e) => {

    if (
      e.target.value.includes("+") ||
      e.target.value.includes("-") ||
      e.target.value.includes("*") ||
      e.target.value.includes("/") ||
      e.target.value.includes("%")
    ) {
      let operate = e.target.value.slice(e.target.value.length - 1, e.target.value.length);
      if(operate === '*'){
        operate = 'x';
      }
      chooseOperation(operate);
      return;
    }

    if(e.target.value.includes('=')){
      compute();
    }
    if (isNaN(e.target.value) === false) {
      setCurrentOperand(e.target.value);
      return;
    }
  };

  const keyDown = () => {
    if(currentOperand === '' && operation === '' && previousOperand === ''){
      return;
    }
    if (currentOperand === "") {
      setOperation(operation.slice(0, -1));
      setCurrentOperand(previousOperand + ' ');
      setPreviousOperand("");
    }
  }

  return (
    <div>
      <div className="output">
        <input
          type="text"
          name=""
          id=""
          className="output-1"
          value={`${previousOperand} ${operation}`}
          disabled
        />
        <input
          type="text"
          name=""
          id=""
          className="output-2"
          value={`${currentOperand}`}
          onChange={(e) => runOnChange(e)}
          autoFocus
          onKeyDown={(e) => e.key === 'Backspace' ? keyDown() : e.key === 'Enter' ? compute() : null}
          onKeyUp={(e) => e.key === 'Backspace' ? null : null}
          // disabled
        />
      </div>
      <div className="key-pad">
        <div>
          <button
            onClick={() => {
              clear();
            }}
          >
            C
          </button>
          <button
            name=""
            onClick={() =>
              currentOperand !== ""
                ? setCurrentOperand(parseFloat(currentOperand) * -1)
                : null
            }
          >
            +/-
          </button>
          <button
            name="%"
            onClick={(e) => {
              chooseOperation(e.target.name);
            }}
          >
            %
          </button>
          <button
            name="/"
            onClick={(e) => {
              chooseOperation(e.target.name);
            }}
          >
            /
          </button>
        </div>
        <div>
          <button name="7" onClick={(e) => appendNumber(e.target.name)}>
            7
          </button>
          <button
            name="8"
            onClick={(e) => {
              appendNumber(e.target.name);
            }}
          >
            8
          </button>
          <button
            name="9"
            onClick={(e) => {
              appendNumber(e.target.name);
            }}
          >
            9
          </button>
          <button
            name="x"
            onClick={(e) => {
              chooseOperation(e.target.name);
            }}
          >
            x
          </button>
        </div>
        <div>
          <button
            name="4"
            onClick={(e) => {
              appendNumber(e.target.name);
            }}
          >
            4
          </button>
          <button
            name="5"
            onClick={(e) => {
              appendNumber(e.target.name);
            }}
          >
            5
          </button>
          <button
            name="6"
            onClick={(e) => {
              appendNumber(e.target.name);
            }}
          >
            6
          </button>
          <button
            name="-"
            onClick={(e) => {
              chooseOperation(e.target.name);
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            name="1"
            onClick={(e) => {
              appendNumber(e.target.name);
            }}
          >
            1
          </button>
          <button
            name="2"
            onClick={(e) => {
              appendNumber(e.target.name);
            }}
          >
            2
          </button>
          <button
            name="3"
            onClick={(e) => {
              appendNumber(e.target.name);
            }}
          >
            3
          </button>
          <button
            name="+"
            onClick={(e) => {
              chooseOperation(e.target.name);
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            name="."
            onClick={(e) => {
              appendNumber(e.target.name);
            }}
          >
            .
          </button>
          <button
            name="0"
            onClick={(e) => {
              appendNumber(e.target.name);
            }}
          >
            0
          </button>
          <button onClick={backSpace}>del</button>
          <button
            onClick={() => {
              compute();
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
