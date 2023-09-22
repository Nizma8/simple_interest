import { useState } from "react";
import "./App.css";
import { TextField, Stack, Button } from "@mui/material";
function App() {
  const [interset, setinterset] = useState(0);
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [validPrincipal, setValidPrinciple] = useState(true);
  const [validRate, setValidRate] = useState(true);
  const [validYear, setValidYear] = useState(true);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!principal || !rate || !year) {
      alert("please fill the form");
    } else {
      setinterset(((principal * rate) / 100) * year);
    }
  };
  const validateUserInput = (e) => {
    const { name, value } = e.target;
    if (!!value.match(/^[0-9]+$/)) {
      if (name === "principal") {
        setPrincipal(value);
        setValidPrinciple(true);
      } else if (name === "rate") {
        setRate(value);
        setValidRate(true);
      } else if (name === "year") {
        setYear(value);
        setValidYear(true);
      }
    } else {
      if (name === "principal") {
        setPrincipal(value);
        setValidPrinciple(false);
      } else if (name === "rate") {
        setRate(value);
        setValidRate(false);
      } else if (name === "year") {
        setYear(value);
        setValidYear(false);
      }
    }
  };

  const handleReset = () => {
    setPrincipal(0);
    setRate(0);
    setYear(0);
    setinterset(0);
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center w-100 bg-dark "
      style={{ height: "100vh" }}
    >
      <div className="bg-light p-5 rounded" style={{ width: "500px" }}>
        <h3>Simple Interest App</h3>
        <p>caluculate your simple Interest</p>

        <div
          className="w-100 bg-warning d-flex justify-content-center align-items-center rounded shadow-md flex-column text-light"
          style={{ height: "150px" }}
        >
          <h3>₹ {interset} </h3>
          <p> Total simple Interest</p>
        </div>

        <form className="mt-5" onSubmit={handleCalculate}>
          <div className="mb-2">
            <TextField
              id="outlined-basic"
              label="₹ Principal Amount"
              variant="outlined"
              className="w-100"
              value={principal || ""}
              name="principal"
              onChange={(e) => {
                validateUserInput(e);
              }}
            />
          </div>
          {!validPrincipal && (
            <div className="mb-3 text-danger fw-bolder">
              *Invalid Principal Amount
            </div>
          )}
          <div className="mb-3">
            <TextField
              id="outlined-basic1"
              label="Rate of Interest (p.a) %"
              variant="outlined"
              className="w-100"
              value={rate || ""}
              name="rate"
              onChange={(e) => {
                validateUserInput(e);
              }}
            />
            {!validRate && (
              <div className="mb-3 text-danger fw-bolder">
                *Invalid Rate Amount
              </div>
            )}
          </div>
          <div className="mb-2">
            <TextField
              id="outlined-basic2"
              label="Time Period Year"
              variant="outlined"
              className="w-100"
              value={year || ""}
              name="year"
              onChange={(e) => {
                validateUserInput(e);
              }}
            />
          </div>
          {!validYear && (
            <div className="mb-3 text-danger fw-bolder">*Invalid Year</div>
          )}

          <Stack direction="row" spacing={2}>
            <Button
              disabled={validPrincipal && validRate && validYear ? false : true}
              type="submit"
              variant="contained"
              style={{ height: "50px", width: "250px" }}
            >
              Calculate
            </Button>
            <Button
              onClick={handleReset}
              variant="outlined"
              style={{ height: "50px", width: "250px" }}
            >
              Reset
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
