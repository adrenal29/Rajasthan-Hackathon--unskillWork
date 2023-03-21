import React from 'react';
import {auth} from './Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './components/Login';
import Mainpage from './components/Main';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Work from './components/Work';
import Rating from './components/Rating';
import PastJobs from './components/PastJobs';
import Landing from './components/Landing';
import Select from './components/Select'
import CitizenMain from './components/CitizenMain'
function App() {
  const [user] = useAuthState(auth);
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Landing/>}></Route>
        <Route exact path='/skillmen' element={user ? <Mainpage/> : <Login/>}></Route>
        <Route exact path='/citizen' element={user ? <CitizenMain/> : <Login/>}></Route>
        <Route exact path='/pastjobs' element={<PastJobs/>}></Route>
        <Route exact path='/rating' element={<Rating/>}></Route>
        <Route exact path='/chooseJob' element={<Select/>}></Route>
      </Routes>
    </BrowserRouter>
  );
  
}
  
export default App;