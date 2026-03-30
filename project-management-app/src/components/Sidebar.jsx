export default function Sidebar(props) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-black md:w-72 rounded-r-xl">
            <h2 className="mb-8 mt-12  font-bold text-stone-100 capitalize md:text-2xl">Your Projects</h2>
            <div>
                <button className="px-4 py-2 rounded-lg text-xs md:text-base text-stone-300 hover:text-stone-200 bg-mauve-700 hover:bg-mauve-500">
                    + Add Project
                </button>
            </div>
            <ul className="ml-8">
                {/* placeholder for dynamic added tabs */}
                <li className="mt-4 mx-2 text-stone-400">Template project</li>
            </ul>
        </aside>
    )
}