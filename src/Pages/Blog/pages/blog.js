import { Fragment } from 'react'
import { Row, Col } from 'antd'
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti'

const BlogPages = () => {
    return (
        <Fragment>
            <div className="pt-5 pb-5">
                <Row>
                    <Col sm={15}>
                        <div style={{ width: 'auto' }} className="p-3">
                            <img src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/02/063-Refactory-HDYBAP017.jpg?fit=768%2C402&ssl=1" style={{ maxWidth: '100%', borderRadius: 5 }} />
                        </div>
                        <div className="p-3">
                            <label style={{ color: '#E48800', fontWeight: 400 }}>GROWTH & CULTURE</label> <br />
                            <label style={{ fontSize: 30 }}>How Did You Become A Programmer?</label>
                            <p style={{ fontSize: 18 }}>Post Categories Blog Engineering Profile Tutorial Tips & Trick Growth & Culture Newsroom Promo X Case Studies Training PT Gigaming Intermedia Solusindo BY Isna | July 16, 2020</p>
                            <label style={{ fontSize: 15, fontWeight: 600, color: '#E48800' }}>Baca Artikel</label>
                        </div>
                    </Col>
                    <Col sm={9}>
                        <div className="d-flex justify-content-center">
                            <label style={{ fontSize: 15, color: '#E48800' }}>HUBUNGKAN DENGAN KAMI</label>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h4 style={{ fontWeight: 400 }}>Ikuti refactory</h4>
                        </div>
                        <div className="d-flex align-items-center pl-5">
                            <TiSocialLinkedinCircular style={{ fontSize: 50, color: '#4E8BA1' }} /> <span style={{ fontSize: 16 }}>Linkedin</span>
                        </div>
                        <div className="d-flex align-items-center pl-5">
                            <TiSocialFacebookCircular style={{ fontSize: 50, color: '#4E8BA1' }} /> <span style={{ fontSize: 16 }}>Facebook</span>
                        </div>
                        <div className="d-flex align-items-center pl-5">
                            <TiSocialInstagram style={{ fontSize: 50, color: '#4E8BA1' }} /> <span style={{ fontSize: 16 }}>Instagram</span>
                        </div>
                        <div className="d-flex align-items-center pl-5">
                            <TiSocialYoutube style={{ fontSize: 50, color: '#4E8BA1' }} /> <span style={{ fontSize: 16 }}>Youtube</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default BlogPages