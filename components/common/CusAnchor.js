import React from "react";
import Link from "next/link";

const CusAnchor = ({ text, href }) => {
  return (
    <Link href={href}>
      <a style={{ cursor: "pointer" }}>{text}</a>
    </Link>
  );
};

export default CusAnchor;
