import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import { Dollar } from "../helpers/currency-filter"
import StarRatings from "react-star-ratings"
import { StyledGroup, Item, Aside } from "./storegrid-styles"

const StoreGrid = ({ products }) => {
  const min = 0
  const max = 200
  const [filteredProducts, updateFilteredProducts] = useState(products)
  const [priceRange, updatePriceRange] = useState(max)

  const updateProducts = newPrice => {
    updatePriceRange(newPrice)
    updateFilteredProducts(products.filter(item => item.price < newPrice))
  }

  return (
    <div className="storegrid">
      <StyledGroup className="content">
        {filteredProducts.map(item => (
          <CSSTransition key={item.id} timeout={100} classNames="items">
            <Item>
              <div className="img-contain">
                <a href={`product/${item.id}`}>
                  <img src={item.img} alt=""></img>
                </a>
              </div>
              <StarRatings
                rating={item.starrating}
                numberOfStars={5}
                starDimension="18px"
                starSpacing="0"
              ></StarRatings>
              <h3>{item.name}</h3>
              <h4 className="price">{Dollar(item.price)}</h4>
              <a href={`product/${item.id}`}>
                <button className="multi-item">View Item ></button>
              </a>
            </Item>
          </CSSTransition>
        ))}
      </StyledGroup>
      <Aside>
        <h3>Special Sale</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero
          iusto nemo laboriosam perferendis voluptas ullam officiis, quibusdam
          quas quam eveniet est fugit delectus corporis incidunt nam esse
          suscipit itaque?
        </p>
        <h3>Filter by Price:</h3>
        <p style={{ marginTop: "5px" }}>
          Max Price <strong>${priceRange}</strong>
        </p>
        <input
          className="slider"
          type="range"
          min={min}
          max={max}
          step={0.1}
          value={priceRange}
          onChange={event => updateProducts(event.target.value)}
        ></input>
        <span className="min">${min}</span>
        <span className="max">${max}</span>
      </Aside>
    </div>
  )
}

export default StoreGrid
