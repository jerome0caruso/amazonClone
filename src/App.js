import React, { useEffect } from 'react';
import Header from "./components/Header";
import Home from "./Home";
import Payment from './components/Payment';
import Nav from './components/Nav';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useStateProvider } from './StateProvider';

function App() {
  const [{ }, dispatch] = useStateValue();

  //listener, keeps track of users signed in
  //only runs once when [] are kept empty
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Nav />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Nav />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Nav />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
