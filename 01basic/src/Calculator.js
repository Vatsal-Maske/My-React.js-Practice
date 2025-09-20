import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult('Invalid input');
      return;
    }
    let res;
    switch (op) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : 'Cannot divide by zero';
        break;
      default:
        res = 'Unknown operation';
    }
    setResult(res);
  };

  return (
    <div style={{ maxWidth: 300, margin: '2rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 ,backgroundColor:'lightgreen' }}>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={e => setNum1(e.target.value)}
        placeholder="First number"
        style={{ width: '100%', marginBottom: 8,backgroundColor:'lightblue' }}
      />
      <input
        type="number"
        value={num2}
        onChange={e => setNum2(e.target.value)}
        placeholder="Second number"
        style={{ width: '100%', marginBottom: 8 ,backgroundColor:'yellow' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
      </div>
      <div>Result: {result !== null ? result : '-'}</div>
    </div>
  );
}

export default Calculator;
