import React from "react";
import { SocialIcon } from "react-social-icons";

function FooterLogo({ url }) {
  return (
    <SocialIcon
      url={url}
      bgColor="#000000"
      fgColor="#ffffff"
      style={{ height: 25, width: 25 }}
      target="_blank"
    />
  );
}

export default FooterLogo;
