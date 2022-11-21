import React from "react";
import FoooterNav from "./FooterNav";
import { company } from "../data/footerDetails";
function FooterCompany() {
  return <FoooterNav heading="Company" links={company} />;
}

export default FooterCompany;
