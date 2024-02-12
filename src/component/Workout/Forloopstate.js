import React, { useState } from 'react'

function Forloopstate() {
    let [num, setNum] = useState(0);
    let result=0;

    let handleLoop = () => {
        let i = 0;

        for (let i = 0; i <= parseInt(num); i++) {
            console.log("loop series", i);
            result = result + i;


        }
           
            console.log("Addition of series" +result)

            return(<><p>Addition of loop value is {result}</p></>)
    }

    return (
        <>
            <input
                type="text"
                value={num}
                onChange={(e) => setNum(e.target.value)}
            />
          {handleLoop()}
            <button onClick={handleLoop}>Loop</button>
        </>
    )
}

export default Forloopstate
