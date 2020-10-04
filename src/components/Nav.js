import React from 'react';
import './css/Nav.css';
import { Link } from 'react-router-dom';
import AddLocationIcon from '@material-ui/icons/AddLocation';


function Header() {

    return (
        <div className="nav__header">
            <div className="nav__address">
                <Link to="/">
                    <div className="nav__icon">
                        <AddLocationIcon />
                    </div>
                </Link>
            </div>
            <div className="nav__greeting">
                <Link to="/">
                    <h5>Hello,</h5>
                    <h4> Select your address</h4>
                </Link>
            </div>

            <div className="nav__header__list">
                <ul>
                    <li><h5>Best Sellers</h5></li>
                    <li><h5>Customer Service</h5></li>
                    <li><h5>Amazon Basics</h5></li>
                    <li><h5>Whole Foods</h5></li>
                    <li><h5>Gift Cards</h5></li>
                    <li><h5>Free Service</h5></li>
                    <li><h5>Today's Deal</h5></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;