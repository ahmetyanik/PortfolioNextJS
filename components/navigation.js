import Link from "next/link";
import styles from "./navigation.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
function Navigation() {
  return (
    <div className={styles.navigation}>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={styles.navigation}
        variant="neon"
      >
        <Navbar.Brand className={styles.logo} href="/">
          A. Yanık
        </Navbar.Brand>
        <Navbar.Toggle
          className={styles.button}
          aria-controls="responsive-navbar-nav"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className={styles.links} href="/">
              Home
            </Nav.Link>
            <Nav.Link className={styles.links} href="#resume">
              Resume
            </Nav.Link>
            <Nav.Link className={styles.links} target="_blank" href="https://www.betikblog.com/yazarlar/gungorozturk">
              Certificates
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
  );
}

export default Navigation;
