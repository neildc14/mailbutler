import React from "react";
import { Link } from "@chakra-ui/react";

function LinkTo({ link_name, fontWeight, _hover, aria_label }) {
  return (
    <Link
      href="#"
      fontWeight={fontWeight}
      _hover={_hover}
      aria-label={aria_label}
      transition="all 0.5s ease-in-out"
    >
      {link_name}
    </Link>
  );
}

export default LinkTo;
