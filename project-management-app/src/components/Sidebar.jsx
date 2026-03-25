export default function Sidebar(props) {
    return (
        <section className="p-4 flex-col h-screen bg-black">
            <h2 className="ml-8 mt-12 text-2xl font-bold text-white capitalize">Your Projects</h2>
            <button className="ml-8 my-8 px-3 py-2 rounded-lg bg-mauve-500 hover:bg-mauve-700">
                + Add Project
            </button>
            <div className="ml-8">
                {/* placeholder for dynamic added tabs */}
                <p className="mt-4 mx-2 text-stone-400">Template project</p>
            </div>
        </section>
    )
}