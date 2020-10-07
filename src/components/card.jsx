import React from "react";
import NavBar2 from "../components/navbar2"


// Stateless Functional Component

const Card = ({serverDetails}) => {
    return (
            <div className="card">
                <div className="container-new">
                    <h4><b>{serverDetails.name}</b></h4>
                    <p>{serverDetails.country}</p>
                </div>
            </div>
    );
};

export default Card;
