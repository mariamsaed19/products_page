import styles from "../../styles/Product.module.scss";

const Product = ({ product ,id}) => {
  const prodName = product["product_name"];
  const brandName = product["brand_name"];
  const prodPrice = product["price"];
  const loc = product["address"]["state"] + ", " + product["address"]["city"];
  const des = product["discription"];
  let date = new Date(product["date"]);
  date = date.getDay() + ":" + date.getMonth() + ":" + date.getFullYear();
  return (
    <div  className={styles.prodCard} id={id}>
      <div className={styles.prodImg}>
        <img src={product["image"]} alt="product" />{" "}
      </div>
      <div className={styles.prodName} title={prodName}>
        {prodName}
      </div>
      <div className={styles.brandName} title={brandName}>
        {brandName}
      </div>
      <div className={styles.prodPrice}>{prodPrice}</div>
      <div className={styles.loc} title={loc}>
        {loc}
      </div>
      <div className={styles.date}>{date}</div>
      <div className={styles.des} title={des}>
        {des}
      </div>
    </div>
  );
};

export default Product;
