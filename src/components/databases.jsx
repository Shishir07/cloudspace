import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from "react-router-dom";
import userService from '../service/Service';
import NavBar2 from "./navbar2";
import '../global.css'
import Card from './card';


const Databases = (props) => {

    const [databases, setDatabases] = useState([]);

    const [url, setUrl] =  useState("/");

    const [redirect, setRedirect] = useState(false);

    const redirectHandler = (active) => {
        setUrl("/"+active);
        setRedirect(true);
    }

    useEffect(() => {
        userService.getServers()
                .then((data) => {
                    setDatabases(data);
                })
                .catch(e => {
                    console.log(console.log("error", e));
                });
    })

    let cardList = databases.map((database) => <Card serverDetails={database}/>);

    if(redirect!=null && redirect==true) {
        return <Redirect to= {url} />
    }

    return (
            <div className="ompanel">
                <NavBar2 active={"databases"} handleNavigation={(variable) => redirectHandler(variable)}/>
                <div className="containerbody">
                    <ul className={'list'}> {cardList}</ul>
                </div>
            </div>
    );
};

export default Databases;
