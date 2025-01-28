import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form.js";
import PackingList from "./components/PackingList.js";
import Stats from "./components/Stats.js";

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems([...items, item]);
  }
  function deleteItems(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={deleteItems}
        handleToggleItem={handleToggleItem}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
