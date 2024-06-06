import { useContext } from 'react';
import { CartContext } from '../../pages/products/Cart/CartContext';
import CartProduct from '../../pages/products/Cart/CartProduct';

interface CartProps {
  show: boolean;
  handleClose: () => void;
}

const Cart: React.FC<CartProps> = ({ show, handleClose }) => {
  const cart = useContext(CartContext);

  const productsCount: number = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  const totalCost = cart.getTotalCost();

  return (
    <div className='cart-container'>
      {show && (
        <div className='cart'>
          {productsCount > 0 ? (
            <>
              <p className='cart-title'>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
              ))}
              <h1 className='cart-total'>Total: £{totalCost.toFixed(2)}</h1>

              <button className='cart-buy-btn' /* onClick={checkout} */> Purchase items!</button>
            </>
          ) : (
            <h1 className='cart-no-item-text'>There are no items in your cart!</h1>
          )}

          <button className='cart-close-btn' onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

/*   const checkout = async () => {
  await fetch('/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items: cart.items }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.url) {
        window.location.assign(response.url); // Forwarding user to Stripe
      }
    });
}; */
