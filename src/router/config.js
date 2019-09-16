import ComponentA from '../views/a'
import ComponentB from '../views/b'
import ComponentC from '../views/c'
import Login from '../views/user/login'


const routes = [
    {
        path:'/',
        name:'index',
        component:ComponentA,
        // meta:{
            auth:true
        // }
    },
    {
        path:'/login',
        name:'Login',
        component:Login,
    },
    {
        path:'/a',
        name:'a-component',
        component:ComponentA,
        // meta:{
            auth:false
        // }
    },
    {
        path:'/b',
        name:'b-component',
        component:ComponentB,
        // meta:{
            auth:true
        // }
    },
    {
        path:'/c',
        name:'c-component',
        component:ComponentC,
        // meta:{
            auth:false
        // }
    }
]

export default routes