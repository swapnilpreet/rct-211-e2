import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./filter.module.css";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );

  const handleChange = (e) => {
    
    const option = e.target.value;

    let newCategoryOptions = [...category];

    // console.log(...category)
    if (category.includes(option)) {
      
      newCategoryOptions.splice(newCategoryOptions.indexOf(option), 1);
    } else {
      newCategoryOptions.push(option);
    }
    setCategory(newCategoryOptions);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({ category });
    }
  }, [category, setSearchParams]);


// console.log(category)


  return (
    <div className={styles.div1}>
      <h3 className={styles.h1}>Filters</h3>
      <div className={styles.div2}>Category</div>
      <div className={styles.div3} data-cy="filter-category">
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="Sneakers"
            checked={category.includes("Sneakers")}
          />
          <label>Sneakers</label>
        </div>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="Loafers"
            checked={category.includes("Loafers")}
          />
          <label>Loafers</label>
        </div>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="Canvas"
            checked={category.includes("Canvas")}
          />
          <label>Canvas</label>
        </div>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="Boots"
            checked={category.includes("Boots")}
          />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
