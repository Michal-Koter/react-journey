import Input from "./Input.jsx";
import {isEmail, isNotEmpty, hasMinLength} from "../util/validation.js";
import {useInput} from "../hooks/useInput.js";

export default function Login() {
    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailIsInvalid
    } = useInput('', (v) => isEmail(v) && isNotEmpty(v.trim()));
    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordIsInvalid
    } = useInput('', (v) => hasMinLength(v.trim(), 8));

    function handleSubmit(event) {
        event.preventDefault();
        if (emailIsInvalid || passwordIsInvalid) {
            return;
        }
        console.log({emailValue, passwordValue})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input label="Email"
                       id="email"
                       type="email"
                       name="email"
                       onBlur={handleEmailBlur}
                       onChange={handleEmailChange}
                       value={emailValue}
                       error={emailIsInvalid && 'Please enter a valid email!'}
                />

                <Input label="Password"
                       id="password"
                       type="password"
                       name="password"
                       onBlur={handlePasswordBlur}
                       onChange={handlePasswordChange}
                       value={passwordValue}
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
