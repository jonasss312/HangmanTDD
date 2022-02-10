import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Formik } from "formik";
//const logo = require ('./logo.svg');
function App() {
    return (React.createElement("div", null,
        React.createElement("div", { className: "App" },
            React.createElement("header", { className: "App-header" },
                React.createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
                React.createElement("p", null,
                    "Edit ",
                    React.createElement("code", null, "src/App.tsx"),
                    " and save to reload."),
                React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))),
        React.createElement("div", null,
            React.createElement("h1", null, "Anywhere in your app!"),
            React.createElement(Formik, { initialValues: { email: "", password: "" }, validate: (values) => {
                    const errors = { email: "test" };
                    if (!values.email) {
                        errors.email = "Required";
                    }
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = "Invalid email address";
                    }
                    return errors;
                }, onSubmit: (values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                } }, ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,
            /* and other goodies */
             }) => (React.createElement("form", { onSubmit: handleSubmit },
                React.createElement("input", { type: "email", name: "email", onChange: handleChange, onBlur: handleBlur, value: values.email }),
                errors.email && touched.email && errors.email,
                React.createElement("input", { type: "password", name: "password", onChange: handleChange, onBlur: handleBlur, value: values.password }),
                errors.password && touched.password && errors.password,
                React.createElement("button", { type: "submit", disabled: isSubmitting }, "Submit")))))));
}
export default App;
