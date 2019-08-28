import React from "react"
import { Boxes } from "./salesboxes-styles"
import iconCal from "../images/icon-cal.svg"
import iconPackage from "../images/icon-package.svg"
import iconService from "../images/icon-service.svg"

const data = [
  {
    icon: iconPackage,
    heading: "Free Shipping Globally",
    details: "Delivery in 4 Days",
  },
  {
    icon: iconCal,
    heading: "24/7 Customer Service",
    details: "Call us any time",
  },
  {
    icon: iconService,
    heading: "Easy Online Returns",
    details: "Send Within 30 Days",
  },
]

const SalesBoxes = () => {
  return (
    <Boxes>
      {data.map((box, i) => (
        <div className={`box${i + 1}`} key={box.heading}>
          <img src={box.icon} alt="service icon"></img>
          <h4>{box.heading}</h4>
          <p>{box.details}</p>
        </div>
      ))}
    </Boxes>
  )
}

export default SalesBoxes
