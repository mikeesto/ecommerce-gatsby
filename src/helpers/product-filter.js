import { Store } from "../data/store"

export const FilterProducts = gender =>
  Store.filter(item => item.gender === gender)
