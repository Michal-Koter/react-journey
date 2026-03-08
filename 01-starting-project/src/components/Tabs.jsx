import TabButton from "./TabButton/TabButton";

export default function Tabs({children, buttons}) {
    return (
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    )
}