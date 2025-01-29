import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [cat, setCat] = useState('All')
  const [col, setCol] = useState(items)

  const newCat = col.filter(item => {
    if (cat === 'All') {
      return true
    } else {
      return item.category === cat
    }
  })

  function handleChange(e) {
    setCat(e.target.value)
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newCat.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
