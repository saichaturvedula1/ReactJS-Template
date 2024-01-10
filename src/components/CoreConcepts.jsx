import {CORE_CONCEPTS} from '../data.js';
import CoreConcept from './coreconcept.jsx';
export default function CoreConcepts(){
    return (
    <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept_data)=>(<CoreConcept key={concept_data.title} {...concept_data}/>))}
        </ul>
        </section>
    )
}