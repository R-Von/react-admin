// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React , { Component } from 'react'
import { BrowserRouter as Router , Link , Route , Switch} from 'react-router-dom'

// 组件
import Login from './views/user/login'
import Index from './views/dashboard/index'
import NotFound from './views/404'
import PrivateRoute from './router/privateRoute'
import './App.css';



function App(){
  return (
    <Router basename="/admin">
      <Switch>
        
        <Route path="/login" component={ Login } exact />

        <PrivateRoute path="/" component={ Index } />

        <Route compoent={ NotFound } />

      </Switch>
    </Router>
  )
}



export default App