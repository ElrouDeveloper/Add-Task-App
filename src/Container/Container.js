import { Component } from "react";
import InputField from "../InputField/InputField"
import TaskList from "../TaskList/TaskList"
import React from "react";
import { v4 as uuidv4 } from 'uuid';
class Container extends Component
{

    state = {
        messages: [
        ]
    }

    AddToList = (e) =>
    {
        const newMessage = { id: uuidv4(), message: e }

        this.setState({ messages: this.state.messages.concat(newMessage) })
    }

    removeItem = (e) =>
    {
        this.setState({
            messages: this.state.messages.filter(t => t.id !== e),
        });
    }

    render()
    {

        return (
            <div>
                <InputField AddToList={this.AddToList} />
                <TaskList removeItem={this.removeItem} messages={this.state.messages} />
            </div>
        );

    };

}

export default Container;


