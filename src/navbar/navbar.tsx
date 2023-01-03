import React from "react";
import Languages from "../languages/Languages";
import Link from "../link/Link";
import logo from "./logo.svg";
import styles from "./navbar.module.scss";

const languages = ["es", "en"];

const navigation = [
  {
    name: "Harry Potter",
    link: "/harry-potter",
  },
  {
    name: "Rick and morty",
    link: "/rick-and-morty",
  },
];

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className={styles.navbar}>
      <div onClick={() => (window.location.href = "/")}>
        <img src={logo} alt="logo" />
      </div>

      <ul>
        {navigation.map((item) => (
          <Link key={item.name} to={item.link}>
            {item.name}
          </Link>
        ))}
      </ul>

      <ul>
        {languages.map((lng) => (
          <Languages lng={lng} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
