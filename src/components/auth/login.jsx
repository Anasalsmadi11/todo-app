import React, { useContext, useState } from 'react';
import {When} from 'react-if';

import { LoginContext } from './context.jsx';

export default function Login(props){
  const login = useContext( LoginContext)

   const [username, setUsername]= useState('')
   const [password, setPassword]= useState('')

    let handleUsername = (e) => {
  setUsername(e.target.value )
 };
    let handlePassword = (e) => {
     setPassword(e.target.value )
 };

     let  handleSubmit = (e) => {
   e.preventDefault();
   login.login(username, password);
 };
 return(
   <>
   <When condition={login.loggedIn }>
     <button onClick={login.logout}>Log Out</button>
   </When>

   <When condition={!login.loggedIn}>
     <form onSubmit={handleSubmit}>
       <input
         placeholder="UserName"
         name="username"
         onChange={handleUsername}
       />
       <input
         placeholder="password"
         name="password"
         onChange={handlePassword}
       />
       {/* <button>Login</button> */}
       <input type="submit"  />
     </form>
   </When>
 </>
 )
}


// class Login extends React.Component {
//   static contextType = LoginContext;

//   constructor(props) {
//     super(props);
//     this.state = { username: '', password: '' };
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.context.login(this.state.username, this.state.password);
//   };

//   render() {
//     return (
//       <>
//         <When condition={this.context.loggedIn}>
//           <button onClick={this.context.logout}>Log Out</button>
//         </When>

//         <When condition={!this.context.loggedIn}>
//           <form onSubmit={this.handleSubmit}>
//             <input
//               placeholder="UserName"
//               name="username"
//               onChange={this.handleChange}
//             />
//             <input
//               placeholder="password"
//               name="password"
//               onChange={this.handleChange}
//             />
//             <button>Login</button>
//           </form>
//         </When>
//       </>
//     );
//   }
// }

// export default Login;

