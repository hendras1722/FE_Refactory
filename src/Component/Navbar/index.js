import { Fragment, useState } from 'react'
import './style.css'
import { useLocation, Link } from 'react-router-dom'
import { Button } from 'antd'

const Navbar = (props) => {
    const location = useLocation()
    const getDataSesion = () => {
        return sessionStorage.getItem('user')
    }
    const logOutin = () => {
        return sessionStorage.removeItem('user')
    }
    const NavbarList = () => {
        switch (props.name) {
            case 'List':
                return (
                    <Fragment>
                        <nav class="navbar navbar-expand-lg navbar-light pr-5 pl-5 navbarnya">
                            <div className="container">
                                <Link class="navbar-brand" to="/"><img src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/01/refactory-hd.png?resize=125%2C52&ssl=1" style={{ width: 80 }} /></Link>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active d-flex align-items-center">
                                            <Link class="nav-link" to="/"><span style={{ color: location.pathname === '/' ? '#DF8819' : '#FFF' }}>Courses</span></Link>
                                        </li>
                                        <li class="nav-item d-flex align-items-center">
                                            <Link class="nav-link" to="/courses"><span style={{ color: location.pathname === '/courses' ? '#DF8819' : '#FFF' }}>Roadmap</span></Link>
                                        </li>
                                        {getDataSesion() ? (
                                            <li class="nav-item d-flex align-items-center">
                                                <Link onClick={logOutin} class="nav-link" to="/login"><span style={{ color: location.pathname === '/costum' ? '#DF8819' : '#FFF' }}>Hi, Hendra<br /> Keluar</span></Link>
                                            </li>
                                        ) : (
                                                <li class="nav-item d-flex align-items-center">
                                                    <Link class="nav-link" to="/login"><span style={{ color: location.pathname === '/costum' ? '#DF8819' : '#FFF' }}>Login</span></Link>
                                                </li>
                                            )}
                                        {props.req === 'req' ? (
                                            null
                                        ) : (
                                                <li class="nav-item d-flex align-items-center">
                                                    <Link class="nav-link" to="/case-studies"><span style={{ color: location.pathname === '/case-studies' ? '#DF8819' : '#FFF' }}> <Button style={{ background: '#E48800', border: 'none', color: '#FFF', borderRadius: '20px', width: 100 }}>Sign Up</Button></span></Link>
                                                </li>
                                            )}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </Fragment>
                )
            default:
                return (
                    <Fragment>
                        <nav class="navbar navbar-expand-lg navbar-light pr-5 pl-5">
                            <Link class="navbar-brand" to="/"><img src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/01/refactory-hd.png?resize=125%2C52&ssl=1" /></Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <Link class="nav-link" to="/"><span style={{ color: location.pathname === '/' ? '#DF8819' : '#FFF' }}>Home</span></Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/courses"><span style={{ color: location.pathname === '/courses' ? '#DF8819' : '#FFF' }}>Courses</span></Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/costum"><span style={{ color: location.pathname === '/costum' ? '#DF8819' : '#FFF' }}>Costum Trainings</span></Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/case-studies"><span style={{ color: location.pathname === '/case-studies' ? '#DF8819' : '#FFF' }}>Case Studies</span></Link>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </Fragment>
                )
        }
    }
    return NavbarList()
}

export default Navbar