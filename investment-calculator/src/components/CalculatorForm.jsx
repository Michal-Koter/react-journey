import UserInput from './UserInput';
import {useState} from "react";

export default function CalculatorForm(props) {
    const [initialInvestment, setInitialInvestment] = useState(0)
        , [annualInvestment, setAnnualInvestment] = useState(0)
        , [expectedReturn, setExpectedReturn] = useState(0)
        , [duration, setDuration] = useState(0);


    function handleChange(event, field) {
        const value = event.target.value;
        switch (field) {
            case "initial":
                setInitialInvestment(value);
                break;
            case "annual":
                setAnnualInvestment(value);
                break;
            case "return":
                setExpectedReturn(value);
                break;
            case "duration":
                setDuration(value);
                break;
        }
    }

    return (
        <form id="user-input">
            <div className="input-group">
                <UserInput label="Initial Investment" code="initial" onBlur={handleChange}/>
                <UserInput label="Annual Investment" code="annual" onBlur={handleChange}/>
            </div>
            <div className="input-group">
                <UserInput label="Expected Return" code="return" onBlur={handleChange}/>
                <UserInput label="Duration" code="duration" onBlur={handleChange}/>
            </div>
        </form>
    )
}