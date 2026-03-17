export default function UserInput({label, code, onChange}) {
    return (
        <p>
            <label>{label}</label>
            <input type="number" defaultValue="0" onChange={(event) => onChange(event, code)} required/>
        </p>
    )
}