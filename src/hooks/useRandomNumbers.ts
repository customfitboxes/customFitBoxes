import { useState, useEffect } from 'react';

// Custom hook to generate random numbers once and calculate their sum
function useRandomNumbers() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [sum, setSum] = useState(null);

  useEffect(() => {
    // Generate random numbers once when the component mounts
    const randomNum1:any = Math.floor(Math.random() * 10) + 1; // Between 1 and 99
    const randomNum2:any = Math.floor(Math.random() * 10) + 1; // Between 1 and 99
    setNum1(randomNum1);
    setNum2(randomNum2);
    
    // Calculate the sum
    setSum(randomNum1 + randomNum2);
  }, []); // Empty dependency array means it runs only once, when the component mounts

  return { num1, num2, sum };
}

export default useRandomNumbers;
