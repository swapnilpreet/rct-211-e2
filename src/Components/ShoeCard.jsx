import React from "react";
import styles from "./shoecard.module.css";

const ShoeCard = ({id,category,name,image}) => {
  return (
    <div data-cy={`shoe-card-wrapper-${id}`} className={styles.div1}>
      <div className={styles.div2}>
        <img
          data-cy="shoe-card-image"
          alt="shoe"
          src={image}
          className={styles.img1}/>
      </div>
      <div className={styles.div3}>
        <div data-cy="shoe-name" className={styles.div4}>
          {name}
        </div>
        <div data-cy="shoe-category">{category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;