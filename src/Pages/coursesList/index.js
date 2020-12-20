import { Fragment, useState, useEffect } from 'react'
import Navbar from '../../Component/Navbar'
import { Select, Input } from 'antd'
import axios from 'axios'
import Footer from '../../Component/footer'
import { Link } from 'react-router-dom'
import './style.css'

const { Option } = Select;
const { Search } = Input;
const CoursesList = () => {
    const [getDatas, setGetDatas] = useState([])
    const [loading, setLoading] = useState(true)
    const onSearch = value => {
        let filters = getDatas
        let array = filters.filter(item => String(item.title).toLowerCase().includes(String(value).toLowerCase()))
        setGetDatas(array)
    };
    const getData = async () => {
        try {
            const { data } = await axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/list-course.json')
            setGetDatas(data.data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    const get = () => {
        if (loading) {
            return (
                <div className="d-flex justify-content-center align-items-center">
                    <div class="spinner-border text-dark"></div>&nbsp;Please Wait ...
                </div>
            )
        } else {
            return (
                <div className="d-flex flex-wrap justify-content-between">
                    {getDatas.length > 0 && getDatas.map((item, index) =>
                        <div key={index} style={{ background: '#FFF', borderRadius: 10, border: '0.5px solid #E48800', width: 332, maxWidth: 332, height: 'auto' }} className="mt-5">
                            <div>
                                <img alt="okok" src={item.photo_url} style={{ width: 330, height: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                            </div>
                            <div className="p-3">
                                <h6 style={{ color: '#3B8C9B', fontWeight: 700 }} className="titles"><Link to={{ pathname: `/detail/${item.id}`, state: { detail: item } }} className="link">{item.title}</Link></h6>
                                <p style={{ color: '#3B8C9B' }}>{item.short_description}</p>
                            </div>
                            <div style={{ paddingTop: 4, paddingLeft: 18, }} className="d-flex">
                                <img alt="okok" src={item?.user?.photo_url} style={{ width: 30, height: 40, paddingBottom: 10, borderRadius: "100%" }} /> &nbsp;
                            <p>{item?.user?.name}</p>
                            </div>
                        </div>
                    )}
                </div>
            )
        }
    }
    return (
        <Fragment>
            <Navbar name={"List"} />
            <div style={{ background: '#FAFAFA' }} className="p-5">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <Select placeholder="Category" style={{ width: 200 }} >
                            <Option value="Category">Hore</Option>
                        </Select>
                        <Search placeholder="Cari Module" onSearch={(e) => onSearch(e)} enterButton style={{ width: 300 }} />
                    </div>
                    <br />
                    <br />
                    {get()}
                </div>
            </div>
            <div>
                <Footer name={'list'} />
            </div>
        </Fragment>
    )
}

export default CoursesList