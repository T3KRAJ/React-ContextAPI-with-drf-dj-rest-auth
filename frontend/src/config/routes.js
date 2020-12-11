import Login from '../pages/Login/index'
import Dashboard from '../pages/Dashboard/index'
import PageNotFound from '../pages/PageNotFound'
import Signup from '../pages/signup';
import Home from '../pages/Home';
import ResetPass from '../pages/ResetPass';


const routes = [
  {
    path: '/login',
    component: Login,
    isPrivate: false,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    isPrivate: true,
  },
  {
    path: '/signup',
    component: Signup,
    isPrivate: false,
  },
  {
    path: '/',
    component: Home,
    isPrivate: false,
  },
  {
    path: '/resetpassword',
    component: ResetPass,
    isPrivate: false,
  }
];
 
export default routes;
