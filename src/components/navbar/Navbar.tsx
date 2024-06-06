import Cart from './Cart';
import { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from '../../pages/products/Cart/CartContext';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [ismobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);

  const cart = useContext(CartContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <div className='navbar-container'>
      <div className='nav-left'>
        <div className='left-icon'>
          <div className='item'>
            <Link to='/'>Offers</Link>
          </div>
        </div>
        <Link className='center-link' to='/products-sort'>
          <div className='center'>
            <span>FIND HERE</span>
            <SearchIcon className='search-icon' />
          </div>
        </Link>
        <div className='center-icon'>
          <div className='cart-icon' onClick={!show ? handleShow : handleClose}>
            <AddShoppingCartIcon />
            <span>{productsCount}</span>
          </div>
        </div>
        <div className='navbar-cart-items'>{show && <Cart show={show} handleClose={handleClose} />}</div>
      </div>
      <div className='nav-wrapper'>
        <div className={ismobile ? 'mobile-navbar' : 'navbar'}>
          <div className='nav-items' onClick={() => setIsMobile(false)}>
            <div className='right'>
              <div className='item'>
                <Link to='/'>Homepage</Link>
              </div>
              <div className='item'>
                <Link to=''>About</Link>
              </div>
              <div className='item'>
                <Link to=''>Contact</Link>
              </div>
              <div className='item item-sign-in'>
                <Link to=''>
                  <PersonOutlineIcon />
                </Link>
                <span>Sign in</span>
              </div>
            </div>
          </div>
        </div>
        <div className='menu-bar' onClick={() => setIsMobile(!ismobile)}>
          {ismobile ? (
            <button>
              <CloseIcon className='menu-bar-icon' />
            </button>
          ) : (
            <button>
              <MenuIcon className='menu-bar-icon' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
