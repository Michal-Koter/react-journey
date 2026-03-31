import Input from "./Input.jsx";

export default function NewProject() {
    return (
        <div className="h-screen w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-700 hover:text-stone-900">Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-600 text-stone-100 hover:bg-stone:900">Save</button>
                </li>
            </menu>
            <div>
                <Input label="Title"/>
                <Input label="Description" isTextarea/>
                <Input label="Due Date"/>
            </div>
        </div>
    )
}