import Accordion from "./components/Accordion/Accordion.jsx";
import SearchableList from "./components/SearchableList/SearchableList.jsx";
import Place from "./components/Place/Place.jsx";
import {PLACES} from "./store/Places.js";

function App() {
    return (
        <main>
            <section>
                <h2>Why Work with us?</h2>
                <Accordion className="accordion">
                    <Accordion.Item className="accordion-item" id="experience">
                        <Accordion.Title className="accordion-item-title">We got 20 years of experience</Accordion.Title>
                        <Accordion.Content className="accordion-item-content">
                            <article>
                                <p>You can&apos;t go wrong with us.</p>
                                <p>We are in the business of planning vacation trip for more than 20 yeas.</p>
                            </article>
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item className="accordion-item" id="guides">
                        <Accordion.Title className="accordion-item-title">We&apos;re working with local guides</Accordion.Title>
                        <Accordion.Content className="accordion-item-content">
                            <article>
                                <p>We are not doing this alone</p>
                                <p>Instead, we are working with local guides to ensure a safe vacations.</p>
                            </article>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </section>
            <section>
                <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
                    {(item) => <Place item={item}/>}
                </SearchableList>
                <SearchableList items={["item 1", "item 2", "item 3"]} itemKeyFn={(item) => item}>
                    {(item) => item}
                </SearchableList>
            </section>
        </main>
    );
}

export default App;
