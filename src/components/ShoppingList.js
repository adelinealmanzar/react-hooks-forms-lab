import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchVal, setSearchValue] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(e) {
    setSearchValue(e.target.value)
  }

  const [previousItems, setNewItems] = useState(items)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Produce')

  function handleNameInput(e) {
    setName(e.target.value)
  }
  function handleCategoryInput(e) {
    setCategory(e.target.value)
  }

  function handleNewItemSubmit(e) {
    e.preventDefault()
    const itemsToAdd = {
      id: uuid(),
      name: name,
      category: category
    }
    setNewItems([...previousItems, itemsToAdd])
  }

  const itemsToDisplay = previousItems.filter((item) => {
    if (selectedCategory.includes('All') && (item.name.includes(searchVal) || searchVal === '')) {
      return true
    } else if (selectedCategory.includes(item.category) && (item.name.includes(searchVal) || searchVal === '')) {
      return true
    }
  });

  console.log(previousItems)

  return (
    <div className="ShoppingList">
      <ItemForm name={name} category={category} handleNameInput={handleNameInput} handleCategoryInput={handleCategoryInput} onItemFormSubmit={handleNewItemSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={searchVal} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
