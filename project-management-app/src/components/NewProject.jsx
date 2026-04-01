import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import {useRef} from "react";

export default function NewProject({onAdd, onCancel}) {
    const title = useRef()
        , description = useRef()
        , dueDate = useRef();

    const modal = useRef();

    function handleSave() {
        const enteredTitle = title.current.value
            , enteredDescription = description.current.value
            , enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === ''
            || enteredDescription.trim() === ''
            || enteredDueDate.trim() === ''
        ) {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal buttonCaption="Close" ref={modal}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Pleas make sure you provided a valid value for every input field.</p>
            </Modal>
            <div className="h-screen w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-700 hover:text-stone-900" onClick={onCancel}>
                            Cancel
                        </button>
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
        </>
    )
}