import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Courses from './Pages/courses'
import Costum from './Pages/Custom'
import Case from './Pages/case'
import CoursesList from './Pages/coursesList'
import CoursesDetail from './Pages/coursesList/courseDetail'
import Blog from './Pages/Blog'
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Home} exact path="/" />
        <Route component={Courses} path="/courses" />
        <Route component={Costum} path="/costum" />
        <Route component={Case} path="/case-studies" />
        <Route component={CoursesList} path="/dashboard" />
        <Route component={CoursesDetail} path="/detail/:id" />
        <Route component={Blog} path="/blog" />
      </Switch>
    </Router>
  );
}

export default App;
