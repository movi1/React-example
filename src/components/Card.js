import Dog1 from '../image/dog.jpg';
import Dog2 from '../image/dog2.jpg';
import Cat1 from '../image/cat.jpg';

import Button from './Button.js';


function Card({ name, colour, text, image, buttonText, }) {

    const styles = {
        backgroundColor: colour,
        button: colour,
        
    }

    console.log(image)


    return <div style={styles}>

        {/* Find better way to pass images to component from App.js */}
        {image === "Dog1" && (
            <>
            <img src={Dog1} className="Dog-Img" alt="logo" />
            <h2>Hi, I am a Dog!</h2>
            </>
        )}

        {image === "Dog2" && (
            <>
            <img src={Dog2} className="Dog-Img" alt="logo" />
            <h2>Hi, I am a Dog!</h2>
            </>
        )}
 
        
        {image === "Cat1" && (
            <>
            <img src={Cat1} className="Cat-Img" alt="logo"  />
            <h2>Hi, I am a Cat!</h2>
          
            </>
        )}


        <p>My name is {name}</p>
        
        





        {
            text === true ?
                <p>I am very cute</p>
                :
                <p>I can be very naugthy</p>
        }
        < Button text={buttonText} ></Button >
    </div>
}

export default Card;