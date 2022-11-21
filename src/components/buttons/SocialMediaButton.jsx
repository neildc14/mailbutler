import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";

function SocialMediaButton({ url }) {
  const [hover, setHover] = useState(false);

  const hoverLink = () => {
    setHover(!hover);
  };

  let bg_color = "#51A387";

  if (hover) {
    bg_color = "#276749";
  }
  return (
    <SocialIcon
      url={url}
      bgColor={bg_color}
      style={{ height: 40, width: 40 }}
      onMouseEnter={hoverLink}
      onMouseLeave={hoverLink}
    />
  );
}

export default SocialMediaButton;
