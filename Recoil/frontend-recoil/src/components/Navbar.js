import '../components/Navbar.css'
import React from 'react'
import {Link} from 'react-router-dom';
import { totalQty } from '../recoil/selector'
import { useRecoilState, useRecoilValue,useSetRecoilState } from "recoil";
import { useState, useEffect } from 'react';
import { userIdState } from "../recoil/atom";

const Navbar = ({click}) => {
    const qty = useRecoilValue(totalQty)
    
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
    // const dispatch = useDispatch();

    // const getUser = useSelector((state) => state.user);
    // const users  = getUser.user.item
    // console.log(users)

    const [users,setUsers] = useRecoilState(userIdState)
    // console.log(users)
    useEffect(() => {
        if(users){
            setLoginToggle(true)
          }else if (users == ""){
            setLoginToggle(false)
          }else{
            setLoginToggle(false)
          }
    }, [users])


    const logoutHandler = () => {
        console.log(users)
        setUsers("")
        setLoginToggle(false)
      };

      const login = () => setLoginToggle(false)
      const logout = () => setLoginToggle(false)

    //   useEffect(() => {
    //       if(users){
    //         setLoginToggle(true)
    //       }else if (users == ""){
    //         setLoginToggle(false)
    //       }else{
    //         setLoginToggle(false)
    //       }
        
    //   }, users)

    
      const Login = () => (
        <div id="results" className="login-results" onClick={login} onClick={logoutHandler}>
            <i class="fas fa-user" aria-hidden="true"> Logout</i>
        </div>
      )
      const Logout = () => (
        <div id="results" className="login-results" onClick={logout} >
            <i class="fas fa-user" aria-hidden="true"> Login</i>
        </div>
      )

    return (
        <nav className={navbar ? "navbar active" : 'navbar'}>
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>
            </div>
            {/* links */}
            <ul className="navbar__links">
                <li>
                    {loginToggle ? <Link to ="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo__badge">{qty}</span>
                        </span>
                    </Link> : null}
                </li>
                <li>
                    <Link to ="/">
                        Shop
                    </Link>
                </li>
                <li>
                    
                    
                    <Link to ="/login">
                        { loginToggle ? <Login /> : <Logout />}
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
