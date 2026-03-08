import {useState} from "react";

import {EXAMPLES} from "../../data";
import Section from "../Section";
import TabButton from "../TabButton/TabButton";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <Section h2="Examples" id="examples" >
            <menu>
                <TabButton
                    isSelected={selectedTopic === "components"}
                    onClick={() => handleSelect("components")}
                >
                    Components
                </TabButton>
                <TabButton
                    sSelected={selectedTopic === "jsx"}
                    onClick={() => handleSelect("jsx")}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "props"}
                    onClick={() => handleSelect("props")}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "state"}
                    onClick={() => handleSelect("state")}
                >
                    State
                </TabButton>
            </menu>

            {!selectedTopic ? (
                <p>Pleas select a topic.</p>
            ) : (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>
                </div>
            )}
        </Section>
    );
}