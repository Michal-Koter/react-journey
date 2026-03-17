import UserInput from './UserInput';

export default function CalculatorForm({onChange}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <UserInput label="Initial Investment" code="initialInvestment" onChange={onChange}/>
                <UserInput label="Annual Investment" code="annualInvestment" onChange={onChange}/>
            </div>
            <div className="input-group">
                <UserInput label="Expected Return" code="expectedReturn" onChange={onChange}/>
                <UserInput label="Duration" code="duration" onChange={onChange}/>
            </div>
        </section>
    )
}