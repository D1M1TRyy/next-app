import React from "react";
import styles from './navbar.module.css'

function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Portfolio",
    },
    {
      id: 3,
      title: "Blog",
    },
    {
      id: 4,
      title: "About",
    },
    {
      id: 5,
      title: "Contact",
    },
    {
      id: 6,
      title: "Dashboard",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h2>FASHIONshop</h2>
      </div>
      <div className={styles.links}>
        {links.map((link) => (
          <div className={styles.nav}>{link.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;