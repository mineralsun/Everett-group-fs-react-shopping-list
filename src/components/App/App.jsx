import React from 'react';

import ShoppingList from '../ShoppingList/ShoppingList.jsx'
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                {/* <p>Under Construction...</p> */}
            <ShoppingList />
            </main>
        </div>
    );
}

export default App;
