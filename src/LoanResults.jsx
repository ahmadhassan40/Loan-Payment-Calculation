import React from 'react';

const LoanResults = ({ results }) => {
  return (
    <div id="results">
      <h2>Results:</h2>
      <p>Monthly Payment: ${results.monthlyPayment}</p>
      <p>Total Payment: ${results.totalPayment}</p>
      <p>Total Interest: ${results.totalInterest}</p>
    </div>
  );
};

export default LoanResults;
