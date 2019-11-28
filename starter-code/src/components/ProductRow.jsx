import React from 'react';

export default function ProductRow({prod}) {
  return (
    <tr className={prod.stocked ? "is-in-stock" : "out-of-stock"}>
      <td>{prod.name}</td>
      <td>{prod.price}</td>
    </tr>
  );
}
