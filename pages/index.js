import ProductCard from "@/components/productCard/ProductCard"
import db from "../data/db.json"

export default function Home() {
   return (
      <div className="container">
         <div className="section">
            <h1>لپ تاپ (laptop)</h1>
            <div className="row">
               {db.laptops.slice(0, 4).map((laptop) => (
                  <div key={laptop.id} className="col">
                     <ProductCard {...laptop} />
                  </div>
               ))}
            </div>

            <h1>موبایل (mobile)</h1>
            <div className="row">
               {db.mobiles.slice(0, 4).map((mobile) => (
                  <div key={mobile.id} className="col">
                     <ProductCard {...mobile} />
                  </div>
               ))}
            </div>

            <h1>دوربین (camera)</h1>
            <div className="row">
               {db.cameras.slice(0, 4).map((camera) => (
                  <div key={camera.id} className="col">
                     <ProductCard {...camera} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}