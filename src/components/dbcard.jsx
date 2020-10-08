import React from "react";
import PostgresLogo from "./postgres.png";
import MySQL from "./mysql.png";
import MongoDB from "./mysql.png";
import Riak from "./riak.png";

// Stateless Functional Component

const Card = ({serverDetails}) => {
    return (
            <div className="card" style={{backgroundColor: "lightgreen"}}>
                <div className="container-new">
                    <div><img className={"service-icon"} src={PostgresLogo}/></div>
                    <div className="instance-name"><h4><b>Instance Name : {serverDetails.instanceName}</b></h4></div>
                    <div>Database : {serverDetails.type}</div>
                    <div><button type="submit" >Start</button> <button type="submit" >Stop</button></div>
                </div>
            </div>
    );
};

export default Card;
