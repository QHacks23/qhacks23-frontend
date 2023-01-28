import React, { useState } from 'react';
import "./ProductPage.css"

function QuantityButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className='buy-near-button' 
        onClick={() => setCount(count + 1)}
        >
        Buy Neighbour Lots
        
      </button>
      <span style={{marginLeft: '10px'}}>{count}</span>
    </div>
  );
}

export default QuantityButton;