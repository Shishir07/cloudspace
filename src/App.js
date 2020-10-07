import React, {useState, useEffect, useContext} from 'react';
import {Formik, Form, Field, ErrorMessage, useField} from 'formik';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import NavBar from "./components/navbar";
import NavBar2 from "./components/navbar2"
import Counters from "./components/counters";

function App(props)
{
    const [state, changeState] = useState({
                                              counters: [
                                                  {id: 1, value: 0},
                                                  {id: 2, value: 0},
                                                  {id: 3, value: 0},
                                                  {id: 4, value: 0}
                                              ]
                                          });

    const handleIncrement = counter => {
        const counters = [state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counters[index]};
        counters[index].value++;
        changeState({counters});
    };

    const handleDecrement = counter => {
        const counters = [state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counters[index]};
        counters[index].value--;
        changeState({counters});
    };

    const handleReset = () => {
        const counters = state.counters.map(c => {
            c.value = 0;
            return c;
        });
        changeState({counters});
    };

    const handleDelete = counterId => {
        const counters = state.counters.filter(c => c.id !== counterId);
        changeState({counters});
    };

    const handleRestart = () => {
        window.location.reload();
    };
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
    return (
            <div>
                <NavBar
                        totalCounters={state.counters.filter(c => c.value > 0).length}
                />
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
}

export default App;
