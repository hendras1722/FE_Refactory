import { Fragment } from 'react'
import { Row, Col, Divider } from 'antd'
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import './style.css'

const Footer = (props) => {
    const ContactList = [{
        name: 'Dewita',
        nomer: "085725827222"
    }, {
        name: 'Septin',
        nomer: "087820800206"
    }]
    const numberWithSpaces = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const run = () => {
        switch (props.name) {
            case 'list':
                return (
                    <Fragment>
                        <div style={{ background: "#0C162A", paddingBottom: 20, paddingTop: 20 }} className="footernya">
                            <div className="container d-flex justify-content-between" >
                                <label>&#169; 2020 Refactory - All Rights Reserved - Term of Services/Privacy Policy</label>
                                <label>Terms of Services Privacy Policy</label>
                            </div>
                        </div>
                    </Fragment>
                )
            default:
                return (
                    <Fragment>
                        <div style={{ background: "#0C162A", paddingBottom: 20, paddingTop: 20 }}>
                            <div className="container d-flex justify-content-center" >
                                <br />
                                <br />
                                <Row>
                                    <Col sm={6}>
                                        <div style={{ fontWeight: 700, color: '#FFF' }}>
                                            Site Map
                        </div>
                                        <br />
                                        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                                            <li>Home</li>
                                            <li>Bootcamp</li>
                                            <li>Software Development</li>
                                            <li>Courses</li>
                                            <li>Custom Trainings</li>
                                            <li>Blog</li>
                                        </ul>
                                    </Col>
                                    <Col sm={5}>
                                        <div style={{ fontWeight: 700, color: '#FFF' }}>
                                            Company
                        </div>
                                        <br />
                                        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                                            <li>About Us</li>
                                            <li>Career <button style={{ background: '#929292', padding: 1, border: "none", borderRadius: 5, fontSize: 12, color: '#000' }}>We're Hiring</button></li>
                                            <li>Press Kit</li>
                                            <li>FAQ</li>
                                        </ul>
                                    </Col>
                                    <Col sm={5}>
                                        <div style={{ fontWeight: 700, color: '#FFF' }}>
                                            Connect
                        </div>
                                        <br />
                                        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                                            <li>Facebook</li>
                                            <li>Instagram</li>
                                            <li>Youtube</li>
                                            <li>LinkedIn</li>
                                        </ul>
                                    </Col>
                                    <Col sm={8}>
                                        <div style={{ fontWeight: 700, color: '#FFF', display: 'flex' }}>
                                            <div style={{ background: '#35B4AE', borderRadius: '100%', width: 30, height: 30 }} className="d-flex justify-content-center align-items-center">
                                                <FaLinkedinIn />
                                            </div>&nbsp;
                                <div style={{ background: '#35B4AE', borderRadius: '100%', width: 30, height: 30 }} className="d-flex justify-content-center align-items-center">
                                                <FaFacebookF />
                                            </div>&nbsp;
                                <div style={{ background: '#35B4AE', borderRadius: '100%', width: 30, height: 30 }} className="d-flex justify-content-center align-items-center">
                                                <FaYoutube />
                                            </div>&nbsp;
                                <div style={{ background: '#35B4AE', borderRadius: '100%', width: 30, height: 30 }} className="d-flex justify-content-center align-items-center">
                                                <FaInstagram />
                                            </div>&nbsp;
                            </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-5 p-0">
                                                <div style={{ fontWeight: 700, color: '#FFF' }}>
                                                    Company Address
                        </div><br />
                                                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                                                    <li>Jln. Palagan Tentara Pelajar
                                                    Km. 9,8
                                                    Ngaglik, Kab. Sleman
DI Yogyakarta 55581</li>
                                                </ul>
                                            </div>
                                            <div className="col-7">
                                                <div style={{ fontWeight: 700, color: '#FFF' }}>
                                                    Contact
                        </div><br />
                                                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                                                    <li>marketing@refactory.id</li>
                                                    <li>+62 8122 8203 381</li>
                                                    {ContactList.length > 0 && ContactList.map((item, index) =>
                                                        <li key={index}>{item.name}: {numberWithSpaces(item.nomer)}</li>
                                                    )}

                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <Divider style={{ height: 0.5, backgroundColor: '#FFF' }} />
                            <div className="container text-white">
                                &#169; 2020 Refactory - All Rights Reserved - Term of Services/Privacy Policy
                </div>
                        </div>
                    </Fragment>
                )
        }
    }

    return run()
}

export default Footer;