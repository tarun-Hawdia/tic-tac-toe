import React from "react";

const Chance = ({ currentUser ,isWinnerFound}) => {
    if(!isWinnerFound){
        
         return <h1>It's {currentUser}'s turn</h1>;

    }
    return <></>
};

export default Chance;
