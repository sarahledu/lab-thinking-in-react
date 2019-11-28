import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

// export default function FilterableProductTable({products}) {
//     console.log(products.data)
//   return (
//     <div>
//     <h1>Ironshop</h1>
//       <SearchBar />
//       <ProductTable products={products.data} />
//     </div>
//   );
// }

export default class FilterableProductTable extends Component {
  state = {
    products: [...this.props.products]
  };

  handleSearch = e => {
    var inputSearch = document.querySelector(`input[name = "searchedProduct"]`);
    var checkbox = document.querySelector(`input[name = "is-in-stock"]`);
    var filteredProducts = this.props.products
      .filter(p =>
        p.name.toUpperCase().includes(inputSearch.value.toUpperCase())
      )
      .filter(p => (checkbox.checked ? p.stocked : p));

    this.setState({ products: filteredProducts });
  };

  render() {
    return (
      <div>
        <h1>Ironshop</h1>
        <SearchBar clbk={this.handleSearch} />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}
