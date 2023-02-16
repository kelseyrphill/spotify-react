import React from "react";
import '../App.css';

function Welcome() {
    return (
            <div>
                <meta charSet="UTF-8" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=DM Sans" rel="stylesheet" />
                <title>Log in</title>
                <div className="login-container">
                    <h1>Welcome</h1>
                    <a href="http://localhost:3000/login">
                        <button type="button" className="sign-in-btn">Sign In </button>
                    </a>
                    <a href="http://localhost:3000/create">
                        <button type="button" className="create-account-btn">Create Account</button>
                    </a>
                </div>
            </div>
    );
}

export default Welcome;
