import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import CostTotal from './components/CostTotal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal  from './components/itemModal';
import { Container } from 'reactstrap';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ShoppingList />
            <ItemModal />
            <CostTotal />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
