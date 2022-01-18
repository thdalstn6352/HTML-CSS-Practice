import { useState } from "react";
import FoodList from "./components/FoodList";
import mockItems from "./mock.json";

function App() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState(mockItems);

  const sortedItem = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleCalorieClick}>칼로리순</button>
      </div>
      <FoodList items={sortedItem} onDelete={handleDelete} />
    </div>
  );
}

export default App;
