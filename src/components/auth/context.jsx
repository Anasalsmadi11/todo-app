import React from 'react';
import {useEffect,useState} from 'react'
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

export const LoginContext = React.createContext();

const testUsers = {
  Administrator: {
    password: 'admin',
    name: 'Administrator',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJywncmVhZCcsJ3VwZGF0ZScsJ2RlbGV0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.pAZXAlTmC8fPELk2xHEaP1mUhR8egg9TH5rCyqZhZkQ'
  },
  Editor: {
    password: 'editor',
    name: 'Editor',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWRpdG9yIiwicm9sZSI6ImVkaXRvciIsImNhcGFiaWxpdGllcyI6IlsncmVhZCcsJ3VwZGF0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.3aDn3e2pf_J_1rZig8wj9RiT47Ae2Lw-AM-Nw4Tmy_s'
  },
  Writer: {
    password: 'writer',
    name: 'Writer',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVyIiwicm9sZSI6IndyaXRlciIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.dmKh8m18mgQCCJp2xoh73HSOWprdwID32hZsXogLZ68'
  },
  User: {
    password: 'user',
    name: 'User',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInJvbGUiOiJ1c2VyIiwiY2FwYWJpbGl0aWVzIjoiWydyZWFkJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.WXYvIKLdPz_Mm0XDYSOJo298ftuBqqjTzbRvCpxa9Go'
  },
};

const LoginProvider = (props) => {
  const [state, setState] = useState({
    loggedIn: false,
    user: { capabilities: [] },
    error: null,
  });

  const can = (capability) => {
    // return state.user.capabilities.includes(capability);
    return state?.user?.capabilities?.includes(capability);
  };

  const login = async (username, password) => {
    const auth = testUsers[username];
    console.log("auth",auth)
    if (auth && auth.password === password) {
      try {
        validateToken(auth.token);
      } catch (e) {
        setLoginState(false, null, {}, e);
        console.error(e);
      }
    }
  };

  const logout = () => {
    setLoginState(false, null, {});
  };

  const validateToken = (token) => {
    try {
      const validUser = jwt_decode(token);
      setLoginState(true, token, validUser);
    } catch (e) {
      setLoginState(false, null, {}, e);
      console.log('Token Validation Error', e);
    }
  };

  const setLoginState = (loggedIn, token, user, error) => {
    cookie.save('auth', token);
    setState({ ...state, loggedIn, user, error: error || null });
  };



  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    validateToken(token);
  }, []);

  return (
    <LoginContext.Provider value={{ ...state, can, login, logout }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;


// +++++++++++++++++++++            ++++++++++++++++++++++
// +++++++++++++++++++++            ++++++++++++++++++++++
// +++++++++++++++++++++     or     ++++++++++++++++++++++
// +++++++++++++++++++++            ++++++++++++++++++++++
// +++++++++++++++++++++            ++++++++++++++++++++++

 // function LoginProvider(props) {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [user, setUser] = useState({ capabilities: [] });
//   const [error, setError] = useState(null);


//   let can = (capability) => {
//     return user?.capabilities?.includes(capability);
//   };

//   let login = async (username, password) => {
//     let auth = testUsers[username];

//     if (auth && auth.password === password) {
//       try {
//         validateToken(auth.token);
//         console.log(auth.token);
//       } catch (e) {
//         setLoginState(false, null, {}, e);
//         console.error(e);
//       }
//     }
//   };

//   let logout = () => {
//     setLoginState(false, null, {});
//   };
// let validateToken = (token) => {
//     try {
//       let validUser = jwt_decode(token);
//       setLoginState(true, token, validUser);
//     } catch (e) {
//       setLoginState(false, null, {}, e);
//       console.log("Token Validation Error", e);
//     }
//   };

//   let setLoginState = (loggedIn, token, user, error) => {
//     cookie.save("auth", token);
//     setLoggedIn(loggedIn);
//     // setToken(token);
//     setUser(user);
//     setError(error || null);
//   };

//   useEffect(() => {
//     const qs = new URLSearchParams(window.location.search);
//     const cookieToken = cookie.load("auth");
//     const token = qs.get("token") || cookieToken || null;
//     validateToken(token);
//   }, []);

//   let state = {
//     loggedIn: loggedIn,
//     can: can,
//     login: login,
//     logout: logout,
//     user: user,
//     error: error,
//   };

//   return (
//     <LoginContext.Provider value={state}>
//       {props.children}
//     </LoginContext.Provider>
//   );
// }

// export default LoginProvider;




// class LoginProvider extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedIn: false,
//       can: this.can,
//       login: this.login,
//       logout: this.logout,
//       user: { capabilities: [] },
//       error: null,
//     };
//   }

//   can = (capability) => {
//     return this?.state?.user?.capabilities?.includes(capability);
//   }

//   login = async (username, password) => {
//     let { loggedIn, token, user } = this.state;
//     let auth = testUsers[username];

//     if (auth && auth.password === password) {
//       try {
//         this.validateToken(auth.token);
//       } catch (e) {
//         this.setLoginState(loggedIn, token, user, e);
//         console.error(e);
//       }
//     }
//   }

//   logout = () => {
//     this.setLoginState(false, null, {});
//   };

//   validateToken = token => {
//     try {
//       let validUser = jwt_decode(token);
//       this.setLoginState(true, token, validUser);
//     }
//     catch (e) {
//       this.setLoginState(false, null, {}, e);
//       console.log('Token Validation Error', e);
//     }

//   };

//   setLoginState = (loggedIn, token, user, error) => {
//     cookie.save('auth', token);
//     this.setState({ token, loggedIn, user, error: error || null });
//   };

//   componentDidMount() {
//     const qs = new URLSearchParams(window.location.search);
//     const cookieToken = cookie.load('auth');
//     const token = qs.get('token') || cookieToken || null;
//     this.validateToken(token);
//   }

//   render() {
//     return (
//       <LoginContext.Provider value={this.state}>
//         {this.props.children}
//       </LoginContext.Provider>
//     );
//   }
// }

// export default LoginProvider;


