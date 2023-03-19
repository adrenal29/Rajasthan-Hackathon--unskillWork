import React from 'react';
import {auth} from './Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './components/Login';
import Mainpage from './components/Main';
  
function App() {
  const [user] = useAuthState(auth);
  return (
    user ? <Mainpage/> : <Login/>
  );
}
  
export default App;