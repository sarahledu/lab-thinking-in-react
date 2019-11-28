import React from 'react';

export default function SearchBar({ clbk }) {
  return (
    <form onChange={clbk}>
      <span>Search</span>
      <input name="searchedProduct" type="text" />
      <input name="is-in-stock" type="checkbox" />
    </form>
  );
}
