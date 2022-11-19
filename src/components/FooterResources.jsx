import React from "react";
import FoooterNav from "./FooterNav";
import { resources } from "../data/footerDetails";

function FooterResources() {
  return <FoooterNav heading="Resources" links={resources} />;
}

export default FooterResources;
