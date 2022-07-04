import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import ShoeCard from "../Components/ShoeCard";
import { getShoes } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import styles from './shoe.module.css';

const Shoes = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const shoesData = useSelector((state) => state.AppReducer.shoes);
  const [searchParams] = useSearchParams();

  
  useEffect(() => {
    let getShoesParams;
    if (location.search || shoesData.length === 0) {
      getShoesParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
    }
    dispatch(getShoes(getShoesParams));

  }, [location.search]);




  return (
    <div className={styles.div}>
      <Filter />
      <div
       className={styles.div2}>
        {shoesData.length > 0 &&
          shoesData.map((shoe) => {
            return (
              <div key={shoe.id} className={styles.key}>
                <Link
                  to={`/shoes/${shoe.id}`}
                  className={styles.link1}>
                  <ShoeCard {...shoe} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Shoes;