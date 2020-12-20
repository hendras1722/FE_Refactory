import { Fragment, useState, useEffect } from 'react'
import Navbar from '../../../Component/Navbar'
import { List, Typography, Button, Row, Col } from 'antd'
import axios from 'axios'
import Footer from '../../../Component/footer'
import Jumbotron from '../../../Component/jumbotron'
import './style.css'
import { YoutubeFilled } from '@ant-design/icons'

const CoursesDetail = (props) => {
    const [getDatas, setGetDatas] = useState([])
    const getData = async () => {
        const { data } = await axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/detail-course.json')
        setGetDatas(data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <Fragment>
            <div className="first">

                <Navbar name={"List"} req={'req'} />
                <div>
                    <div className="cover6">
                        <div className="bg6"></div>
                        <Jumbotron props={props} />
                    </div>
                </div>
                <div style={{ background: '#FAFAFA' }} className="p-5">
                    <div className="container" style={{ width: 600 }}>
                        <div className="d-flex justify-content-center">
                            <label style={{ fontSize: 30 }}>Tentang Course</label>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div style={{ width: 500 }}>
                                <p style={{ textAlign: 'center' }}>{getDatas.["short-description"]}</p>
                            </div>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <label style={{ fontSize: 30 }}>Materi Course</label>
                        </div>
                        <div>
                            <List
                                header={<div style={{ fontWeight: 700 }}>{props.location.state.detail.title}</div>}
                                footer={null}
                                bordered
                                dataSource={getDatas.["materi course"]}
                                renderItem={item =>
                                (
                                    <List.Item className="d-flex bd-highlight">
                                        <div className="p-2 w-100 bd-highlight">
                                            <YoutubeFilled /> &nbsp;
                                            <Typography.Text>{item.section}</Typography.Text>
                                        </div>
                                        <div className="p-2 flex-shrink-1 bd-highlight">
                                            <Button style={{ background: '#E8B67B', color: '#FFF', borderRadius: 5 }} disabled>Start</Button>
                                        </div>
                                    </List.Item>
                                )
                                }
                            />
                        </div>
                        <br />
                    </div>
                    <div>
                        <Row>
                            <Col sm={12} className="d-flex justify-content-end">
                                <img alt="okok" src={getDatas.["quistion-photo"]} style={{ width: 500 }} />
                            </Col>
                            <Col sm={12} className="pt-5">
                                <div className="d-flex align-items-center">
                                    <h3 style={{ fontWeight: 700 }}>{getDatas.["quistion"]}</h3>
                                </div>
                                <div className="d-flex align-items-center" style={{ width: 500 }}>
                                    <p>{getDatas.["answer"]}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <Footer name={'list'} />
                </div>

            </div>
        </Fragment>
    )
}

export default CoursesDetail