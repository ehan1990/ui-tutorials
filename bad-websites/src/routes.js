import Home from './pages/Home';
import Admin from './pages/Admin';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/admin', component: <Admin /> },
];

export default routes;
