import { Fragment } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Row, Col, Button } from 'antd'
import './style.css'

const Info = (props) => {
    const infoPages = () => {
        switch (props.name) {
            case 'Home':
                return (
                    <Fragment>
                        <Row >
                            <Col sm={12} className="d-flex justify-content-center">
                                <div>
                                    <div className="logo d-flex justify-content-center">
                                        <img alt="logo" src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/material_approval.png?fit=50%2C48&ssl=1" />
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-center">
                                        <h4 style={{ fontWeight: 700 }}>Memperkuat Tim <span style={{ fontStyle: 'italic' }}>Engineer</span> Anda</h4>
                                    </div>
                                    <br />
                                    <div>
                                        <p style={{ fontSize: '15px', textAlign: 'center' }}>Bisnis di jaman modern membutuhkan <br /> keterampilan pengembangan terbaik untuk meningkatkan skala <br /> produk. Kami dapat mempersiapkan course dan juga <br /> dapat menyediakan tim yang menangani kebutuhan <br /> digital Anda.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} className="d-flex justify-content-center">
                                <div>
                                    <div className="logo d-flex justify-content-center">
                                        <img alt="logo" src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/01/material_bolt.png?fit=28%2C48&ssl=1" />
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-center">
                                        <h4 style={{ fontWeight: 700 }}>Wujudkan <span style={{ fontStyle: "italic" }}>Software</span> Impian Anda</h4>
                                    </div>
                                    <br />
                                    <div>
                                        <p style={{ fontSize: '15px', textAlign: 'center' }}>Kami adalah perusahaan One-Stop IT Solution untuk <br /> proyek Anda, membantu di setiap tahap mulai dari <br /> menyusun ide, melalui desain dan pengembangan <br /> aplikasi seluler, situs web dan aplikasi desktop, hingga <br />peluncuran produk.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Fragment>
                )
            case 'courses':
                return (
                    <Fragment>
                        <Row >
                            <Col sm={12} className="pl-5">
                                <div>
                                    <label style={{ fontSize: 30 }}>Bagaimana Refactory<br />Course membantu <br /><span style={{ color: '#E48800', fontWeight: 400 }}>meningkatkan skill</span><br />anda.</label>
                                </div>
                                <br />
                                <br />
                                <div>
                                    <Button style={{ background: '#E48800', border: 'none', color: '#FFF', borderRadius: '20px', width: 200 }}>Pelajari Lebih</Button>
                                </div>
                            </Col>
                            <Col sm={12} className="d-flex justify-content-center">
                                <div>
                                    <img alt="logo" src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame.png?w=839&ssl=1" style={{ width: 500 }} />
                                </div>
                            </Col>
                        </Row>
                    </Fragment>
                )
            case 'costum':
                return (
                    <Fragment>
                        <Row >
                            <Col sm={8} className="pl-5">
                                <div className="p-3 cards">
                                    <div className="d-flex justify-content-center">
                                        <img alt="logo" src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/material_approval.png?fit=50%2C48&ssl=1" />
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-center">
                                        <h3>Mobile Application</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={8} className="pl-5">
                                <div className="p-3 cards">
                                    <div className="d-flex justify-content-center">
                                        <img alt="logo" src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/01/material_bolt.png?resize=28%2C48&ssl=1" />
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-center">
                                        <h3>Custom Web App</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={8} className="pl-5">
                                <div className="p-3 cards">
                                    <div className="d-flex justify-content-center">
                                        <img alt="logo" src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/01/palette.png?resize=48%2C48&ssl=1" />
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-center">
                                        <h3 style={{ textAlign: 'center' }}>Maintenance Support<br /> Service</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row >
                            <Col sm={8} className="pl-5">
                                <div className="p-3 cards">
                                    <div className="d-flex justify-content-center">
                                        <img alt="logo" src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/material_approval.png?fit=50%2C48&ssl=1" />
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-center">
                                        <h3 style={{ textAlign: 'center' }}>Quality & Assurance<br /> Service</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={8} className="pl-5">
                                <div className="p-3 cards">
                                    <div className="d-flex justify-content-center">
                                        <img alt="logo" src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/01/material_bolt.png?resize=28%2C48&ssl=1" />
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-center">
                                        <h3>Manages Infrastructure</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={8} className="pl-5">
                                <div className="p-3 cards">
                                    <div className="d-flex justify-content-center">
                                        <img alt="logo" src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/01/palette.png?resize=48%2C48&ssl=1" />
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-center">
                                        <h3 style={{ textAlign: 'center' }}>Other Digital Services</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Fragment>
                )
            case 'case':
                return (
                    <Fragment>
                        <div className="container mb-5">
                            <Row >
                                <Col sm={12} className="d-flex justify-content-center">
                                    <div className="p-5">
                                        <label style={{ fontSize: 20, color: '#E48800' }}>TRAINING UNIVERSITAS TERBUKA JAKARTA</label>
                                        <h3>Training Untuk Pemutakhiran Skill Para Engineer</h3>
                                        <br />
                                        <p style={{ fontSize: 20, color: '#7A808B' }}>Memberikan training singkat tentang React.js guna menyesuaikan migrasi serentak yang dilakukan branch perusahaan di luar negeri.</p>
                                        <br />
                                        <Button style={{ background: '#E48800', border: 'none', color: '#FFF', borderRadius: '20px', width: 200 }}>Baca Case Study</Button>
                                    </div>
                                </Col>
                                <Col sm={12} className="d-flex justify-content-center">
                                    <div className="p-5">
                                        <div className="logo d-flex justify-content-center">
                                            <img alt="logo" src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/01/DSCF6289-scaled.jpg?resize=1024%2C673&ssl=1" style={{ width: 500 }} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <br />
                        <div style={{ background: '#EDF2F7' }}>
                            <div className="container mb-5">
                                <Row >
                                    <Col sm={12} className="d-flex justify-content-center">
                                        <div className="p-5">
                                            <div className="logo d-flex justify-content-center">
                                                <img alt="logo" src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/01/DSCF6289-scaled.jpg?resize=1024%2C673&ssl=1" style={{ width: 500 }} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={12} className="d-flex justify-content-center">
                                        <div className="p-5">
                                            <label style={{ fontSize: 20, color: '#E48800' }}>TRAINING GOJEK SPOTS</label>
                                            <h3>Training Gojek “Pelatihan Aplikasi Go Spots”</h3>
                                            <br />
                                            <p style={{ fontSize: 20, color: '#7A808B' }}>Melakukan Pelatihan untuk percepatan Transformasi dari engineer Gojek yang memiliki basic skill C++ menjadi Mobile App Engineer dengan menggunakan Kotlin dan Clean Architecture.</p>
                                            <br />
                                            <Button style={{ background: '#E48800', border: 'none', color: '#FFF', borderRadius: '20px', width: 200 }}>Baca Case Study</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <br />
                        <div className="container mb-5">
                            <Row >
                                <Col sm={12} className="d-flex justify-content-center">
                                    <div className="p-5">
                                        <label style={{ fontSize: 20, color: '#E48800' }}>TRAINING MANDIRI, TBK</label>
                                        <h3>Meningkatkan Kemampuan Engineer yang Bekerja di Dunia Perbankan dalam Pengembangan Aplikasi​ yang mereka butuhkan</h3>
                                        <br />
                                        <p style={{ fontSize: 20, color: '#7A808B' }}>Refactory memberikan pelatihan Node.js dan JavaScript untuk mendukung pembuatan aplikasi melalui peningkatan skill para engineer.</p>
                                        <br />
                                        <Button style={{ background: '#E48800', border: 'none', color: '#FFF', borderRadius: '20px', width: 200 }}>Baca Case Study</Button>
                                    </div>
                                </Col>
                                <Col sm={12} className="d-flex justify-content-center">
                                    <div className="p-5">
                                        <div className="logo d-flex justify-content-center">
                                            <img alt="logo" src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/01/DSCF6289-scaled.jpg?resize=1024%2C673&ssl=1" style={{ width: 500 }} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button style={{ background: 'transparent', border: '1px solid #E48800', color: '#E48800', borderRadius: '20px', width: 200 }}>Load More <ArrowRightOutlined /></Button>
                        </div>
                    </Fragment >
                )
            default:
                break;
        }
    }

    return infoPages()
}

export default Info