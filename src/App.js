import React, { useEffect } from 'react';
import Header from "./components/Header";
import Home from "./Home";
import Payment from './components/Payment';
import Nav from './components/Nav';
import Orders from './components/Orders';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useStateProvider } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51HYZe3ALDbh0mjK9unuQ9EewMQw89eTb1PZqLvZZt08hrm25ncyfiqn2qWZaveSsw9gFQQVX6hQ9eUI1IMgkbDEL00fjaQTZn4');

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
          <Route path="/orders">
            <Header />
            <Nav />
            <Orders/>
          </Route>
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
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
