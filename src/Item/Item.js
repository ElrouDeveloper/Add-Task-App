
import { Message } from 'semantic-ui-react'



const Item = (props) =>
{
    const removeItem = () =>
    {
        props.removeItem(props.id);
    }



    return (
        <Message>
            <p onClick={removeItem}>
                {props.message}
            </p>
        </Message>

    );

}
export default Item;