import styles from './ProductCard.module.css'
function ProductCard({image , text , price}) {
   return (
      <div className={styles.cardContainer}>
         <div className={styles.cardHeader}>
            <img src={image} />
         </div>
         <div className={styles.cardMiddle}>
            <p>
               {text}
            </p>
         </div>
         <div className={styles.cardFooter}>
            <button>افزودن به سبد خرید</button>
            <p>{price.toLocaleString(<div className="col">
               <ProductCard />
            </div>)}</p>
         </div>
      </div>
   )
}

export default ProductCard