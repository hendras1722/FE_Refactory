import { Fragment, useState } from "react"
import { Card, Row, Col, Form, Input, Button, notification } from 'antd'
import { data } from './datalogin'
import { useHistory } from 'react-router-dom'
import './style.css'

const Login = () => {
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const onFinish = values => {
        setLoading(true)
        if (values.username === data().name && values.password === data().password) {
            notification['success']({
                message: 'Berhasil Masuk'
            });
            sessionStorage.setItem('user', values.username)
            setTimeout(() => {
                setLoading(false)
                history.push('/dashboard')
            }, 2000)
        } else if (values.username !== data().name && values.password === data().password) {
            notification['error']({
                message: 'username salah'
            });
            setLoading(false)
        } else if (values.username === data().name && values.password !== data().password) {
            notification['error']({
                message: 'password salah'
            });
            setLoading(false)
        } else {
            notification['error']({
                message: 'username & password salah'
            });
            setLoading(false)
        }
    };
    return (
        <Fragment >
            <div className="cover-login">
                <div className="bg-login"></div>
                <Row gutter={24} style={{ height: '100vh', width: '100%', marginLeft: '0px', marginRight: '0px' }} className="container-fluid">
                    <Col span={24} className="d-flex justify-content-center align-items-center">
                        <Card style={{ background: "transparent", border: 'none', padding: 50, borderRadius: 10 }} className="CardStyle">
                            <div className="d-flex justify-content-center">
                                <img src="https://refactory.id/wp-content/uploads/2020/01/refactory-hd-125x52.png" alt="refactory-logo" />
                            </div>
                            <div className="mt-4">
                                <Form
                                    name="basic"
                                    onFinish={onFinish}
                                >
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                    <Form.Item >
                                        <div className="d-flex justify-content-center" >
                                            <Button type="primary" htmlType="submit" style={{ width: '273px' }}>{loading ? "Loading" : "Submit"}</Button>
                                        </div>
                                    </Form.Item>
                                </Form>

                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default Login