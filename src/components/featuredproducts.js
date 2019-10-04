import React from "react"
import { Link } from "gatsby"
import { Store } from "../data/store"
import { Featured } from "./featuredproducts-styles"
import { Dollar } from "../helpers/currency-filter"

const FeaturedProducts = () => {
  const featuredData = Store.slice(0, 3)

  return (
    <Featured>
      <h2>
        <span>Featured Products</span>
      </h2>
      <div className="featureditems">
        {featuredData.map(product => (
          <div className="item" key={product.id}>
            <img src={product.img} alt=""></img>
            <h3>{product.name}</h3>
            <h4>{Dollar(product.price)}</h4>
            <Link to={`/product/${product.id}`}>
              <button className="multi-item">View Item</button>
            </Link>
          </div>
        ))}
      </div>
    </Featured>
  )
}

export default FeaturedProducts
