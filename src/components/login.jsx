import React from "react";
import {Formik, Form, Field, ErrorMessage, useField} from 'formik';
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
    return (
        <div className="ompanel">
            <div className="login">
                <Formik
                    initialValues={{
                        coupon: ''
                    }}
                    //validate = {validateCouponForm}
                    enableReinitialize={true}
                    isValidating={true}
                    isSubmitting={true}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            //handleCouponSubmit(values.coupon.toUpperCase());
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
                        <button type="submit" className={"apply-coupon"}>Login</button>
                        <div className="container">
                            <button type="button" onClick="document.getElementById('id01').style.display='none'"
                                    className="cancelbtn">Cancel
                            </button>
                            <span className="psw">Forgot <a href="#">password?</a></span>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Login;
