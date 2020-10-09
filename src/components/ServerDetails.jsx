import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from "react-router-dom";
import userService from '../service/Service';
import NavBar2 from "./navbar2";
import NavBar from "./navbar";
import NginxLogo from "./nginxlogo.png";


const ServerDetails = ({match : { params }}) => {

    const [details, setDetails] = useState({});

    const [url, setUrl] =  useState("/");

    const [redirect, setRedirect] = useState(false);

    const redirectHandler = (active) => {
        setUrl("/"+active);
        setRedirect(true);
    }

    if(redirect) {
        return <Redirect to= {url} />
    }

    useEffect(() => {
        userService.getServerDetails(params.instance)
            .then((data) => {
                setDetails(data);
            })
            .catch(e => {
                console.log(console.log("error", e));
            });
    },[])

    let ipaddress = details.ipaddress;
    let cpu = 2;
    let memory = 8192;
    let zone = "asia-east-1b";
    let app = "nginx";
    let status = details.status;



    return (
        <div>
            <NavBar
            />
            <div className="ompanel">
                <NavBar2 active={"servers"} handleNavigation={(variable) => redirectHandler(variable)}/>
                <div className="containerbody">
                    <div className={"server-details"}>
                        <div className={"top-status"}>
                            <img className={"service-icon-details"} src={NginxLogo}/>
                            <div className={"service-text-details"}>
                                <div>CPU : {cpu}</div>
                                <div>Memory: {memory} MB</div>
                                <div>Zone: {zone}</div>
                                <div>App: {app}</div>
                                <div>Status: {status}</div>
                            </div>
                            <div className={"service-text-buttons"}>
                                <button className={"submit-card-2"}>Stop</button>
                                <button className={"submit-card-2"}>Reboot</button>
                            </div>
                        </div>
                        <div className={"status-buttons"}>
                            <button className={"order-status-enable"}>Connect</button>
                            <button className={"order-status-disable"}>Storage</button>
                            <button className={"order-status-disable"}>Networking</button>
                            <button className={"order-status-disable"}>Monitoring</button>
                            <button className={"order-status-disable"}>Snapshots</button>
                            <button className={"order-status-disable"}>History</button>
                            <button className={"order-status-disable"}>Delete</button>
                        </div>
                        <div className={"text-details"}>
                            <h5> <b>Connect Securily Using Your Browser</b></h5>
                            <p>You can connect to your instance using the following address and user name. When you connect with your client, you will also need the private key.</p>
                        </div>
                        <div className={"card-ip"}>
                            <div className="container-new">
                                <div>Public Ip: {ipaddress}</div>
                                <div>User : Sarthak</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServerDetails;
