import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const alinks = links.map((link)=> {
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>{alinks}</nav>;
}

export default NavBar;
