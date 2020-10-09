import React, {useState, useEffect, useContext} from 'react';
import NavBar2 from "../components/navbar2";
import {Redirect,NavLink} from "react-router-dom";
import NginxLogo from "./nginxlogo.png";
import NodeJSLogo from "./nodejs.png";
import VanillaLogo from "./Linux_Logo.png"
import userService from '../service/Service';


// Stateless Functional Component

const Card = ({serverDetails}) => {

    let instanceName = serverDetails.instanceName;

    let appName = serverDetails.appEntity.appName;


    const [status, setStatus] = useState(serverDetails.status)

    const startInstance = () => {
        userService.startServers(instanceName)
            .then((data) => {
                setStatus("ACTIVE")
            })
            .catch(e => {
                console.log(console.log("error", e));
            });
    }

    const stopInstance = () => {
        userService.stopServers(instanceName)
            .then((data) => {
                setStatus("STOPPED")
            })
            .catch(e => {
                console.log(console.log("error", e));
            });
    }

    const deleteInstance = () => {
        userService.deleteServers(instanceName)
            .then((data) => {
                setStatus("DELETED")
            })
            .catch(e => {
                console.log(console.log("error", e));
            });
    }

    let url = "/serverDetails/"+instanceName;

    if(status=="DELETED"){
        return null;
    }

    return (
        <div>

            <div className={status=="STOPPED" || status == "PENDING_CREATE" ? "card-disabled": "card" }>

                    <div className="container-new">
                        <NavLink style={{textDecoration:"none"}} to={url}>
                            <div><img className={"service-icon"} src={appName=="nginx"?NginxLogo : appName=="nodejs" ? NodeJSLogo : VanillaLogo }/></div>
                        </NavLink>
                        <div className="instance-name"><h4><b>{instanceName}</b></h4></div>
                        <div>IP : {serverDetails.ipaddress}</div>
                        <div>
                            <button type="submit" className= {status=="STOPPED"?"submit-card" :"submit-disabled" } onClick={startInstance} >Start</button>
                            <button type="submit" className={status=="ACTIVE"? "submit-card" : "submit-disabled"}  onClick={stopInstance}>Stop</button>
                            <button type="submit" className={ "submit-card"}  onClick={deleteInstance}>DELETE</button>
                        </div>
                    </div>


            </div>
        </div>

    );
};

export default Card;
