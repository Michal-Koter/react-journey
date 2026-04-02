import Button from "./Button"

export default function Sidebar({handleStartAddProject, handleSelectProject, projectsState}) {
    return (
        <aside className="h-screen w-1/3 px-8 py-16 bg-black md:w-72 rounded-r-xl">
            <h2 className="mb-8 mt-12 font-bold text-stone-100 capitalize md:text-2xl">Your Projects</h2>
            <div>
                <Button onClick={handleStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {projectsState.projects.map((item) => {
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-700 ";

                    if (item.id === projectsState.selectedProjectId) {
                        cssClasses += "bg-stone-800 text-stone-200"
                    } else {
                        cssClasses += "text-stone-400";
                    }

                    return (
                        <li key={item.id}>
                            <button onClick={() => handleSelectProject(item.id)}
                                    className={cssClasses}>
                                {item.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}