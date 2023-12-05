import React from "react";
import styles from "./navbar.module.css";

type NavbarType = {
  title: string;
  isLoading: boolean;
};

const Navbar: React.FC<NavbarType> = ({ title, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      <div>{title}</div>
      <nav>{isLoading ? <>Spinner</> : <>Component</>}</nav>
    </div>
  );
};

export default Navbar;
