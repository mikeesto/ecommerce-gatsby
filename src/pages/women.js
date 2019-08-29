import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StoreGrid from "../components/storegrid"
import { FilterProducts } from "../helpers/product-filter"

const Women = () => (
  <Layout>
    <SEO title="Women" />
    <StoreGrid products={FilterProducts("Female")} />
  </Layout>
)

export default Women
