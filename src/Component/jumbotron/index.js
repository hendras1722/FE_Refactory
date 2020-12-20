import { Fragment } from "react"
import { Row, Col, Button } from 'antd'
import './style.css'
import { useHistory } from 'react-router-dom'

const Jumbotron = (props) => {
    const history = useHistory()
    const clickCourse = () => {
        history.push('/dashboard')
    }
    const jumbotronPage = () => {
        switch (props.name) {
            case 'Home':
                return (
                    <Fragment>
                        <Row gutter={24}>
                            <Col span={24}>
                                <div class="jumbotron" style={{ background: 'transparent' }}>
                                    <h5 class="display-4">Empowering <span style={{ color: '#E48800' }}>People</span> <br /> Through Programming</h5>
                                    <p style={{ fontSize: '18px', color: '#FFF' }}>Refactory adalah perusahaan edukasi dan teknologi yang menyediakan <br /> layanan lengkap berupa <span style={{ fontStyle: 'italic' }}>course</span> maupun <span style={{ fontStyle: 'italic' }}>custom training</span> yang <br /> materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis <br />perusahaan Anda.</p>
                                    <Button style={{ background: '#E48800', border: 'none', color: '#FFF', borderRadius: '20px', width: 200 }}>Temukan Solusi Anda</Button> &nbsp; <Button style={{ background: 'transparent', border: '1px solid #E48800', color: '#FFF', borderRadius: '20px', width: 200 }}>Tingkatkan Skill Anda</Button>
                                </div>
                            </Col>
                        </Row>
                    </Fragment>
                )
            case 'courses':
                return (
                    <Fragment>
                        <Row gutter={24}>
                            <Col span={24}>
                                <div class="jumbotron" style={{ background: 'transparent' }}>
                                    <div className="d-flex justify-content-center">
                                        <h5 class="display-4" style={{ textAlign: 'center' }}>Tingkatkan <span style={{ color: '#E48800', fontWeight: 700 }}>skill pemrograman</span><br />kapan pun, dimana pun.</h5>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <p style={{ fontSize: '18px', color: '#FFF', textAlign: 'center' }}>We’re a brand of passionate software engineers and educators <br /> with an engaging curriculum backed by real-world software <br /> projects ready to boost your career.</p>
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-center">
                                        <Button style={{ background: '#E48800', border: 'none', color: '#FFF', borderRadius: '20px', width: 200 }} onClick={clickCourse}>Masuk & Memulai Belajar</Button> &nbsp;  &nbsp; <Button style={{ background: 'transparent', border: '1px solid #E48800', color: '#FFF', borderRadius: '20px', width: 200 }}>Daftar Sekarang</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Fragment>
                )
            case 'costum':
                return (
                    <Fragment>
                        <Row gutter={24}>
                            <Col span={24}>
                                <div class="jumbotron" style={{ background: 'transparent' }}>
                                    <div className="d-flex justify-content-center">
                                        <h5 class="display-4" style={{ textAlign: 'center' }}>Discover <span style={{ color: '#E48800', fontWeight: 700 }}>Our Projects</span></h5>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <p style={{ fontSize: '18px', color: '#FFF', textAlign: 'center' }}>We’ve helped startup founders, leaders of small medium-sized businesses, <br /> and enterprise executives reach their business goals through technology, <br /> Find out how.
</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Fragment>
                )
            default:
                return (
                    <Fragment>
                        <Row gutter={24}>
                            <Col span={24}>
                                <div class="jumbotron" style={{ background: 'transparent' }}>
                                    <div className="d-flex justify-content-center">
                                        <h5 class="display-4" style={{ textAlign: 'center' }}>{props.props.location.state?.detail?.title}</h5>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div style={{ width: 400 }} >
                                            <p style={{ fontSize: '18px', color: '#FFF', textAlign: 'center' }}><span style={{ fontWeight: 700 }}>{props.props.location.state?.detail?.title}</span> adalah {props.props.location.state?.detail?.short_description}</p>
                                            <div className="d-flex justify-content-center">
                                                <Button style={{ background: '#E07C04', border: 'none', color: '#FFF', borderRadius: '20px', width: 200, height: 50, fontSize: 18 }}>Mulai Belajar</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Fragment>
                )
        }
    }
    return jumbotronPage()
}

export default Jumbotron