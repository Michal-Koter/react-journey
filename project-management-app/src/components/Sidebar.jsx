import Button from "./Button"

export default function Sidebar({handleStartAddProject, projects}) {
    return (
        <aside className="h-screen w-1/3 px-8 py-16 bg-black md:w-72 rounded-r-xl">
            <h2 className="mb-8 mt-12 font-bold text-stone-100 capitalize md:text-2xl">Your Projects</h2>
            <div>
                <Button onClick={handleStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {projects.map((item) => (
                    <li key={item.id}>
                        <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-700">
                            {item.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}