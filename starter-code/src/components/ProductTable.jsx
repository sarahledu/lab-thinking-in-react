import React from 'react';
import ProductRow from "./ProductRow"

export default function ProductTable(products) {
  console.log(products.products);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          
            {products.products.map((product,i) => (
                <ProductRow key={i} prod={product}/>
            ))}
          
        </tbody>
      </table>
    </div>
  );
}
