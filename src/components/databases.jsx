import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from "react-router-dom";
import userService from '../service/Service';
import NavBar2 from "./navbar2";
import '../global.css'
import Card from './dbcard';


const Databases = (props) => {

    const [databases, setDatabases] = useState([{"instanceName":"db-1","type":"Postgressql"},{"instanceName":"db-2","type":"MySql"},{"instanceName":"db-1","type":"Riak"}]);

    const [url, setUrl] =  useState("/");

    const [redirect, setRedirect] = useState(false);

    const redirectHandler = (active) => {
        setUrl("/"+active);
        setRedirect(true);
    }



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
