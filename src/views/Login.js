import React from "react";
import '../App.css';

function Login() {
        return (
            <div>
                <meta charSet="UTF-8" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=DM Sans" rel="stylesheet" />
                <title>Log in</title>
                <div className="form-container">
                    <h1>Sign in</h1>
                    <form>
                        <div className="form-input">
                            <input type="text" name="username" placeholder="Username" required />
                        </div>
                        <div className="form-input">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <button type="submit" className="login-btn">Log in</button>
                        <p className="text">Don't have an account?
                            <br/>
                            <a href="http://localhost:3000/create">Create an Account</a>
                            <br/>
                            <a href="http://localhost:3000/forgot">Forgot Password?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
export default Login;