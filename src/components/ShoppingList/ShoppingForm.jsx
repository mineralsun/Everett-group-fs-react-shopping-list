import axios from 'axios'

function ShoppingForm({
                        itemName,
                        setItemName,
                        itemQuantity,
                        setItemQuantity,
                        fetchItemList
                      }) {
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
    )
}

export default ShoppingForm;