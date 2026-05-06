import {useState} from "react";
import Input from "./Input.jsx";
import {isEmail, isNotEmpty, hasMinLength} from "../util/validation.js";

export default function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    });

    const emailIsInvalid = didEdit.email && !isEmail(credentials.email) && !isNotEmpty(credentials.email.trim());
    const passwordIsInvalid = didEdit.password && !hasMinLength(credentials.password.trim(), 8);

    function handleSubmit(event) {
        event.preventDefault();
        if (emailIsInvalid || passwordIsInvalid) {
            return;
        }
        console.log(credentials)
    }

    function handleValueChange(identifier, value) {
        setCredentials(prev => ({
            ...prev,
            [identifier]: value
        }));
        setDidEdit(prev => ({
            ...prev,
            [identifier]: false
        }));
    }

    function handleInputBlur(identifier) {
        setDidEdit(prev => ({
            ...prev,
            [identifier]: true
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input label="Email"
                       id="email"
                       type="email"
                       name="email"
                       onBlur={() => handleInputBlur('email')}
                       onChange={(event) => handleValueChange('email', event.target.value)}
                       value={credentials.email}
                       error={emailIsInvalid && 'Please enter a valid email!'}
                />

                <Input label="Password"
                       id="password"
                       type="password"
                       name="password"
                       onBlur={() => handleInputBlur('password')}
                       onChange={(event) => handleValueChange('password', event.target.value)}
                       value={credentials.password}
                       error={passwordIsInvalid && "Please enter a valid password."}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
