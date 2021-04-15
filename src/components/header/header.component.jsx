import {Link}  from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.style.scss'
import CartIcon from '../cart-icon/cart-icon.component'
import {auth} from  '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

 const Header =({currentUser,hidden})=>{
     return(
        <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div onClick={() => auth.signOut()} className='option'>
          SIGN OUT
        </div>
      ) : (
        <Link to='/signin' className='option'>SIGN IN</Link>
      )}
      <CartIcon />
      {
        hidden ? null:<CartDropDown />
      }
      
    </div>
  </div>
    )
 }
const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header)