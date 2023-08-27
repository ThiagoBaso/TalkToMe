import React from "react";

const Register = () => {
    return (
    <div className="formContainer">
        <div className="form1">
            <span className="logo">TalkToMe</span>
            <h3>Login</h3>
            <form >
                <input type="text" placeholder="Name"/>
                <input type="password" placeholder="Password"/>
                <button>Sing in</button>
            </form>
            <p>You do not have an account? Register</p>
        </div>
    </div>
    );
};

export default Register;
