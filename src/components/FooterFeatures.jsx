import React from "react";
import { features } from "../data/footerDetails";
import FoooterNav from "./FooterNav";

function FooterFeatures() {
  return <FoooterNav heading="Features" links={features} />;
}

export default FooterFeatures;
