import {useState} from "react";

export default function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    });

    const emailIsInvalid = didEdit.email && !credentials.email.includes('@');

    function handleSubmit(event) {
        event.preventDefault();
        if (emailIsInvalid) {return;}
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
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email"
                           type="email"
                           name="email"
                           onBlur={() => handleInputBlur("email")}
                           onChange={(event) => handleValueChange('email', event.target.event)}
                           value={credentials.email}/>
                    <div className='control-error'>{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password"
                           type="password"
                           name="password"
                           onBlur={() => handleInputBlur("password")}
                           onChange={(event) => handleValueChange('password', event.target.event)}
                           value={credentials.password}/>
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
