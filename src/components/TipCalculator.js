import { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import Wrapper from "../assets/wrappers/TipCalculator";
import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";

const TipCalculator = () => {
  const percentageValues = [5, 10, 15, 25, 50];
  const [percentage, setPercentage] = useState(0);
  const [bill, setBill] = useState(null);
  const [personCount, setPersonCount] = useState(null);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [hasReset, setHasReset] = useState(false);

  useEffect(() => {
    if (percentage >= 0 && bill && personCount) {
      const totalTip = (percentage / 100) * bill;
      const tipPerPerson = totalTip / personCount;
      const totalBill = bill + totalTip;
      const billPerPerson = totalBill / personCount;
      setTipAmount(tipPerPerson);
      setTotal(billPerPerson);
    } else {
      setTipAmount(0);
      setTotal(0);
    }
  }, [percentage, bill, personCount]);

  const clickHandler = (value) => {
    setHasReset(false);
    setPercentage(parseInt(value));
    setCustomTip("");
  };

  const onBillChange = (value) => {
    setHasReset(false);
    setBill(parseFloat(value));
  };

  const onPersonCountChange = (value) => {
    setHasReset(false);
    setPersonCount(parseInt(value));
  };

  const onCustomTipChange = (value) => {
    setHasReset(false);
    setCustomTip(parseInt(value));
    setPercentage(parseInt(value));
  };

  const reset = () => {
    setHasReset(true);
    setPercentage(0);
    setBill(null);
    setPersonCount(null);
    setCustomTip(0);
  };

  return (
    <Wrapper>
      <section className="input-section">
        <div className={`labels ${bill === 0 && "error"}`}>
          <span className="label">Bill</span>
          <span className="error-msg">Can't be zero</span>
        </div>
        <Input
          label="Bill"
          onChange={onBillChange}
          icon={dollarIcon}
          currentValue={bill}
          reset={hasReset}
        />
        <span>Select Tip %</span>
        <div className="buttons">
          {percentageValues.map((percentageValue) => {
            return (
              <Button
                key={percentageValue}
                value={percentageValue}
                clickHandler={clickHandler}
                active={percentage === percentageValue}
              />
            );
          })}
          <input
            type="text"
            className="tip-input"
            value={customTip || ""}
            placeholder="Custom"
            onChange={(e) => onCustomTipChange(e.target.value)}
          />
        </div>

        <div className={`labels ${personCount === 0 && "error"}`}>
          <span className="label">Number of People</span>
          <span className="error-msg">Can't be zero</span>
        </div>
        <Input
          label="Number of People"
          onChange={onPersonCountChange}
          icon={personIcon}
          currentValue={personCount}
          reset={hasReset}
        />
      </section>
      <section className="display-section">
        <div className="amount">
          <div className="definition">
            <span className="definition--main">Tip Amount</span>
            <span className="definition--sub">/ person</span>
          </div>
          <div className="tip-amount">${tipAmount.toFixed(2)}</div>
        </div>
        <div className="amount">
          <div className="definition">
            <span className="definition--main">Total</span>
            <span className="definition--sub">/ person</span>
          </div>
          <div className="total-amount">${total.toFixed(2)}</div>
        </div>
        <button
          disabled={!bill && !personCount}
          onClick={reset}
          className="reset-btn"
          type="button"
        >
          reset
        </button>
      </section>
    </Wrapper>
  );
};

export default TipCalculator;
