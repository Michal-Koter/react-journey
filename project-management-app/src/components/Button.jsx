export default function Button({children, ...props})  {
    return (
        <button className="px-4 py-2 rounded-lg text-xs md:text-base text-stone-300 hover:text-stone-200 bg-mauve-700 hover:bg-mauve-500" {...props}>
            {children}
        </button>
    );
}