import React from "react";
import Perks from "./Perks";
import PerksHilghlights from "./PerksHilghlights";
import { liviu_highlights } from "../data/perksHighlights.js";

function PerksLiviu() {
  return (
    <>
      <Perks
        heading="See how CEO's, Founders and Freelancers stay productive and organized
        with Mailbutler"
        caption="Try 14 days Free"
        bgColor="#51A387"
        hoverBgColor="green.600"
        btnBorderColor="#51A387"
        btnVariant="solid"
      >
        {liviu_highlights?.map((highlight, i) => (
          <PerksHilghlights
            key={i}
            text={highlight.text}
            highlighted_text={highlight.highlighted_text}
          />
        ))}
      </Perks>
    </>
  );
}

export default PerksLiviu;
