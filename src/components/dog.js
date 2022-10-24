import DogImage from '../image/dog.jpg'


function Dog() {
    return <>
        <img src={DogImage} className="Dog-Img" alt="logo" />
        <h2>Hi, this is a Dog!</h2>
    </>


}
export default Dog;