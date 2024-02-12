import React, { useState } from 'react';

function Ifelsestatement() {
    const [num, setNum] = useState('');
    const [result, setResult] = useState('');

    const handleChange = () => {
        // Convert the input value to a number using parseInt
        const parsedNum = parseInt(num, 10);

        // Check if the parsed number is even or odd
        if (parsedNum % 2 === 0) {
            setResult('Even number');
        } else {
            setResult('Odd number');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={num}
                onChange={(e) => setNum(e.target.value)}
            />
            <button onClick={handleChange}>Check odd/even</button>
            <p>{result}</p>
        </div>
    );
}

export default Ifelsestatement;
