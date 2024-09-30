import React from "react";
function Result({secretNum,number}){
    let result="";
     if(isNaN(secretNum) || number===0){
        result="Enter a valid input";
    }
    
    else if(secretNum===number)
    {
        result="Yeah! you found it😃";
    }
    else if(secretNum>number)
    {
        result="lower";
    }
    else if(secretNum<number)
    {
        result="higher";
    }
   


    return <h4>Your answer is:{result}</h4>
}
export default Result;
