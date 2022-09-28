import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');


  function onSomethingChange(e) {
    if (e.target.name === 'name') {
       setItemName(e.target.value)
    } else { setItemCategory(e.target.value) }
  }

  function handleSubmit (e){
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value ={itemName} onChange= {onSomethingChange} />
      </label>

      <label>
        Category:
        <select name="category" value= {itemCategory} onChange ={onSomethingChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
