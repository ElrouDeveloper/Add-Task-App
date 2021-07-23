import { Component } from "react";
import "./InputField.css";
import { Input } from 'semantic-ui-react';


class InputField extends Component
{
    state = {
        message: ''

    }
    mySubmitHandler = (event) =>
    {
        console.log(event.target.message.value)

        console.log("you come here", event.target.message.value)
        event.preventDefault();
        this.props.AddToList(event.target.message.value);
    }

    myChangeHandler = (event) =>
    {
        console.log("message ", event.target.value)
        this.setState({ message: event.target.value })
    }

    render()
    {

        return (
            <div >
                <form onSubmit={this.mySubmitHandler}>
                    <input
                        name='message'
                        type='text'
                        onChange={this.myChangeHandler}
                    />
                    <input
                        type='submit'
                    />
                </form>
            </div>

        );

    };
}
export default InputField;