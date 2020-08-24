import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <AppNavbar ></AppNavbar>
      <ShoppingList></ShoppingList>
    </div>
  );
}

export default App;
