import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StoreGrid from "../components/storegrid"
import { FilterProducts } from "../helpers/product-filter"

const Men = () => (
  <Layout>
    <SEO title="Men" />
    <StoreGrid products={FilterProducts("Male")} />
  </Layout>
)

export default Men
