import {CORE_CONCEPTS} from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";
import Section from "../Section";

export default function CoreConcepts() {
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept} />)}
            </ul>
        </Section>
    );
}