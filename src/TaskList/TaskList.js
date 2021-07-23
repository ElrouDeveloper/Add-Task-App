import { Component } from "react";
import Item from "../Item/Item"
import React from "react";




class TaskList extends Component
{

    render()
    {
        const items = this.props.messages.map((item) => (
            <Item removeItem={this.props.removeItem} id={item.id} message={item.message} />))
        return (
            <div>

                {items}

            </div>
        );
    }
}
export default TaskList;