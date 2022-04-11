import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Banner from './Pages/Banner/Banner';
import Booking from './Pages/Booking/Booking';
import Courses from './Pages/Courses/Courses';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Registration from './Pages/Registration/Registration';

function App() {
  return (
    <>
   <AuthProvider>
   <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route  path='/home'>
          <Home></Home>
        </Route>
        <Route  path='/login'>
          <Login></Login>
        </Route>
        <Route  path='/register'>
          <Registration></Registration>
        </Route>
        <Route  path='/courses'>
          <Courses></Courses>
        </Route>
        <Route  path='/dashboard'>
          <Dashboard></Dashboard>
        </Route>
        <PrivateRoute path="/booking/:serviceId">
         <Booking></Booking>
       </PrivateRoute>
        <Route  path='/banner'>
          <Banner></Banner>
        </Route>
        
      </Switch>
    </Router>
   
   </AuthProvider>
    </>
  );
}

export default App;
