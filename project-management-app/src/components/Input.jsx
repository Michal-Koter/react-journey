export default function Input({label, isTextarea = false, ...props}) {
    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-ston-600 focus:outline-none focus:border-stone-600";
    return (
        <div className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-400">{label}</label>
            {isTextarea
                ? <textarea className={classes} {...props}/>
                : <input className={classes} {...props}/>
            }
        </div>
    )
}