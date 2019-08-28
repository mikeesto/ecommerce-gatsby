import React from "react"
import { store } from "../data/store"
import { Featured } from "./featuredproducts-styles"
import { Link } from "gatsby"
import { Dollar } from "../helpers/currency-filter"

const FeaturedProducts = () => {
  const featuredData = store.slice(0, 3)

  return (
    <Featured>
      <h2>
        <span>Featured Products</span>
      </h2>
      <div className="featureditems">
        {featuredData.map(product => (
          <div className="item" key={product.id}>
            <img src={product.img}></img>
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
