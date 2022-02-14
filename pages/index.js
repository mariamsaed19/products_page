import React, { useState } from "react";
import Filter from "../components/filter/Filter";
import ProductList from "../components/product/ProductList";
import styles from "../styles/Home.module.scss";

export default function Home({ products }) {
  const [productFilter, setProductFilter] = useState([]);
  const [citiesFilter, setCitiesFilter] = useState([]);
  const [statesFilter, setStatesFilter] = useState([]);
  let grouped = [],
    cities = [],
    states = [],
    brands = [];
  console.log(citiesFilter);
  console.log(
    productFilter,
    productFilter.length > 0 ? productFilter[0]["value"] : 0
  );
  console.log(statesFilter);
  //group products and get cities,states, products
  products.forEach(function (a) {
    if (
      productFilter.length === 0 ||
      productFilter.some((e) => e.label === a["brand_name"])
    ) {
      this[a["brand_name"]] || grouped.push((this[a["brand_name"]] = []));
      this[a["brand_name"]].push(a);
      if (
        statesFilter.length === 0 ||
        statesFilter.some((e) => e.label === a["address"]["state"])
      ) {
        if (cities.indexOf(a["address"]["city"]) === -1) {
          cities.push(a["address"]["city"]);
        }
      }
      if (states.indexOf(a["address"]["state"]) === -1) {
        states.push(a["address"]["state"]);
      }
    }
    if (brands.indexOf(a["brand_name"]) === -1) {
      brands.push(a["brand_name"]);
    }
  }, Object.create(null));

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Filter
          cities={cities}
          states={states}
          brands={brands}
          productFilter={productFilter}
          setProduct={setProductFilter}
          citiesFilter={citiesFilter}
          setCities={setCitiesFilter}
          statesFilter={statesFilter}
          setStates={setStatesFilter}
        />
      </div>
      <div className={styles.main}>
        <h1 className={styles.pageTitle}>Edvora</h1>
        <h2 className={styles.pageSubtitle}>Products</h2>
        {grouped.map((product, i) => (
          <ProductList
            key={i}
            products={product}
            id={i}
            citiesFilter={citiesFilter}
            statesFilter={statesFilter}
          />
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://assessment-edvora.herokuapp.com/");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
