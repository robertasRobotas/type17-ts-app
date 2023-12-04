import React from "react";
import styles from "./footer.module.css";

type FooterType = {
  copyright: string;
};

const Footer: React.FC<FooterType> = ({ copyright }) => {
  return (
    <div className={styles.wrapper}>
      <>© {copyright}</>
    </div>
  );
};

export default Footer;
