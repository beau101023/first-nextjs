import React, { useState } from "react";

export default function Counter({amt, color}) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button style={{backgroundColor: color}} onClick={() => {
          var newCount = count+amt;
          if(newCount>10) newCount = 0;
          setCount(newCount);
        }
      }>Increment</button>
    </div>
  );
}