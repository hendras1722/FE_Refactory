import { Fragment } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './style.css'

const NavbarBlog = (props) => {
    const location = useLocation()
    console.log(location, 'inilocation')
    const getDataSesion = () => {
        return sessionStorage.getItem('user')
    }
    const logOutin = () => {
        return sessionStorage.removeItem('user')
    }
    const NavbarList = () => {
        return (<Fragment>
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="container">
                        <ul className="navbar-nav mr-auto d-flex justify-content-center">
                            <li className="nav-item listMenu" style={{ height: 60, paddingLeft: 10, paddingRight: 10, display: 'flex', alignItems: 'center', background: location.pathname === '/blog' ? '#5CA3BD' : 'none' }}>
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item listMenu" style={{ height: 60, paddingLeft: 10, paddingRight: 10, display: 'flex', alignItems: 'center', background: location.pathname === '/blog1' ? '#5CA3BD' : 'none' }}>
                                <Link className="nav-link" to="/blog1">Engineering</Link>
                            </li>
                            <li className="nav-item listMenu" style={{ height: 60, paddingLeft: 10, paddingRight: 10, display: 'flex', alignItems: 'center', background: location.pathname === '/blog2' ? '#5CA3BD' : 'none' }}>
                                <Link className="nav-link" to="/blog2">Profile</Link>
                            </li>
                            <li className="nav-item listMenu" style={{ height: 60, paddingLeft: 10, paddingRight: 10, display: 'flex', alignItems: 'center', background: location.pathname === '/blog3' ? '#5CA3BD' : 'none' }}>
                                <Link className="nav-link" to="/blog3">Tutorial</Link>
                            </li>
                            <li className="nav-item listMenu" style={{ height: 60, paddingLeft: 10, paddingRight: 10, display: 'flex', alignItems: 'center', background: location.pathname === '/blog4' ? '#5CA3BD' : 'none' }}>
                                <Link className="nav-link" to="/blog4">Tips & Trick</Link>
                            </li>
                            <li className="nav-item listMenu" style={{ height: 60, paddingLeft: 10, paddingRight: 10, display: 'flex', alignItems: 'center', background: location.pathname === '/blog5' ? '#5CA3BD' : 'none' }}>
                                <Link className="nav-link" to="/blog5">Growth & Culture</Link>
                            </li>
                            <li className="nav-item listMenu" style={{ height: 60, paddingLeft: 10, paddingRight: 10, display: 'flex', alignItems: 'center', background: location.pathname === '/blog6' ? '#5CA3BD' : 'none' }}>
                                <Link className="nav-link" to="/blog6">Newsroom</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>)
    }
    return NavbarList()
}

export default NavbarBlog