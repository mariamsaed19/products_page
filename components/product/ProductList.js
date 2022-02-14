import React, { useState } from "react";
import Product from "./Product";
import styles from "../../styles/ProductList.module.scss";

const ProductList = ({ products, id, citiesFilter, statesFilter }) => {
  const [scrollid, setSelected] = useState(Math.min(5, products.length - 1));
  const scroll = () => {
    setSelected(scrollid + 5 >= products.length ? 0 : scrollid + 5);
    const ix = id.toString() + scrollid;
    const elm = document.getElementById(ix);
    elm.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };
  return (
    <>
      <h4 className={styles.title}>{products[0]["brand_name"]}</h4>
      <img src="seperator972.svg" className={styles.line} alt="line" />
      <div className={styles.brandContainer} id={id}>
        <div className={styles.prodContainer}>
          {products.map((product, i) => {
           return (statesFilter.length === 0 ||
              statesFilter.some(
                (e) => e.label === product["address"]["state"]
              )) &&
            (citiesFilter.length === 0 ||
              citiesFilter.some(
                (e) => e.label === product["address"]["city"]
              )) ? (
              <Product key={i} product={product} id={id.toString() + i} />
            ) : (
              <></>
            );
          })}
        </div>
        <svg
          width="10"
          height="33"
          viewBox="0 0 12 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.arrow}
          onClick={scroll}
        >
          <path
            d="M1 1L11 17.5L1 34"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};
export default ProductList;
