import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [array, setArray] = useState(items)


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(e) {
    setSearch(e.target.value)
  }

  function onItemFormSubmit(obj) {
    setArray([...items, obj])
  }



  const itemsToDisplay = array.filter((item) => {
    if (item.name.includes(search)) {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory
    }
    return item.category === selectedCategory
  });



  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
