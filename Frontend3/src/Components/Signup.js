import React, { useState } from "react";


function Signup(props) {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    // const [number, setNumber] = useState('');
    // const [institute, setInstitute] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(first_name);
        console.log(last_name);
        console.log(pass);
    }
    return (
            <div className="auth-form-container">
                <h2>SignUp</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="first_name">First Name</label>
                    <input value={first_name} onChange={(e) => setFirstName(e.target.value)} type="first_name" placeholder="John" id="first_name" name="first_name" />
                    <label htmlFor="last_name">Last Name</label>
                    <input value={last_name} onChange={(e) => setLastName(e.target.value)} type="last_name" placeholder="Wick" id="last_name" name="last_name" />
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" id="email" name="email" />
                    {/* <label htmlFor="number">Number</label>
                    <input value={number} onChange={(e) => setNumber(e.target.value)} type="text" placeholder="1234567890" id="number" name="number" /> */}
                    {/* <label htmlFor="institute">Institute</label>
                    <input value={institute} onChange={(e) => setInstitute(e.target.value)} type="institute" placeholder="IIT Bombay" id="institute" name="institute" /> */}
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Sign up</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </div>
            )
}

            export default Signup;
