import { Fragment, useEffect, useState } from 'react'
import Navbar from '../../Component/Navbar'
import Jumbotron from '../../Component/jumbotron'
import './style.css'
import { Row, Col, Button, Card, Image, Rate } from 'antd'
import axios from 'axios'
import Info from '../../Component/info'
import { ArrowRightOutlined } from '@ant-design/icons'
import Footer from '../../Component/footer'
import { useHistory } from 'react-router-dom'

const Courses = () => {
    const [getAlumnis, setAlumnis] = useState([])
    const history = useHistory()
    const getAlumni = async () => {
        const { data } = await axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/alumni-report.json')
        setAlumnis(data.data)
    }
    useEffect(() => {
        getAlumni()
    }, [])
    return (
        <Fragment>
            <div className="first">
                <div className="cover1">
                    <div className="bg1"></div>
                    <Row gutter={24}>
                        <Col span={24} >
                            <Navbar />
                            <div className="container pl-5 pr-5">
                                <Jumbotron name={'courses'} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="container">
                    <Info name={'courses'} />
                </div>
                <br />
                <br />
                <div style={{ background: '#F4F5F6' }}>
                    <Row className="pt-5">
                        <Col sm={12}>
                            <label style={{ fontWeight: 500, color: '#000' }} className="kursus">Kursus pemrograman untuk semua orang tanpa terkecuali</label>
                            <br />
                            <p className="paragraph">Refactory Course dirancang untuk memudahkan setiap orang mampu meningkatkan keahlian dalam software engineering tanpa dibatasi oleh kesulitan akses, kesulitan waktu, batasan keahlian, ataupun usia.</p>
                            <br />
                            <p className="paragraph">Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan project, bagi pelajar/mahasiswa, Refactory Course akan melengkapi keahlian yang sudah diperoleh dalam studi sehingga dapat membuka kesempatan tak terbatas pada karir software engineering.</p>
                            <br />
                            <p className="paragraph">Bagi karyawan atau tenaga profesional, Refactory Course dapat meningkatkan keahlian software engineer dalam menunjang menyelesaikan tugas pekerjaannya tanpa khawatir dengan keterbatasan waktu.</p>
                            <br />
                            <p className="paragraph">Masyarakat secara luas juga dapat memanfaatkan pembelajaran untuk meningkatkan keahlian sehingga mampu berkarya dan mendapat keuntungan karir tanpa khawatir mahalnya belajar.</p>
                            <br />
                            <div style={{ paddingLeft: 150 }}>
                                <Button style={{ background: '#E48800', border: 'none', color: '#FFF', borderRadius: '20px', width: 200 }}>Daftar Sekarang</Button>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className="d-flex justify-content-end">
                                <img src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/IMG_1152-1.jpg?fit=690%2C800&ssl=1" alt="photo" style={{ width: 600, marginTop: -30 }} />
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <div>
                        <div className="d-flex justify-content-center">
                            <label>MEET OUR GRADUATES</label>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <h3 style={{ fontWeight: 700 }}>Review</h3>
                        </div>
                        <div className="d-flex justify-content-center" className="d-flex justify-content-center">
                            <h3>Read what our alumni said on <span style={{ fontWeight: 700 }}>Course Report</span></h3>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="container">
                    <Row>
                        {getAlumnis.length > 0 && getAlumnis.map((item, index) =>
                            <Col sm={12} className="d-flex justify-content-around pr-3" key={index}>
                                <Card style={{ width: 400 }} className="Carded">
                                    <Image src={item.user.photo_url} width={340} style={{ marginBottom: 30 }} />
                                    <br />
                                    <h4>{item.user.name}</h4>
                                    <br />
                                    <h6 style={{ color: '#999' }}>{item.user.from}</h6>
                                    <br />
                                    <Rate disabled defaultValue={item.star} style={{ marginBottom: 20 }} />
                                    <br />
                                    <h6 style={{ fontWeight: 700 }}>{item.title}</h6>
                                    <br />
                                    <p style={{ textAlign: 'justify' }}>{item.description}</p>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
                <br />
                <br />
                <div className="learning ">
                    <div className="container">
                        <Row>
                            <Col sm={24} className="d-flex justify-content-center pr-5 align-items-center" style={{ height: 120 }}>
                                <h3 style={{ color: '#FFF', marginRight: 10 }}>Ready to start Learning?</h3> &nbsp; &nbsp;
                                <Button style={{ background: '#E48800', border: 'none', color: '#FFF', borderRadius: '20px', width: 200 }}>Daftar Sekarang</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
                <br />
                <div className="container">
                    <Row>
                        <Col className="d-flex justify-content-center" sm={24}>
                            <h6 style={{ color: '#E48800' }}>LANGKAH MUDAH</h6>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col className="d-flex justify-content-center" sm={24}>
                            <h4 style={{ textAlign: 'center', fontWeight: 700 }}>Memulai Belajar di <br />Refactory Course</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center" sm={24}>
                            <img src='https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame-3-1.png?resize=1024%2C199&ssl=1' />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={24} className="d-flex justify-content-center">
                            <Button style={{ background: '#E48800', border: 'none', color: '#FFF', borderRadius: '20px', width: 175 }}>Pelajari Lebih</Button>
                        </Col>
                    </Row>
                </div>
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

export default Courses