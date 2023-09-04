import React, { useContext } from 'react';
import {When} from 'react-if';

import { LoginContext } from './context.jsx';

// class Auth extends React.Component {

//   static contextType = LoginContext;

//   render() {

//     const isLoggedIn = this.context.loggedIn;
//     const canDo = this.props.capability ? this.context.can(this.props.capability) : true;
//     const okToRender = isLoggedIn && canDo;

//     return (
//       <When condition={okToRender}>
//         {this.props.children}
//       </When>
//     );
//   }
// }

// export default Auth;

export default function Auth(props){
  const login= useContext(LoginContext)

      const isLoggedIn = login.loggedIn;
    const canDo = props.capability ? login.can(props.capability) : true;
    const okToRender = isLoggedIn && canDo;

  return(
    <>
         <When condition={okToRender}>
         {props.children}
         </When>
    </>
  )
}