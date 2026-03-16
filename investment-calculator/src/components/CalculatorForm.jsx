import UserInput from './UserInput';

export default function CalculatorForm({onBlur}) {
    return (
        <form id="user-input">
            <div className="input-group">
                <UserInput label="Initial Investment" code="initialInvestment" onBlur={onBlur}/>
                <UserInput label="Annual Investment" code="annualInvestment" onBlur={onBlur}/>
            </div>
            <div className="input-group">
                <UserInput label="Expected Return" code="expectedReturn" onBlur={onBlur}/>
                <UserInput label="Duration" code="duration" onBlur={onBlur}/>
            </div>
        </form>
    )
}