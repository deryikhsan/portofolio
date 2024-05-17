import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <p style={{ color: "white" }}>Dery Ikhsan</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-5">
            <div className="social-icon">
              <a href="https://www.smkn2-padangpanjang.sch.id/" target="_blank">
                <img src={navIcon2} alt="" style={{ color: "white" }} />
              </a>
              <a
                href="https://www.instagram.com/drys4nn?igsh=Zm9mYm00azRxcmJ2"
                target="_blank"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p> {new Date().getFullYear()} &copy; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
