import InputField from "../InputField/InputField"
import TaskList from "../TaskList/TaskList"
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";


const Container = () =>
{


    const [messages, setMessages] = useState([]);

    const AddToList = (e) =>
    {
        const newMessage = { id: uuidv4(), message: e }

        setMessages(messages.concat(newMessage))
    }

    const removeItem = (e) =>
    {
        setMessages(messages.filter(t => t.id !== e))

    }



    return (
        <div>
            <InputField AddToList={AddToList} />
            <TaskList removeItem={removeItem} messages={messages} />
        </div>
    );

};

export default Container;


