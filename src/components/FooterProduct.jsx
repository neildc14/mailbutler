import React from "react";
import FoooterNav from "./FooterNav";
import { products } from "../data/footerDetails";

function FooterProduct() {
  return <FoooterNav heading="Product" links={products} />;
}

export default FooterProduct;
