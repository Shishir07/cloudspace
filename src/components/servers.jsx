import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from "react-router-dom";
import userService from '../service/Service';
import NavBar2 from "./navbar2";
import '../global.css'
import Card from './card';


const Servers = (props) => {

    const [servers, setServers] = useState([]);

    const [url, setUrl] =  useState("/");

    const [redirect, setRedirect] = useState(false);

    const redirectHandler = (active) => {
        setUrl("/"+active);
        setRedirect(true);
    }

    useEffect(() => {
        userService.getServers()
                .then((data) => {
                    setServers(data);
                })
                .catch(e => {
                    console.log(console.log("error", e));
                });
    })

    let cardList = servers.map((server) => <Card serverDetails={server}/>);

    if(redirect) {
        return <Redirect to= {url} />
    }

    return (
            <div className="ompanel">
                <NavBar2 active={"servers"} handleNavigation={(variable) => redirectHandler(variable)}/>
                <div className="containerbody">
                    <ul className={'list'}> {cardList}</ul>
                </div>
            </div>
    );
};

export default Servers;
