import React from "react";
import styles from "./navbar.module.css";

type NavbarType = {
  title: string;
  isUserActive: boolean;
};

const Navbar: React.FC<NavbarType> = ({ title, isUserActive }) => {
  return (
    <div className={styles.wrapper}>
      <div>{title}</div>
      <nav>{isUserActive ? <>ACTIVE</> : <>NOT ACTIVE</>}</nav>
    </div>
  );
};

export default Navbar;
