import { Fragment } from 'react'
import Navbar from '../../Component/Navbar'
import NavbarBlog from './component/NavbarBlog'
import './style.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import BlogPages from './pages/blog'
import Footer from '../../Component/footer'

const Blog = () => {
    return (
        <Fragment>
            <Navbar name={'blog'} />
            <div className='navbarblogpage' style={{ height: 'auto' }}>
                <NavbarBlog />
            </div>
            <div className="container">
                <Router>
                    <Switch>
                        <Route component={BlogPages} path="/blog" />
                    </Switch>
                </Router>
            </div>
            <div>
                <div>
                    <Footer />
                </div>
            </div>
        </Fragment>
    )
}

export default Blog