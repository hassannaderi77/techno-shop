import { useRouter } from "next/router";
import db from "@/data/db.json";
import { useEffect, useState } from "react";
import ProductCard from "@/components/productCard/ProductCard";
import styles from "@/styles/ProductsByCategory.module.css";

function ProductsByCategory() {
  const { category } = useRouter().query;
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    if (!category) return;

    if (searchKey) {
      const searchProducts =
        db[category]?.filter((product) => product.text.includes(searchKey)) ||
        [];
      setProducts(searchProducts);
    } else {
      setProducts(db[category] || []);
    }
  }, [searchKey, category]);

  return (
    <div className="container">
      <div className={`${styles.searchContainer} section`}>
        <input
          onChange={(e) => setSearchKey(e.target.value)}
          type="text"
          placeholder="دنبال چی میگردی؟"
          className={styles.search}
          value={searchKey}
        />
      </div>

      <div className="section">
        <h1>محصولات ({category})</h1>
        <div className="row">
          {Array.isArray(products) &&
            products.map((product) => (
              <div className="col" key={product.id}>
                <ProductCard {...product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default ProductsByCategory;
