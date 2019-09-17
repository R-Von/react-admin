import ComponentA from '../views/a'
import ComponentB from '../views/b'
import ComponentC from '../views/c'
import Login from '../views/user/login'
import Layout from '../components/layouts/Layout'


const routes = [
    {
        path:'/',
        name:'index',
        component:ComponentA,
        auth:true
    },
    {
        path:'/login',
        name:'Login',
        component:Login,
    },
    {
        path:'/Layout',
        name:'Layout',
        component:Layout,
    },
    {
        path:'/a',
        name:'a-component',
        component:ComponentA,
        auth:false
    },
    {
        path:'/b',
        name:'b-component',
        component:ComponentB,
        auth:true
    },
    {
        path:'/c',
        name:'c-component',
        component:ComponentC,
        auth:false
    }
]

export default routes