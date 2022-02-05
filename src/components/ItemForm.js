import React from "react";

function ItemForm({name, category, handleNameInput, handleCategoryInput, onItemFormSubmit}) {
  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input value={name} onChange={handleNameInput} type="text" name="name" />
      </label>

      <label>
        Category:
        <select value={category} onChange={handleCategoryInput} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
