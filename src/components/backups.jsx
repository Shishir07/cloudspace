import React, {useState, useEffect, useContext} from 'react';
import {Formik, Form, Field, ErrorMessage, useField} from 'formik';
import userService from '../service/Service';
import NavBar2 from "./navbar2";
import '../global.css'
import Card from './card';


const Backups = (props) => {

    const [backups, setBackups] = useState([]);
    useEffect(() => {
        userService.getServers()
                .then((data) => {
                    setBackups(data);
                })
                .catch(e => {
                    console.log(console.log("error", e));
                });
    })
    let cardList = backups.map((backup) => <Card serverDetails={backup}/>);
    return (
            <div className="ompanel">
                <NavBar2/>
                <div className="containerbody">
                    <ul className={'list'}> {cardList}</ul>
                </div>
            </div>
    );
};

export default Backups;
