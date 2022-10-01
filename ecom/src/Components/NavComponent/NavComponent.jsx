import React from "react";
import "./NavComponent.css";

const NavComponent = () => {
  const links = [
    { lable: "Home", link: "#" },
    { lable: "Categories", link: "#" },
    { lable: "My Account", link: "#" },
    { lable: "Settings", link: "#" },
    { lable: "Layout", link: "#" },
    { lable: "View Cart", link: "#" },
  ];
  return (
    <div>
      <ul className="menu flex">
        {links &&
          links.length > 0 &&
          links.map((item, i) => {
            return (
              <li key={i}>
                <a href={item.link}>{item.lable}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default NavComponent;
