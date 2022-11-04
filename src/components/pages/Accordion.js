import { useState} from 'react';


function Accordion(props) {

    const [ isVisible, isNotVisible, ] = useState(false);
const handleOpen = () => {
     isNotVisible(!isVisible); //toggle accordion
}
    return (
        <div className="accordion">

            <h3 className="accordion-title" onClick={ handleOpen}>{props.title}</h3>
            
           <div className="sign">{isVisible ? '-' : '+' }</div>
            
{ isVisible && (
            <div className="accordion-content">
            
                <p className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac quam risus.
                     Nam vehicula ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac quam risus. Nam vehicula ex.</p>
            </div>
              )}
        </div>
 
    )

}
export default Accordion;