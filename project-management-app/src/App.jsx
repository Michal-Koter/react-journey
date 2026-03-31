import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";

function App() {
    const [projects, setProjects] = useState({
        selectedProjectId: undefined,
        projects: []
    });

    function handleStartAddProject() {
        setProjects(prev => ({
            ...prev,
            selectedProjectId: null
        }));
    }

    return (
        <main className="h-sreen my-8 flex gap-8">
            <Sidebar handleStartAddProject={handleStartAddProject}/>
            {projects.selectedProjectId === undefined
                ? <NoProjectSelected handleStartAddProject={handleStartAddProject}/>
                : projects.selectedProjectId === null
                    ? <NewProject/>
                    : null //TODO: add in the future project component
            }
        </main>
    );
}

export default App;
