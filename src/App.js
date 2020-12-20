import React, { useState, useEffect } from 'react';


function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');

  const handleBill = (e) => {
    setBill(e.target.value);
  }

  function handleTip(e) {
    setTip(e.target.value);
  }
  
  useEffect(()=>{
    let total = Number(bill) + (Number(tip)*Number(bill)/100);
    document.title="Total bill: "+total;
  }, [bill, tip])

  return (
    <div>
      <h1>Tip Calculator</h1>

      <input type="text" placeholder="Type the bill" value={bill} onChange={handleBill}/>

      <br/>

      <input type="text" placeholder="Type the tip percentage" value={tip} onChange={handleTip}/>

      <hr />

      {bill.length > 0 && <p>Subtotal: {bill}</p>}

      {bill.length > 0 && <p>Tip: {tip}</p>}

      {bill.length > 0 && <p>Total: R${Number(bill) + (Number(tip)*Number(bill)/100)}</p>}

    </div>
  );
}

export default App;
