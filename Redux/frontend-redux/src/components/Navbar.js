import '../components/Navbar.css'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';

import { useDispatch } from "react-redux";

// Actions
import { removeFromAuth } from '../redux/actions/userActions';

const Navbar = ({click}) => {

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart;

    const getCarttCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    const [loginToggle, setLoginToggle] = useState(false);
    console.log(loginToggle)
    const dispatch = useDispatch();

    const getUser = useSelector(state => state.user);
    const { loadings, errors, users } = getUser;

    const logoutHandler = () => {
        dispatch(removeFromAuth(users));
      };

      


    return (
        <nav className={navbar ? "navbar active" : 'navbar'}>
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>
            </div>

            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to ="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo__badge">{getCarttCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to ="/">
                        Shop
                    </Link>
                </li>
                <li show={loginToggle == "true"} click={() => setLoginToggle(false)}>
                    <Link to ="/login" >
                        Login
                    </Link>
                </li>
                <li show={loginToggle == "false"} click={() => setLoginToggle(false)}>
                    <Link to ="/login" onClick={logoutHandler} >
                        Logout
                    </Link>
                </li>
                
            </ul>

            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
