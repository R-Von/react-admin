const routes = [
    {
        path:'/',
        component:'component/app',
        routes:[
            {
                path:'/asd',
                component:'component/topics',
                routes:[
                    {
                        path:'/asd/login',
                        component:'component/home'
                    }
                ]
            }
        ]
    }
]

export default routes