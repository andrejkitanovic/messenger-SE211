import {lazy} from 'react'

const Home = lazy(() => import('../Home/Home'));
const Login = lazy(() => import('../Login/Login'));
const Register = lazy(() => import('../Register/Register'));

export { Login, Register, Home };
