import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserCircle } from "react-icons/fa";

import logo from "../../assets/logos/logo.png";
import styles from "./homeNavbar.module.css";
import { Col, Row } from "react-bootstrap";

const HomeNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.container}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.toggler} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#" className="text-white">
              Domains
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Courses
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Internship
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Magazine
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Campus
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Hiring
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Industry
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Team
            </Nav.Link>
            <NavDropdown title={<FaUserCircle className={styles.userIcon} />} id="collasible-nav-dropdown" align="end">
              <NavDropdown.Item href="#">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="#">Sign Up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Row className={styles.subNavbar}>
          <Col className={styles.subn}>
            <img
              src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/SubNavbarIcons/HomeOutlinedIcon.svg"
              style={{ width: "23px" }}
              alt=""
            />
          </Col>
          <Col className={styles.subn}>
            <img
              src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/SubNavbarIcons/WindowOutlinedIcon.svg"
              alt=""
              style={{ width: "23px" }}
            />
          </Col>
          <Col className={styles.subn}>
            <img
              src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/SubNavbarIcons/PlayCircleOutlineIcon.svg"
              alt=""
              style={{ width: "23px" }}
            />
          </Col>
          <Col className={styles.subn}>
            <img
              src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/SubNavbarIcons/CalendarTodayOutlinedIcon.png"
              alt=""
              style={{ width: "25px" }}
            />
          </Col>
          <Col className={styles.subn}>
            <img
              src="	https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/SubNavbarIcons/WorkOutlineOutlinedIcon.svg"
              alt=""
              style={{ width: "23px" }}
            />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
