import { Fragment, useEffect, useState } from 'react'
import Navbar from '../../Component/Navbar'
import Jumbotron from '../../Component/jumbotron'
import './style.css'
import { Row, Col } from 'antd'
import axios from 'axios'
import Info from '../../Component/info'
import { ArrowRightOutlined } from '@ant-design/icons'
import Footer from '../../Component/footer'
import { useHistory } from 'react-router-dom'

const Home = (props) => {
    const [getPartnerList, setGetPatnerList] = useState([])
    const [getASSEEN, setASSEEN] = useState([])
    const history = useHistory()
    const getPartner = async () => {
        const { data } = await axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/partner.json')
        setGetPatnerList(data.data)
    }
    const getAsSeenOn = async () => {
        const { data } = await axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/seen_on.json')
        setASSEEN(data.data)
    }
    useEffect(() => {
        getPartner()
        getAsSeenOn()
    }, [])
    return (
        <Fragment>
            <div className="first">
                <div className="cover">
                    <div className="bg"></div>
                    <Row gutter={24}>
                        <Col span={24} >
                            <Navbar />
                            <div className="container pl-5 pr-5">
                                <Jumbotron name={'Home'} />
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24} className="d-flex justify-content-center">
                            <h6 style={{ color: "#FFF" }}>PARTNER EKSKLUSIF KAMI</h6>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24} className="bg-partner p-3">
                            <div className="d-flex justify-content-center">
                                <Row gutter={24}>
                                    {getPartnerList.length > 0 && getPartnerList.map((item, index) =>
                                        <Col span="8" key={index} className="d-flex align-items-center">
                                            <img src={item.photo_url} alt={item.name} />
                                        </Col>
                                    )}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
                <br />
                <br />
                <br />
                <div className="container">
                    <Row gutter={24}>
                        <Col span={24} className="d-flex justify-content-center">
                            <h2 style={{ fontWeight: 700 }}>Apa Yang Refactory Dapat Bantu?</h2>
                        </Col>
                    </Row>
                </div>
                <br />
                <br />
                <div className="container">
                    <Info name={'Home'} />
                </div>
                <br />
                <br />
                <div className="knowledge">
                    <Row gutter={24} >
                        <Col sm={24} className="d-flex justify-content-center">
                            <h6>INSIGHT TERBARU</h6>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={24}>
                        <Col sm={24} className="d-flex justify-content-center">
                            <h3>Knowledge Sharing</h3>
                        </Col>
                    </Row>
                </div>
                <br />
                <div className="d-flex justify-content-center">
                    <label><a href="#" style={{ textDecoration: 'none' }}><span style={{ marginTop: '2px' }}>Lihat Semua</span> <ArrowRightOutlined style={{ marginTop: -5 }} /></a></label>
                </div>
                <br />
                <br />
                <div style={{ background: '#F4F5F6', width: '100%' }}>
                    <div className="container">
                        <Row >
                            <Col sm={24} className="d-flex justify-content-center pt-5">
                                <h2>AS SEEN ON</h2>
                            </Col>
                        </Row>
                        <Row >
                            <Col sm={24} className="d-flex justify-content-center align-items-center">
                                {getASSEEN.length > 0 && getASSEEN.map((item, index) =>
                                    <>
                                        <a href={item.link_url} key={index}>
                                            <img src={item.photo_url} style={{ width: 150 }} className="assen" />
                                        </a>&nbsp;&nbsp;&nbsp;
                                </>
                                )}
                            </Col>
                        </Row>
                    </div>
                </div>
                <div >
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home