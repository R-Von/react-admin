import ComponentA from '../views/a'
import ComponentB from '../views/b'
import ComponentC from '../views/c'
import Login from '../views/user/login'
import DataChart from '../views/datachart'
import DataCenter from '../views/datacenter'
import ListPage from '../views/listpage'
// import Layout from '../components/layouts/Layout'


export const asyncRouter = [
    {
        path:'/',
        name:'首页',
        component:ComponentA,
        auth:true,
        icon:'pie-chart',
        redirects:'/dataCount'
    },
    {
        path:'/dataCount',
        name:'数据统计',
        icon:'fund',
        component:DataChart,
    },
    {
        path:'/dataCenter',
        name:'数据中心',
        icon:'pie-chart',
        component:DataCenter,
        auth:true
    },
    {
        path:'/listPage',
        name:'列表页',
        icon:'container',
        component:ListPage,
        auth:true
    },
    {
        path:'/a',
        name:'组件A',
        icon:'amazon',
        component:ComponentA,
        auth:false
    },
    {
        path:'/b',
        name:'组件B',
        icon:'behance',
        component:ComponentB,
        auth:true
    },
    {
        path:'/c',
        name:'组件C',
        icon:'copyright',
        component:ComponentC,
        auth:false
    }
]


export const defaultRouter = [
    {
        path:'/login',
        name:'Login',
        component:Login
    }
]


// export default routes