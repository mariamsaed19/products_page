import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import styles from "../../styles/Filter.module.scss";

const Filter = ({ cities, states, brands, productFilter, setProduct, statesFilter, setStates,citiesFilter, setCities }) => {
  const [selected, setSelected] = useState([]);
  const titles = { selectSomeItems: "Products" };
  const brands_options = brands.map((brand) => {
    return { label: brand, value: brand };
  });
  const states_options = states.map((state) => {
    return { label: state, value: state };
  });
  const cities_options = cities.map((city) => {
    return { label: city, value: city };
  });
  return (
    <>
      <h4 className={styles.title}>Filter</h4>
      <img src="seperator160.svg" className={styles.line} alt="line" />
      <div className={styles.items}>
        <MultiSelect
          options={brands_options}
          value={productFilter}
          onChange={setProduct}
          filterOptions={filterOptions}
          overrideStrings={{ selectSomeItems: "Products" }}
          labelledBy="Products"
        />
        <MultiSelect
          options={states_options}
          value={statesFilter}
          onChange={setStates}
          filterOptions={filterOptions}
          overrideStrings={{ selectSomeItems: "State" }}
          labelledBy="State"
        />
        <MultiSelect
          options={cities_options}
          value={citiesFilter}
          onChange={setCities}
          filterOptions={filterOptions}
          overrideStrings={{ selectSomeItems: "City" }}
          labelledBy="City"
        />
      </div>
    </>
  );
};

export default Filter;

export function filterOptions(options, filter) {
  if (!filter) {
    return options;
  }
  const re = new RegExp(filter, "i");
  return options.filter(({ value }) => value && value.match(re));
}
