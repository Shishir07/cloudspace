import React from "react";
import NavBar2 from "../components/navbar2"
import NginxLogo from "./nginxlogo.png";


// Stateless Functional Component

const Card = ({serverDetails}) => {
    return (
            <div className="card" style={{backgroundColor: "lightblue"}}>
                <div className="container-new">
                    <div><img className={"service-icon"} src={NginxLogo}/></div>
                    <div className="instance-name"><h4><b>Instance Name : {serverDetails.instanceName}</b></h4></div>
                    <div>Username : {serverDetails.userId}</div>
                    <div><button type="submit" >Start</button> <button type="submit" >Stop</button></div>
                </div>
            </div>
    );
};

export default Card;
