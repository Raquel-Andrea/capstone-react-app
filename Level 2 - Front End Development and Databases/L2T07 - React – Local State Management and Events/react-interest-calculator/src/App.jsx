import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function AccountSummary({ balance }) {
  return (
    <div className="card shadow-lg border-0 mb-4">
      <div className="card-body text-center">
        <h2 className="card-title">Current Bank Balance</h2>

        <h1 className={balance < 0 ? "text-danger" : "text-success"}>
          R {balance.toFixed(2)}
        </h1>

        {balance < 0 && (
          <div className="alert alert-danger mt-3">
            Warning: Your account balance is negative.
          </div>
        )}
      </div>
    </div>
  );
}

function BankActions({
  deposit,
  withdraw,
  addInterest,
  chargeFees,
}) {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [feeValue, setFeeValue] = useState("");
  const [feeType, setFeeType] = useState("fixed");

  const handleDeposit = () => {
    const amount = Number(depositAmount);

    if (amount > 0) {
      deposit(amount);
      setDepositAmount("");
    }
  };

  const handleWithdraw = () => {
    const amount = Number(withdrawAmount);

    if (amount > 0) {
      withdraw(amount);
      setWithdrawAmount("");
    }
  };

  const handleInterest = () => {
    const rate = Number(interestRate);

    if (rate >= 0) {
      addInterest(rate);
      setInterestRate("");
    }
  };

  const handleFees = () => {
    const value = Number(feeValue);

    if (value >= 0) {
      chargeFees(value, feeType);
      setFeeValue("");
    }
  };

  return (
    <div className="row g-4">

      {/* Deposit */}
      <div className="col-md-6">
        <div className="card h-100 shadow border-0">
          <div className="card-body">
            <h3 className="card-title">Deposit Money</h3>
            <p className="text-muted">
              Add money to your bank account.
            </p>

            <input
              type="number"
              min="0"
              className="form-control mb-3"
              placeholder="Enter deposit amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />

            <button
              className="btn btn-success w-100"
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </div>
        </div>
      </div>

      {/* Withdraw */}
      <div className="col-md-6">
        <div className="card h-100 shadow border-0">
          <div className="card-body">
            <h3 className="card-title">Withdraw Money</h3>
            <p className="text-muted">
              Remove money from your bank account.
            </p>

            <input
              type="number"
              min="0"
              className="form-control mb-3"
              placeholder="Enter withdrawal amount"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />

            <button
              className="btn btn-danger w-100"
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>

      {/* Interest */}
      <div className="col-md-6">
        <div className="card h-100 shadow border-0">
          <div className="card-body">
            <h3 className="card-title">Add Interest</h3>
            <p className="text-muted">
              Enter an interest rate percentage.
            </p>

            <div className="input-group mb-3">
              <input
                type="number"
                min="0"
                step="0.1"
                className="form-control"
                placeholder="Interest rate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />

              <span className="input-group-text">%</span>
            </div>

            <button
              className="btn btn-primary w-100"
              onClick={handleInterest}
            >
              Add Interest
            </button>
          </div>
        </div>
      </div>

      {/* Bank Fees */}
      <div className="col-md-6">
        <div className="card h-100 shadow border-0">
          <div className="card-body">
            <h3 className="card-title">Charge Bank Fees</h3>
            <p className="text-muted">
              Choose a fixed fee or percentage.
            </p>

            <select
              className="form-select mb-3"
              value={feeType}
              onChange={(e) => setFeeType(e.target.value)}
            >
              <option value="fixed">Fixed Amount</option>
              <option value="percentage">Percentage</option>
            </select>

            <div className="input-group mb-3">
              <input
                type="number"
                min="0"
                step="0.1"
                className="form-control"
                placeholder={
                  feeType === "fixed"
                    ? "Enter fee amount"
                    : "Enter fee percentage"
                }
                value={feeValue}
                onChange={(e) => setFeeValue(e.target.value)}
              />

              <span className="input-group-text">
                {feeType === "fixed" ? "R" : "%"}
              </span>
            </div>

            <button
              className="btn btn-warning w-100"
              onClick={handleFees}
            >
              Charge Fees
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

function App() {
  const [balance, setBalance] = useState(1000);

  const deposit = (amount) => {
    setBalance((currentBalance) => currentBalance + amount);
  };

  const withdraw = (amount) => {
    setBalance((currentBalance) => currentBalance - amount);
  };

  const addInterest = (rate) => {
    setBalance((currentBalance) => {
      const interest = currentBalance * (rate / 100);
      return currentBalance + interest;
    });
  };

  const chargeFees = (value, type) => {
    setBalance((currentBalance) => {
      const fee =
        type === "percentage"
          ? currentBalance * (value / 100)
          : value;

      return currentBalance - fee;
    });
  };

  return (
    <div className="app-container">

      <nav className="navbar navbar-dark bg-primary shadow">
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            💰 My Bank
          </span>
        </div>
      </nav>

      <main className="container py-5">

        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">
            Bank Interest Calculator
          </h1>

          <p className="lead text-muted">
            Manage your balance, deposits, withdrawals, interest and
            bank fees.
          </p>
        </div>

        <AccountSummary balance={balance} />

        <BankActions
          deposit={deposit}
          withdraw={withdraw}
          addInterest={addInterest}
          chargeFees={chargeFees}
        />

      </main>

      <footer className="text-center py-4 mt-5 border-top">
        <p className="text-muted mb-0">
          React Banking System © 2026
        </p>
      </footer>

    </div>
  );
}

export default App;