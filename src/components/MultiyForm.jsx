import React, { useState } from 'react';
import emailjs from "@emailjs/browser";


const MultiyForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        phone: "",
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const Handler = (e) => {
        e.preventDefault();

        // Sending form data via EmailJS
        emailjs.send("service_5854y5f", "template_wt2dm1g", formData, "VXiEVFOvbcWLcc0OH")
        .then((response) => {
            alert("✅ Your form has been submitted successfully!");
            console.log("Success:", response);
        })
        .catch((error) => {
            alert("❌ Failed to send data.");
            console.error("Error:", error);
        });

        // Clear form after submission
        setFormData({
            name: "",
            email: "",
            password: "",
            age: "",
            phone: "",
        });
    };

    return (
        <>
            <h1>Multi-Form Handling using React.js</h1>
            <form onSubmit={Handler}>
                <label htmlFor="name">Name:</label><br/>
                <input type="text" id="name" value={formData.name} name="name" onChange={onChangeHandler} placeholder="Enter name"/><br/><br/>

                <label htmlFor="mail">Email:</label><br/>
                <input type="email" id="mail" value={formData.email} name="email" onChange={onChangeHandler} placeholder="Enter email"/><br/><br/>

                <label htmlFor="pass">Password:</label><br/>
                <input type="password" id="pass" value={formData.password} name="password" onChange={onChangeHandler} placeholder="Enter password"/><br/><br/>

                <label htmlFor="age">Age:</label><br/>
                <input type="number" id="age" value={formData.age} name="age" onChange={onChangeHandler} placeholder="Enter age"/><br/><br/>

                <label htmlFor="phone">Phone-No:</label><br/>
                <input type="number" id="phone" value={formData.phone} name="phone" onChange={onChangeHandler} placeholder="Enter Phone no"/><br/><br/>

                <button type="submit">Submit Form</button>
            </form>
        </>
    );
};

export default MultiyForm;
