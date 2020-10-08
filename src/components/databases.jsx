import React, {useState, useEffect, useContext} from 'react';
import {Formik, Form, Field, ErrorMessage, useField} from 'formik';
import userService from '../service/Service';
import NavBar2 from "./navbar2";
import '../global.css'
import Card from './card';


const Databases = (props) => {

    const [databases, setDatabases] = useState([]);
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
    return (
            <div className="ompanel">
                <NavBar2/>
                <div className="containerbody">
                    <ul className={'list'}> {cardList}</ul>
                </div>
            </div>
    );
};

export default Databases;
