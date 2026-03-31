import Button from "./Button"

export default function Sidebar(props) {
    return (
        <aside className="h-screen w-1/3 px-8 py-16 bg-black md:w-72 rounded-r-xl">
            <h2 className="mb-8 mt-12  font-bold text-stone-100 capitalize md:text-2xl">Your Projects</h2>
            <div>
                <Button>+ Add Project</Button>
            </div>
            <ul className="ml-8">
                {/* placeholder for dynamic added tabs */}
                <li className="mt-4 mx-2 text-stone-400">Template project</li>
            </ul>
        </aside>
    )
}