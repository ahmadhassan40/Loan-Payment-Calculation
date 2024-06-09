import React, { useState } from 'react';
import './App.css';
import LoanForm from './LoanForm';
import LoanResults from './LoanResults';

function App() {
  const [loanDetails, setLoanDetails] = useState({
    amount: '',
    interest: '',
    years: ''
  });
  
  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalPayment: 0,
    totalInterest: 0
  });

  const calculateLoan = () => {
    const { amount, interest, years } = loanDetails;
    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    
    if (isFinite(monthly)) {
      setResults({
        monthlyPayment: monthly.toFixed(2),
        totalPayment: (monthly * calculatedPayments).toFixed(2),
        totalInterest: ((monthly * calculatedPayments) - principal).toFixed(2)
      });
    } else {
      setResults({
        monthlyPayment: 0,
        totalPayment: 0,
        totalInterest: 0
      });
    }
  };

  return (
    <div className="App">
      <h1>Loan Payment Calculator</h1>
      <LoanForm loanDetails={loanDetails} setLoanDetails={setLoanDetails} calculateLoan={calculateLoan} />
      <LoanResults results={results} />
    </div>
  );
}

export default App;
