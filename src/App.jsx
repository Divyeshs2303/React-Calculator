import { useState } from 'react'
import './assets/calculator.css';

function App() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
  // 
    const Number1 = (event) => {
      setNumber1(event.target.value);
    };
  
    const Number2 = (event) => {
      setNumber2(event.target.value);
    };
  
    const calculateResult = () => {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);
  
      if (isNaN(num1) || isNaN(num2)) {
        setResult('Invalid input');
        return;
      }
  
      const operation = document.getElementById('operation').value;
  
      let calculatedResult;
      switch (operation) {
        case '+':
          calculatedResult = num1 + num2;
          break;
        case '-':
          calculatedResult = num1 - num2;
          break;
        case '*':
          calculatedResult = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            setResult('Cannot divide by zero');
            return;
          }
          calculatedResult = num1 / num2;
          break;
        default:
          setResult('Invalid operation');
          return;
      }
  
      setResult(calculatedResult);
      setHistory([...history, `${num1} ${operation} ${num2} = ${calculatedResult}`]);
    };
  
    const clearHistory = () => {
      setHistory([]);
    };
  
    const toggleHistory = () => {
      setShowHistory(!showHistory);
    };
  
    return (
      <div className="calculator">
        <p>Calculator</p>
        <div className="input-group">
          <label htmlFor="number1">Number 1:</label>
          <input type="number" id="number1" value={number1} onChange={Number1} className="input-field" />
        </div>
        <div className="input-group">
          <label htmlFor="number2">Number 2:</label>
          <input type="number" id="number2" value={number2} onChange={Number2} className="input-field" />
        </div>
        <div className="input-group">
          <label htmlFor="operation">Operation:</label>
          <select id="operation" className="input-field">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>
        <button onClick={calculateResult} className="calculatorbtn"> Calculate</button>
        <div className="result-group">
          <label htmlFor="result">Result:</label>
          <input type="text" id="result" value={result} readOnly className="input-field" />
        </div>
        <button onClick={toggleHistory} className="calculatorbtn">
          {showHistory? 'Hide History' : 'Show History'}
        </button>
        {showHistory && (
          <div>
            <h2>History</h2>
            <ul className="history-list">
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {history.length > 0 ? (
              <button onClick={clearHistory} className="calculatorbtn">Clear History</button>
            ): "No History..."}
          </div>
        )}
      </div>
    );
  
}

export default App
