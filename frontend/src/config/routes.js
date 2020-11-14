import Login from '../pages/Login/index'
import Dashboard from '../pages/Dashboard/index'
import PageNotFound from '../pages/PageNotFound/index'


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
    path: '/*',
    component: PageNotFound,
    isPrivate: true,
  },
];
 
export default routes;
