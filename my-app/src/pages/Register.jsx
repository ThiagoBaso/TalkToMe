import React from "react";

const Register = () => {
    return (
    <div className="formContainer">
        <div className="form1">
            <span className="logo">TalkToMe</span>
            <h3>Register</h3>
            <form >
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor="file">
                    <img style={{width: "45px"}} src="https://i.pinimg.com/originals/d2/ea/d8/d2ead876ae76ba7147f68e7d2417c5f3.png" alt="" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sing up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
    );
};

export default Register;
