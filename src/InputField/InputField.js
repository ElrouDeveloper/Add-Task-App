import "./InputField.css";
import { useState } from "react";


const InputField = (props) =>
{
    const [message, setMessage] = useState('')

    const mySubmitHandler = (event) =>
    {
        console.log(event.target.message.value)
        event.preventDefault();
        props.AddToList(event.target.message.value);
    }

    const myChangeHandler = (event) =>
    {
        setMessage(event.target.value)
    }



    return (
        <div >
            <form onSubmit={mySubmitHandler}>
                <input
                    name='message'
                    type='text'
                    onChange={myChangeHandler}
                />
                <input
                    type='submit'
                />
            </form>
        </div>

    );


}
export default InputField;