import React, { useEffect, useState } from "react";
import Currencies from "./Currencies";
import { HiSwitchHorizontal } from "react-icons/hi";

function Convert() {
  const [info, setInfo] = useState([]);
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BRL");
  const [output, setOutput] = useState(0);

  const url =
    "https://api.freecurrencyapi.com/v1/latest?apikey=HK9Cc8ZBJnkAxWyYl0CR0t2qkGs9JylVB60kavyr";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(typeof data);
        setInfo(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function convert() {
    console.log(info);
    const dollarValue = amount / info[from];
    setOutput(info[to] * dollarValue);
  }

  function flip() {
    setFrom(to);
    setTo(from);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "58px",
          marginBottom: "20px",
          marginTop: "30px",
        }}
      >
        <Currencies selected={from} onChange={(e) => setFrom(e.target.value)} />
        <span>
          <HiSwitchHorizontal
            className="switch"
            style={{
              borderRadius: "50%",
              cursor: "pointer",
              padding: "5px",
              width: "35px",
              height: "35px",
            }}
            onClick={() => {
              flip();
            }}
          />
        </span>
        <Currencies selected={to} onChange={(e) => setTo(e.target.value)} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "165px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          placeholder="Enter the amount"
        />

        <input type="text" value={output.toFixed(2)} disabled />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="button" onClick={convert}>
          Calculate
        </button>
      </div>
    </div>
  );
}

export default Convert;
