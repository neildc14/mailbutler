import React from "react";
import { SocialIcon } from "react-social-icons";

function SocialMediaButton({ url }) {
  return (
    <SocialIcon url={url} bgColor="#51A387" style={{ height: 40, width: 40 }} />
  );
}

export default SocialMediaButton;
