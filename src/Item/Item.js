
import { Component } from "react";
import { Message } from 'semantic-ui-react'




class Item extends Component
{
    removeItem = () =>
    {
        this.props.removeItem(this.props.id);
    }

    render()
    {

        return (
            <Message>
                <p onClick={this.removeItem}>
                    {this.props.message}
                </p>
            </Message>

        );
    }
}
export default Item;