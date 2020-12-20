import { Fragment, useEffect, useState } from 'react'
import Navbar from '../../Component/Navbar'
import Jumbotron from '../../Component/jumbotron'
import './style.css'
import { Row, Col, Button, Collapse } from 'antd'
import axios from 'axios'
import Info from '../../Component/info'
import Footer from '../../Component/footer'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const { Panel } = Collapse;
const Custom = () => {
    const [getPartnerList, setGetPatnerList] = useState([])
    const getPartner = async () => {
        const { data } = await axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/partner.json')
        setGetPatnerList(data.data)
    }
    const history = useHistory()
    useEffect(() => {
        getPartner()
    }, [])
    const accordion = [{
        title: 'Bagaimana jika saya ingin mengajukan kerjasama untuk Custom Trainings?',
        text: 'Silahkan isi form Custom Trainings request untuk menjadwalkan initial call/meeting.'
    }, {
        title: 'Sistem apakah yang digunakan oleh Refactory untuk layanan Custom Trainings ini?',
        text: 'Refactory akan memberikan training yang kurikulum / bahan ajarnya disesuaikan dengan kebutuhan dan permintaan klien atau perusahaan, bahkan bisa di fokuskan dalam pengerjaan suatu project yang sedang dilaksanakan oleh klien atau perusahaan.'
    }, {
        title: 'Stack apa saja yang dikuasai oleh tim Refactory?',
        text: 'Semua stack, kecuali big data, data science, dan data analis.'
    }, {
        title: 'Platform apa yang digunakan?',
        text: 'Semua platform.'
    }, {
        title: 'Bagaimana sistem pricing di Refactory?',
        text: 'Kami menyediakan sistem pembayaran per bulan, fixed cost. Selengkapnya bisa klik di sini.'
    }]
    return (
        <Fragment>
            <div className="first">
                <div className="cover2">
                    <div className="bg2"></div>
                    <Row gutter={24}>
                        <Col span={24} >
                            <Navbar />
                            <div className="container pl-5 pr-5" style={{ marginBottom: '40px' }}>
                                <Jumbotron name={'costum'} />
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row gutter={24}>
                        <Col span={24} className="d-flex justify-content-center">
                            <h6 style={{ color: "#FFF" }}>PARTNER EKSKLUSIF KAMI</h6>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24} className="bg-partner1 p-3">
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
                            <h2 style={{ fontWeight: 700 }}>Service and Platform</h2>
                        </Col>
                    </Row>
                </div>
                <br />
                <br />
                <div className="container mb-5">
                    <Info name={'costum'} />
                </div>
                <br />
                <br />
                <br />
                <div style={{ background: '#F4F5F6', width: '100%' }}>
                    <div className="container">
                        <Row >
                            <Col sm={12} className="d-flex justify-content-center" style={{ marginTop: -20 }} >
                                <img src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/02/training-pt-bsi.jpg?fit=630%2C690&ssl=1" alt="logo" style={{ width: 520, height: 350 }} />
                            </Col>
                            <Col sm={12} className="p-5">
                                <div>
                                    <label style={{ fontSize: 30, color: '#E48800', fontWeight: 500 }}>
                                        PT BSI
                                    </label>
                                </div>
                                <div>
                                    <h1>
                                        Membentuk Mobile <br /> Developer Melalui <br /> Corporate Online <br /> Bootcamp
                                    </h1>
                                </div>
                                <div>
                                    <label style={{ fontSize: 30, color: '#000', fontWeight: 700 }}>
                                        Challenge
                                    </label>
                                    <p>PT. BSI ingin mengembangkan aplikasi mobile untuk menunjang bisnis yang dijalankan oleh BSI. Berharap dapat mencetak developer mobile dan bisa membuat aplikasi presensi yang nantinya akan digunakan untuk marketing atau sales yang bekerja di BSI. Issue yang ingin dipecahkan yaitu supaya sales atau marketing ketika ingin melakukan presensi tidak perlu datang ke kantor pusat terlebih dahulu, jadi mereka bisa langsung melakukan presensi di dealer atau tempat yang memang akan mereka tuju untuk kebutuhan kantor.</p>
                                </div>
                                <div>
                                    <label style={{ fontSize: 30, color: '#000', fontWeight: 700 }}>
                                        Our Solution
                                    </label>
                                    <p>Refactory memberikan solusi dengan cara memberikan pelatihan intensif secara online selama 12 pekan. Selama bootcamp, para peserta bootcamp akan diberikan tugas yang disesuaikan dengan kebutuhan yang ingin dicapai oleh BSI.</p>
                                </div>
                                <div>
                                    <label style={{ fontSize: 30, color: '#000', fontWeight: 700 }}>
                                        Stack & Service
                                    </label>
                                    <p>Flutter .NET</p>
                                </div>
                                <div>
                                    <Button style={{ background: '#E48800', border: 'none', color: '#FFF', borderRadius: '20px', width: 200 }}>Read Case Study</Button> &nbsp; <Button style={{ background: '#FFF', border: '1px solid #E48800', color: '#E48800', borderRadius: '20px', width: 200 }}>More Case Study <ArrowRightOutlined /></Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <br />
                <br />
                <div className="container">
                    <Row gutter={24}>
                        <Col span={24} className="d-flex justify-content-center">
                            <h2 style={{ fontWeight: 700 }}>Frequently Asked Question (FAQ)</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={24} className="d-flex justify-content-center">
                            <label>Temukan jawaban untuk beberapa pertanyaan umum tentang Custom Trainings</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={24}>
                            <Collapse defaultActiveKey={['0']} >
                                {accordion.map((item, index) =>
                                    <Panel header={item.title} key={index}>
                                        <p>{item.text}</p>
                                    </Panel>
                                )}
                            </Collapse>
                        </Col>
                    </Row>
                </div>
                <br />
                <br />
                <div style={{ background: '#F4F5F6', width: '100%' }}>
                    <div className="container p-5">
                        <Row >
                            <Col sm={24} className="d-flex justify-content-center">
                                <h2>Ready To Make Your Idea Happen?</h2>
                            </Col>
                        </Row>
                        <Row >
                            <Col sm={24} className="d-flex justify-content-center align-items-center">
                                <Button style={{ background: '#E48800', border: 'none', color: '#FFF', borderRadius: '20px', width: 200 }}>Contact Us</Button>
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

export default Custom