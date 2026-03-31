import noProjectImage from '../assets/no-projects.png';
import Button from "./Button.jsx";

export default function NoProjectSelected() {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImage} alt="An empty task list" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-600 my-4">No project Selected</h2>
            <p className="text-stone-500 mb-4">Select a project or get started with a new one</p>
            <p>
                <Button>Create new project</Button>
            </p>
        </div>
    )
}