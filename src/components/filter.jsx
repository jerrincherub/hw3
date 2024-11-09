import React, { useState } from 'react';

const FilterArrayExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterArrayExample;