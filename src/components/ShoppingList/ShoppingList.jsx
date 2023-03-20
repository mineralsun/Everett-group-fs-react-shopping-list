import { useState, useEffect } from 'react'
import axios from 'axios';

function ShoppingList() {
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [listOfItems, setListOfItems] = useState([]);

    const fetchItemList = () => {
        axios.get('/list').then((response) => {
            setListOfItems(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong');
        });
    }

    useEffect(() => {
        fetchItemList();
    }, []);

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/list', {
            name: itemName,
            quantity: itemQuantity
        }).then((response) => {
            setItemName('');
            setItemQuantity('');
            fetchItemList();
        }).catch((error) => {
            console.log(`Error in POST ${error}`);
            alert('Something went wrong!');
        })
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                Item Name:
                <input type="text"
                       value={itemName}
                       onChange={(e) => setItemName(e.target.value)} />
                <span />
                Item Quantity:
                <input type="number"
                       value={itemQuantity}
                       onChange={(e) => setItemQuantity(e.target.value)} />
                <input type="submit" />
            </form>
            <ul>
                {
                    listOfItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.quantity}
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default ShoppingList;