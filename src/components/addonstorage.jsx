import React, {useState, useEffect, useContext} from 'react';
import {Formik, Form, Field, ErrorMessage, useField} from 'formik';
import userService from '../service/Service';
import NavBar2 from "./navbar2";
import '../global.css'
import Card from './card';


const AddOnStorage = (props) => {

    const [addonstorages, setAddOnStorage] = useState([]);
    useEffect(() => {
        userService.getServers()
                .then((data) => {
                    setAddOnStorage(data);
                })
                .catch(e => {
                    console.log(console.log("error", e));
                });
    })
    let cardList = addonstorages.map((addonstorage) => <Card serverDetails={addonstorage}/>);
    return (
            <div className="ompanel">
                <NavBar2/>
                <div className="containerbody">
                    <ul className={'list'}> {cardList}</ul>
                </div>
            </div>
    );
};

export default AddOnStorage;
