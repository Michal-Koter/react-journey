import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useRef, useState} from "react";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: []
    });

    function handleStartAddProject() {
        setProjectsState(prev => ({
            ...prev,
            selectedProjectId: null
        }));
    }

    function handleAddProject(projectData) {
        const projectId = Math.random();
        const newProject = {
            ...projectData,
            id: projectId
        }
        setProjectsState(prev => ({
            ...prev,
            selectedProjectId: projectId,
            projects: [...prev.projects, newProject]
        }));
    }

    function handleCancelAddProject() {
        setProjectsState(prev => ({
            ...prev,
            selectedProjectId: undefined
        }));
    }

    return (
        <main className="h-sreen my-8 flex gap-8">
            <Sidebar handleStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
            {projectsState.selectedProjectId === undefined
                ? <NoProjectSelected handleStartAddProject={handleStartAddProject}/>
                : projectsState.selectedProjectId === null
                    ? <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
                    : null //TODO: add in the future project component
            }
        </main>
    );
}

export default App;
