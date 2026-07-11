import {useAccordionContext} from "./Accordion.jsx";
import {useAccordionItemContext} from "./AccordionItem.jsx";

export default function AccordionContent({clasName, children}) {
    const {openItemId} = useAccordionContext();
    const id = useAccordionItemContext();

    const isOpen = openItemId === id;

    return(
        <div className={isOpen ? `${clasName ?? ''} open` : `${clasName ?? ''} close`}>
            {children}
        </div>
    );
}