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
const Case = () => {
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
                <div className="cover4">
                    <div className="bg4"></div>
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
                        <Col span={24} className="bg-partner3 p-3">
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
                <div>
                    <Info name={"case"} />
                </div>
                <br />
                <br />
                <div >
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Case