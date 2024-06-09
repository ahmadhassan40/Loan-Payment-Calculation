import React from 'react';

const LoanForm = ({ loanDetails, setLoanDetails, calculateLoan }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails({ ...loanDetails, [name]: value });
  };

  return (
    <form>
      <div>
        <label>Loan Amount ($):</label>
        <input
          type="number"
          name="amount"
          value={loanDetails.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Interest Rate (%):</label>
        <input
          type="number"
          name="interest"
          value={loanDetails.interest}
          onChange={handleChange}
          step="0.01"
          required
        />
      </div>
      <div>
        <label>Loan Term (years):</label>
        <input
          type="number"
          name="years"
          value={loanDetails.years}
          onChange={handleChange}
          required
        />
      </div>
      <button type="button" onClick={calculateLoan}>Calculate</button>
    </form>
  );
};

export default LoanForm;
