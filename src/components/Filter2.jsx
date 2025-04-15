import React, { useState } from "react";

const fruits = ["Apple", "Banana", "Cherry", "Avocado", "Blueberry", "Mango"];

const Filter2 = () => {
  const [query, setQuery] = useState("");

  const filteredFruits = fruits.filter(fruit =>
    fruit.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredFruits.map(fruit => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter2;
