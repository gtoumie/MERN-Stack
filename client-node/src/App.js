import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <h1>hello</h1>
        <AppNavbar ></AppNavbar>
        <ShoppingList></ShoppingList>
      </div>
    </Provider>
  );
}

export default App;
