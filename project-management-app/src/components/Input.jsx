export default function Input({label, isTextarea = false, ...props}) {
    return (
        <div>
            <label>{label}</label>
            {isTextarea
                ? <textarea {...props}/>
                : <input {...props}/>
            }
        </div>
    )
}