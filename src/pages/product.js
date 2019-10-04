import React, { useEffect, useState, useContext } from "react"
import StarRatings from "react-star-ratings"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Store } from "../data/store"
import {
  ItemContain,
  QuantityInput,
  UpdateNumButton,
  Review,
} from "../components/product-styles"
import { Dollar } from "../helpers/currency-filter"
import FeaturedProducts from "../components/featuredproducts"
import { CartContext } from "../context/cart"

const Product = ({ location }) => {
  const [item, updateItem] = useState(Store)
  const [quantity, updateQuantity] = useState(1)
  const [cart, updateCart] = useContext(CartContext)

  useEffect(() => {
    const ID = location.pathname.split("/")[2]
    updateItem(Store.find(el => el.id === ID))
  }, [])

  const addToCart = () => {
    const tempCart = [...cart]
    let itemFound = false

    tempCart.forEach(el => {
      if (el.id === item.id) {
        el.quantity += quantity
        itemFound = true
      }
    })

    if (!itemFound) {
      // Item doesn't exist in the cart yet, so add it
      const tempItem = item
      tempItem.quantity = quantity
      tempCart.push(tempItem)
    }
    updateCart(tempCart)
  }

  return (
    <Layout>
      <SEO title="Product" />
      <ItemContain>
        <section className="img">
          <img src={item.img} alt=""></img>
        </section>
        <section className="product-info">
          <h1>{item.name}</h1>
          <StarRatings
            rating={item.starrating}
            numberOfStars={5}
            starDimension="18px"
            starSpacing="0"
          ></StarRatings>
          <h4 className="price">{Dollar(item.price)}</h4>
          <p>{item.description}</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            velit dolores repudiandae animi quidem, eveniet quod dolor facilis
            dicta eligendi ullam error. Assumenda in fugiat natus enim similique
            nam itaque.
          </p>
          <p style={{ display: "flex" }}>
            <UpdateNumButton onClick={() => updateQuantity(quantity - 1)}>
              -
            </UpdateNumButton>
            <QuantityInput
              type="number"
              value={quantity}
              onChange={event => updateQuantity(event.target.value)}
            />
            <UpdateNumButton onClick={() => updateQuantity(quantity + 1)}>
              +
            </UpdateNumButton>
          </p>
          <p>
            Available in additional colors:
            <strong>
              <span style={{ color: item.color }}> {item.color}</span>
            </strong>
          </p>
          <p>
            <button className="button purchase" onClick={addToCart}>
              Add to Cart
            </button>
          </p>
        </section>
      </ItemContain>
      <hr />
      <Review>
        <h2>Reviews</h2>
        <StarRatings
          rating={item.starrating}
          numberOfStars={5}
          starDimension="18px"
          starSpacing="0"
        ></StarRatings>
        <p>{item.review}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto
          placeat consequatur voluptas sit mollitia ratione autem, atque sequi
          odio laborum, recusandae quia distinctio voluptatibus sint, quae
          aliquid possimus exercitationem.
        </p>
      </Review>
      <FeaturedProducts />
    </Layout>
  )
}

export default Product
