import Input from "./Input.jsx";
import {useRef} from "react";

export default function NewProject({onAdd}) {
    const title = useRef()
        , description = useRef()
        , dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value
            , enteredDescription = description.current.value
            , enteredDueDate = dueDate.current.value;

        //TODO: validation
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <div className="h-screen w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-700 hover:text-stone-900">Cancel</button>
                </li>
                <li>
                    <button
                        className="px-6 py-2 rounded-md bg-stone-600 text-stone-100 hover:bg-stone:900"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input label="Title" ref={title}/>
                <Input label="Description" ref={description} isTextarea/>
                <Input label="Due Date" ref={dueDate} type="date"/>
            </div>
        </div>
    )
}