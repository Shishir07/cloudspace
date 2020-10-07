import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage, useField} from 'formik';
import userService from '../service/Service';
// Stateless Functional Component



const MyTextInput = ({label, ...props}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <div>
            <table className={"discount-table"}>
                <tr>
                    <td className={"discount-column"}><label className={"payment-label"}
                                                             htmlFor={props.id || props.name}>{label}</label>
                    </td>
                    <td className={"discount-column"}><input className="payment-input" {...field} {...props} />
                    </td>
                </tr>
                {meta.touched && meta.error ? (
                    <div className="payment-error">{meta.error}</div>
                ) : null}
            </table>

            {/*<label className="payment-label" htmlFor={props.id || props.name}>{label}</label>*/}
            {/*<input className="payment-input" {...field} {...props} />*/}
            {/*{meta.touched && meta.error ? (*/}
            {/*<div className="payment-error">{meta.error}</div>*/}
            {/*) : null}*/}
        </div>

    );
};


const Login = (props) => {

    const attemptLogin = (values) => {
        userService.login(values.username,values.password)
                .then((data) => {
                    //setUser(data)
                    localStorage.setItem('cloudspace-auth-token',data.access_token);
                    setAuthenticated(true);
                })
                .catch(e => {
                    console.log(console.log("error", e));
                });
    }
    let url = "/home";

    const [isAuthenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('cloudspace-auth-token') ) {
            setAuthenticated(true);
        }
    })


    if (isAuthenticated) {
        return <Redirect to= {url} />
    }

    return (
        <div className="ompanel">
            <div className="login">
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    //validate = {validateCouponForm}
                    enableReinitialize={true}
                    isValidating={true}
                    isSubmitting={true}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            attemptLogin(values);
                            setSubmitting(false);
                        }, 200);
                    }}
                >
                    <Form class="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <MyTextInput

                            name="username"
                            type="text"
                            placeholder="Your Username"
                            className = "form-input"
                        />
                        <label htmlFor="password"><b>Password</b></label>
                        <MyTextInput

                            name="password"
                            type="text"
                            placeholder="Your Password"
                            className = "form-input"
                        />
                        <button type="submit" className={"login-button"}>Login</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Login;
