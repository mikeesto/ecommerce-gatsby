import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Textlockup from "../components/textlockup"
import SalesBoxes from "../components/salesboxes"
import Shoe from "../images/shoe.jpg"
import Bag from "../images/bag.jpg"
import FeaturedProducts from "../components/featuredproducts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Textlockup
      image={Shoe}
      newText="New"
      saleText="Men Shoes"
      collectionText="Collection"
      detailsText="Street Style New Fashion"
    />
    <SalesBoxes />
    <Textlockup
      image={Bag}
      newText="50%"
      saleText="Storewide Sale"
      collectionText="Summer"
      detailsText="All accessories"
    />
    <FeaturedProducts />
  </Layout>
)

export default IndexPage
