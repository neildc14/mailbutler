import React from "react";
import Perks from "./Perks";
import PerksHilghlights from "./PerksHilghlights";
import { lemione_highlights } from "../data/perksHighlights.js";

function PerksLemione() {
  return (
    <>
      <Perks
        heading="Collaborate with your team in a way more efficient manner"
        caption="Learn More"
        btnSize="md"
        bgColor="white"
        hoverBgColor="#51A387"
        textColor="#51A387"
        hoverTextColor="white"
        btnBorderColor="#51A387"
        btnVariant="outline"
      >
        {lemione_highlights?.map((highlight, i) => (
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

export default PerksLemione;
