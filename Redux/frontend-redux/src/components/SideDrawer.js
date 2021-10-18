import '../components/SideDrawer.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideDrawer = ({show}) => {
    const sideDrawerClass = ["sidedrawer"];

    if(show) {
        sideDrawerClass.push("show");
    }

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart;

    const getCarttCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return <div className={sideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links" onClick={onclick}>
            <li>
                <Link to ="/cart">
                    <i className="fas fa-shopping-cart"></i>
                <span>
                    Cart <span className="sidedrawer_cartbadge">{getCarttCount()}</span>
                </span>
                </Link>
            </li>
            <li>
                <Link to="/">Shop</Link>
            </li>
        </ul>
    </div>
}

export default SideDrawer
