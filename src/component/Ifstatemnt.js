import React from 'react'

function Ifstatemnt() {
    let age=16
    if(age>=18)
    {
        return "Eligible to vote"
    }
    else if(age==18){
        return " eligible to vote"
    }
    else{
        return"not eligible"
    }

}

export default Ifstatemnt
