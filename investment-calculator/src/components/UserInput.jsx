export default function UserInput({label, code, onBlur}) {
    return (
        <div>
            <label>{label}</label>
            <input type="number" defaultValue="0" onBlur={(event) => onBlur(event, code)} required/>
        </div>
    )
}