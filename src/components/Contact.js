import { useState } from "react";
import { Container, Row, Col, Toast } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import foto from "../assets/img/profil.jpg";

export const Contact = () => {
  const containerStyle = {
    display: "inline-block",
    backgroundColor: "#000", // Warna latar belakang
    padding: "20%", // Padding sekitar gambar
    borderRadius: "1000px", // Sudut membulat untuk latar belakang
  };

  const imgStyle = {
    borderRadius: "50%",
    width: "600px", // Sesuaikan ukuran sesuai kebutuhan
    height: "600px", // Sesuaikan ukuran sesuai kebutuhan
    objectFit: "cover", // Untuk memastikan gambar tetap proporsional
  };

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(
      "Terima kasih atas partisipasi Anda! Kami akan segera menindaklanjuti permintaan Anda."
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.location.href = "/";

    // e.preventDefault();
    // setButtonText("Sending...");
    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formDetails),
    // });
    // setButtonText("Send");
    // let result = await response.json();
    // setFormDetails(formInitialDetails);
    // if (result.code == 200) {
    //   setStatus({ succes: true, message: "Message sent successfully" });
    // } else {
    //   setStatus({
    //     succes: false,
    //     message: "Something went wrong, please try again later.",
    //   });
    // }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <Row>
              <Col md={6}>
                <span style={{ fontSize: "24px", color: "black" }}>
                  Place and Date of Birth
                </span>
                <br />
                <p>Padang Panjang, Sumatera Barat</p>
                <p>12 - June 2006</p>
              </Col>
              <Col md={6}>
                <span style={{ fontSize: "24px", color: "black" }}>School</span>
                <p>SMKN 2, Kota Padang Panjang, Sumatera Barat</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <span style={{ fontSize: "24px", color: "black" }}>
                  Phone Number
                </span>
                <p>(+62) 82283801972</p>
              </Col>
              <Col md={6}>
                <span style={{ fontSize: "24px", color: "black" }}>
                  My Location
                </span>
                <p>Kampung Manggis, Kota Padang Panjang, Sumatera Barat</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <span style={{ fontSize: "24px", color: "black" }}>
                  Email Addres
                </span>
                <p>deryihksan434@gmail.com </p>
              </Col>
              <Col md={6}>
                <span style={{ fontSize: "24px", color: "black" }}>NISN</span>
                <p>2202010</p>
              </Col>
            </Row>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div style={containerStyle}>
                  <img
                    style={imgStyle}
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                    src={foto}
                    alt="Contact Us"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          <Col size={12} md={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lasttName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
