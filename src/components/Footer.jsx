import React from "react";
export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer>
      <p>Copyright {year} </p>
    </footer>
  );
}
