import React, { useState } from 'react'

function Props(val) {

    let propname = () => {

        let name = val.name || "guest login"

        return `${name}`
    }

    function Stateproperty() {
        let [Count, setCount] = useState(false)
        {

            function StateValue()
            {
                let Increment=()=>
                {
                    setCount(Count+1)
                }
                
                
                return(<> {Count && (<div> <p>`Increment {setCount}`</p> <button onClick={() => setCount(false)}>Increment</button></div>)}
                {!Count && (<div> <p>`decrement {setCount}`</p> <button onClick={() => setCount(true)}>decrement</button></div>)}
                </>)
               
            }
            return (<div>

                {StateValue()}
            </div>)


        }
    }


  


    return (
        <div>
            {propname()}<br />
            {Stateproperty()}

        </div>
    )
}

export default Props

