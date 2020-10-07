import React from 'react';
import {Link,NavLink} from "react-router-dom";
import './DropDown.css'

const DropDown = ({showDropDown,handleLogout, currentUser}) => {

    if (showDropDown) return (
        <ul className={"dropdown"}>
            <li><b>{(currentUser && currentUser.firstName)? "Hi, " + currentUser.firstName : "Name"  }</b></li>
            <li onClick={handleLogout} style={{"cursor": "pointer"}}>
                Logout
            </li>
        </ul>);

    return null;
}

export default DropDown;