import TabButton from '../components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from '../data';

export default function Examples(){
    const [selectTopic, setSelectTopic] = useState();
  
  function handleClick(selectedBtn){
      setSelectTopic(selectedBtn)
  }
  let tabContent = <p>Please Select a Topic</p>;

  if(selectTopic){
    tabContent = <div id="tab-content">
    <h1>{EXAMPLES[selectTopic].title}</h1>
    <p>{EXAMPLES[selectTopic].description}</p>
    <pre>
    <code>{EXAMPLES[selectTopic].code}</code>
    </pre>
   </div>
  }
    return(
      
        <section id="examples">
         <h2>Examples</h2>
         <menu>
          <TabButton  isSelected = {selectTopic == 'components'} onSelect={()=> handleClick('components')}>Components</TabButton>
          <TabButton isSelected = {selectTopic == 'jsx'} onSelect={()=> handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected = {selectTopic == 'props'} onSelect={()=> handleClick('props')}>Props</TabButton>
          <TabButton isSelected = {selectTopic == 'state'} onSelect={()=> handleClick('state')}>State</TabButton>
         </menu>
         {tabContent}
        </section>
       
        )
}