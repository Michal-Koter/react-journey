import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useRef, useState} from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
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

    function handleSelectProject(projectId) {
        setProjectsState(prev => ({
            ...prev,
            selectedProjectId: projectId
        }));
    }

    let selectedProject;
    if (projectsState.selectedProjectId) {
        selectedProject = projectsState.projects.filter(
            project => (project.id === projectsState.selectedProjectId)
        )[0];
    }

    function handleDeleteProject() {
        const projects = projectsState.projects.filter(
            project => (project.id !== projectsState.selectedProjectId)
        );
        setProjectsState(prev => ({
            ...prev,
            selectedProjectId: undefined,
            projects: projects
        }))
    }

    function handleAddTask(text) {
        const taskId = Math.random();
        setProjectsState(prev => {
            const newTask = {
                text: text,
                projectId: prev.selectedProjectId,
                id: taskId,
            }

            return {
                ...prev,
                tasks: [newTask, ...prev.tasks]
            }
        });
    }

    function handleDeleteTask(id) {
        setProjectsState(prev => ({
            ...prev,
            tasks: projectsState.tasks.filter(t => (t.id !== id))
        }))
    }

    return (
        <main className="h-sreen my-8 flex gap-8">
            <Sidebar
                handleStartAddProject={handleStartAddProject}
                handleSelectProject={handleSelectProject}
                projectsState={projectsState}
            />
            {projectsState.selectedProjectId === undefined
                ? <NoProjectSelected handleStartAddProject={handleStartAddProject}/>
                : projectsState.selectedProjectId === null
                    ? <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
                    : <SelectedProject
                        project={selectedProject}
                        tasks={projectsState.tasks.filter(t => t.projectId === selectedProject.id)}
                        onDelete={handleDeleteProject}
                        onAddTask={handleAddTask}
                        onDeleteTask={handleDeleteTask}
                    />
            }
        </main>
    );
}

export default App;
