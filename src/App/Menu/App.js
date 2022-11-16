import React, { useState } from 'react';

// component
import Menu from './Menu';
import Categories from './Categories';

// dummay Data
import items from './data';

// style
import './index.css';

// all categories mapping
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {
  // states
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  /**
   * filters items
   * @param {objacts} category 
   */
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* passing props */}
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
