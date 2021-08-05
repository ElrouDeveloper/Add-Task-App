import Item from "../Item/Item"
import React from "react";



const TaskList = (props) =>
{
    const items = props.messages.map((item) => (
        <Item removeItem={props.removeItem} id={item.id} message={item.message} />))
    return (
        <div>

            {items}

        </div>
    );

}
export default TaskList;