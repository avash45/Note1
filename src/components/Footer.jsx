import React from "react";

let datee = new Date();
let currentDate = datee.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ {currentDate}</p>
    </footer>
  );
}

export default Footer;
