import React, { Component } from 'react';
import products from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={products.data} />
      </div>
    );
  }
}
