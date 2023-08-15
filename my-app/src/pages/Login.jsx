import React from "react";

const Register = () => {
    return (
    <div className="formContainer">
        <div className="form1">
            <span className="logo">TalkToMe</span>
            <form >
                <input type="text" placeholder="Name"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
            <p>You do not have an account? Register</p>
        </div>
    </div>
    );
};

export default Register;
