# Gatsby E-Commerce

## [Demo Store](https://ecommerce-gatsby.netlify.com/)

## 🧐

This is a rewrite of [Sarah Drasner's Ecommerce Store with Netlify Functions and Stripe](https://github.com/sdras/ecommerce-netlify) from 2019. Sarah's store was built with Nuxt. This version is written in Gatsby. Check out [Sarah's blog post](https://css-tricks.com/lets-build-a-jamstack-e-commerce-store-with-netlify-functions/) on building the site.

In January 2021, I updated this project's dependencies and also made a few small changes & bug fixes.

## 🤓

Gatsby is commonly used as a static site generator. However, in this project the `/product` route is generated dynamically using the Gatsby createPage API. To stop the client side router serving the 404 page on `/product` requests, there is a [server redirect](.netlify.toml) and a [rather obscure conditional check](./src/pages/404.js). 

If I was to rewrite this project today I would architect it quite differently and take advantage of Gatsby's new [File System Router API](https://www.gatsbyjs.com/docs/reference/routing/creating-routes/#using-the-file-system-route-api).

### 🏗

Clone repository

Create an `.env` file in the root directory. This file needs to contain your Stripe secret key:

`STRIPE_SECRET_KEY=XXXXX`

- `npm install`
- `npm start` to develop
- `npm run build` to build
- `npm run serve` to serve built site

To test the Netlify function, run the project with the [Netlify CLI](https://docs.netlify.com/cli/get-started/) instead.