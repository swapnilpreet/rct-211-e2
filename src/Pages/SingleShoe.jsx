import React, { useEffect, useState } from "react";
import { getShoes } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './singleshoe.module.css';

const SingleShoe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currentShoe, setcurrentShoe] = useState({});
  const shoes = useSelector((state) => state.AppReducer.shoes);


  useEffect(() => {
    if (shoes.length === 0) {
      dispatch(getShoes());
    }
  }, [shoes.length, dispatch]);



  useEffect(() => {
    if (id) {
      const currentShoe = shoes.find((shoe) => shoe.id === Number(id));
      currentShoe && setcurrentShoe(currentShoe);
    }
  }, [id, shoes]);


  return (
    <div className={styles.div1}>
      <h2>{currentShoe?.name}</h2>
      <div>
        <img src={currentShoe.image} className={styles.img1} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentShoe?.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
 