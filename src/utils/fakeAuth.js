export const fakeAuth = {
    setToken(token){
        localStorage.setItem('loginToken',token)
        return true
    },
    signOut(){
        localStorage.removeItem('loginToken')
    },
    authenticate(){
        const token = localStorage.getItem('loginToken')
        return token ? true:false
    }
}