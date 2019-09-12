const routes = [
    {
        path:'/',
        name:'a-component',
        component:'view/a',
        meta:{
            auth:true
        }
    },
    {
        path:'/b',
        name:'b-component',
        component:'view/b',
        meta:{
            auth:true
        }
    },
    {
        path:'/c',
        name:'c-component',
        component:'view/c',
        meta:{
            auth:false
        }
    }
]

export default routes